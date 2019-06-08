<template>
  <div class="add-like-container">
    <div class="content" v-if="loadInfoSuccess">
      <a-icon
        v-if="liked"
        type="heart"
        class="like-icon"
        theme="twoTone"
        twoToneColor="#eb2f96"
        @click="handleLikedClick"
      />
      <a-icon v-else class="like-icon" type="heart" @click="handleLikeClick" :spin="iconSpin"/>
      <span class="like-num">{{likeTimes}}</span>
    </div>
    <div v-else class="errorMessage">
      <span>{{loadMessage}}</span>
    </div>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
import { mapState } from "vuex";
import { stageCode } from "../../config/config";
import { likeImage, getImageLikeListById } from "../../service/getData";
export default {
  name: "AddLike",
  components: {
    "a-icon": Icon
  },
  data() {
    return {
      stageCode: stageCode,
      iconSpin: false,
      loadInfoSuccess: false,
      likeTimes: 0,
      liked: false,
      remainVote: 0,
      loadMessage: "Loading user Like info ..."
    };
  },
  props: {
    resourceLike: Number,
    id: Number
  },
  computed: {
    ...mapState(["userStage", "userId", "user"])
  },
  mounted: function() {
    this.ifLike();
  },
  watch: {
    id: function() {
      this.ifLike();
    }
  },
  methods: {
    handleLikeClick() {
      if (this.userStage === this.stageCode.like) {
        this.$modal.confirm({
          title: "Are you sure you want to vote for this photo?"
        });
        this.$modal.confirm;
        this.iconSpin = true;
        likeImage(this.id).then(res => {
          this.iconSpin = false;
          if (res.code === 200) {
            this.liked = true;
            this.likeTimes = this.likeTimes + 1;
            this.$emit("likeSuccess");
          } else {
            this.$error("msg:" + res.message);
            this.loadMessage = "Load failed ,please flesh and try again ";
          }
        });
      } else {
        const h = this.$createElement;
        this.$modal.info({
          title: "Notice",
          content: h("h3", {}, [
            h("p", "Has passed the 'Like' period"),
            h("p", "已经过了可以点赞的时期")
          ])
        });
      }
    },
    handleLikedClick() {
      const h = this.$createElement;
      this.$modal.info({
        title: "Notice",
        content: h("h3", {}, [
          h("p", "You areadly liked this image"),
          h("p", "不能重复点赞或取消点赞")
        ])
      });
    },
    ifLike() {
      if (this.id) {
        const that = this;
        getImageLikeListById(this.id).then(res => {
          if (res.code === 200) {
            this.loadInfoSuccess = true
            const list = res.data
            that.likeTimes = list.length
            this.liked = false
            for (let i = 0; i < list.length; i++) {
              (function(uid) {
                if (uid === that.userId) that.liked = true;
              })(list[i]["uid"]);
            }
          }else {
              this.loadInfoSuccess = true,
              this.loadMessage = res.message
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.add-like-container {
  display: block;
  width: 100%;
  margin-top: 15px;
  .like-icon {
    font-size: 32px;
  }
}
</style>