<template>
  <div class="like-container">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { getImages } from "../../service/getData.js";
export default {
  name: "Likes",
  components: {
    "vue-waterfall-easy": vueWaterfallEasy
  },
  props: {},
  data() {
    return {
      imgsArr: [],
      group: 0
    };
  },
  methods: {
    async getData() {
      let imgs = await getImages();
      console.log(imgs);
      this.imgsArr = this.imgsArr.concat(imgs);
      this.group++;
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.like-container {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
