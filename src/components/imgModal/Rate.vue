<template>
  <div class="rate-container">
    <div class="rate-area">
      <span class="ant-rate-text">Picture: {{pointMind}} point</span>
      <a-rate :count="10" v-model="pointMind"></a-rate>
      <span class="ant-rate-text">Structure: {{pointSkill}} point</span>
      <a-rate :count="10" v-model="pointSkill"></a-rate>
      <span class="ant-rate-text">Beauty: {{pointTheme}} point</span>
      <a-rate :count="10" v-model="pointTheme"></a-rate>
    </div>
    <a-button type="primary" :loading="rating">Update Rate</a-button>
  </div>
</template>
<script>
import { Rate,Button } from "ant-design-vue";
import { rateImage } from "../../service/getData";
export default {
  name: "Rate",
  components: {
    "a-rate": Rate,
    "a-button": Button
  },
  props: {
    id: Number
  },
  data() {
    return {
      pointMind: 0,
      pointSkill: 0,
      pointTheme: 0,
      rating: false
    };
  },
  methods: {
    handleRate: function() {
      this.rating = true;
      const imageRateData = {
        id: this.id,
        pointMind: this.pointMind,
        pointSkill: this.pointSkill,
        pointTheme: this.pointTheme
      };
      rateImage(imageRateData).then(
        res => {
          if (res.code === 200) {
            this.$message.success("Rate successful");
            this.$emit("rateSuccess");
          }
        },
        err => {
          this.$message.error("Rate error:" + res.message);
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

