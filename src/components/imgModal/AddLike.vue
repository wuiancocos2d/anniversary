<template>
  <div class="add-like-container">
    <a-icon
      v-if="liked"
      type="heart"
      class="like-icon"
      theme="twoTone"
      twoToneColor="#eb2f96"
      @click="handleLikedClick"
    />
    <a-icon v-else class="like-icon" type="heart" @click="handleLikeClick"/>
    <span class="like-num">{{likeTimes}}</span>
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
      liking: false,
      stageCode: stageCode,
      iconSpin: false,
      likeTimes: 0,
      liked: false
    };
  },
  props: {
    resourceLike: Number,
    id: Number
  },
  computed: {
    ...mapState(["userStage", "userId", "uesrLikeList"])
  },
  mounted: function() {
    if (this.id) {
      const that = this;
      getImageLikeListById(this.id).then(res => {
        if (res.code === 200) {
          that.likeTimes = res.data.length;
          for (let i = 0; i < this.userLikeList.length; i++) {
            if (this.userLikeList[i]["id"] === this.id) {
              this.liked = true;
            }
          }
        }
      });
    }
  },
  methods: {
    handleLikeClick() {
      if (this.userStage === this.stageCode.like) {
        this.iconSpin = true;
        likeImage(this.id).then(res => {
          if (res.code === 200) {
            this.liked = true;
            this.likeTimes = this.likeTimes + 1;
            this.$emit("likeSuccess");
          } else {
            this.$error("msg:" + res.message);
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
    }
  }
};
</script>
<style lang="scss" scoped>
</style>