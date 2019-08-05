<template>
  <div class="rate-container">
    <div class="rate-area">
      <span class="ant-rate-text">Theme(35%): {{pointMind}} point</span>
      <a-rate :count="10" v-model="pointMind" :disabled="rated"></a-rate>
      <span class="ant-rate-text">Techniques(35%): {{pointSkill}} point</span>
      <a-rate :count="10" v-model="pointSkill" :disabled="rated"></a-rate>
      <span class="ant-rate-text">Creativity(30%): {{pointTheme}} point</span>
      <a-rate :count="10" v-model="pointTheme" :disabled="rated"></a-rate>
    </div>
    <a-button v-if="rated === false" type="primary" :loading="rating" @click="handleRate">Update Rate</a-button>
  </div>
</template>
<script>
import { Rate, Button } from "ant-design-vue";
import { rateImage } from "../../service/getData";
import { mapState,mapMutations } from "vuex";

export default {
  name: "Rate",
  components: {
    "a-rate": Rate,
    "a-button": Button
  },
  props: {
    id: Number
  },
  computed: {
    ...mapState(["userPointList"])
  },
  mounted: function() {
    this.updateRate();
  },
  data() {
    return {
      loading: true,
      pointMind: 0,
      pointSkill: 0,
      pointTheme: 0,
      rating: false,
      rated: true
    };
  },
  watch: {
    id: function() {
      this.reset();
      this.updateRate();
    }
  },

  methods: {
    ...mapMutations(["USER_POINT_LIST"]),
    handleRate: function() {
      if (this.rating === true) return;
      this.rating = true;
      const imageRateData = {
        resourceId: this.id,
        scoreMind: this.pointMind,
        scoreSkill: this.pointSkill,
        scoreTheme: this.pointTheme
      };
      rateImage(imageRateData).then(
        res => {
          this.rated = true;
          
          if (res && res.code === "OK") {
            this.rating = false;
            this.$message.success("Rate successful");
            this.$emit("rateSuccess")
            this.addNewRate(imageRateData)

          } else {
            this.$message.error("Rate faild:" + res.message);
          }
        },
        err => {
          this.$message.error("Rate error:" + err + err.message);
        }
      );
    },
    updateRate: function() {
      const list = this.userPointList;
      this.rated = false
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.resourceId === this.id) {
          
          this.rated = true
          this.pointMind = item.scoreMind;
          this.pointSkill = item.scoreSkill;
          this.pointTheme = item.scoreTheme;
        }
      }
    },
    reset: function() {
      this.loading = false;
      this.pointMind = 0;
      this.pointSkill = 0;
      this.pointTheme = 0;
      this.rating = false;
      this.rated = false;
    },
    addNewRate: function(imageRate){
      let item = imageRate;
      item.resourceId = imageRate.resourceId;

      let newList = this.userPointList;
      newList.push(item)
      this.USER_POINT_LIST(newList)
    }
  }
};
</script>
<style lang="scss" scoped>
.ant-rate-text {
  padding-top: 5px;
  margin: 0;
  font-weight: 600;
  color: #333;
  font-size: 15px;
}
</style>

