<template>
  <div class="add-like-container">
    <a-icon class="like-icon" type="heart" @click="handleLikeClick"/>
    <span class="like-num">{{imageItem.resourceLike}}</span>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
import { mapState } from "vuex";
import { stageCode } from "../../config/config";
export default {
  name: "AddLike",
  components: {
    "a-icon": Icon
  },
  data() {
    return {
      stageCode: stageCode
    };
  },
  props: {
    imageItem: Object
  },
  computed: {
    ...mapState(["userStage"])
  },
  methods: {
    handleLikeClick() {
      if (this.userStage === this.stageCode.like) {
      } else {
        const h = this.$createElement;
        this.$modal.info({
          title: "Notice",
          content: h("h3", {}, [
            h("p", "Has passed the 'Like' period"),
            h("p", "已经过了可以点赞的时期")
          ]),
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>