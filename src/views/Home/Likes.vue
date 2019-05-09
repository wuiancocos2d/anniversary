<template>
  <div class="like-container">
    <vue-waterfall-easy
      :imgsArr="imgsArr"
      @scrollReachBottom="getData"
      :imgWidth="220"
      :maxCols="8"
      @click="openModal"
    >
      <div class="hero" slot="waterfall-head">
        <Hero></Hero>
      </div>
      <div class="img-info" slot-scope="props">
        <div class="like">
          <a-icon class="likeIcon" type="heart"/>
          <span class="likeNum">{{props.value.like}}</span>
        </div>
        <div class="title">
          <p class="title-text">{{props.value.title}}</p>
        </div>
      </div>
    </vue-waterfall-easy>
    <a-modal :title="imgTitle" v-model="modalOpen" :footer="null" :centered=true :width="420">
      <ImageModal :status="imgStatus" :imgUrl="imgUrl" :title="imgTitle" :ableRate="ableRate"></ImageModal>
    </a-modal>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { Icon, Modal } from "ant-design-vue";
import { getImages } from "../../service/getData.js";
import ImageModal from "../../components/imgModal/ImageModal";
import Hero from "./Hero";
export default {
  name: "Likes",
  components: {
    "vue-waterfall-easy": vueWaterfallEasy,
    Hero,
    "a-icon": Icon,
    "a-modal": Modal,
    ImageModal
  },
  props: {},
  data() {
    return {
      imgsArr: [],
      group: 0,
      imgUrl: "",
      imgTitle: "",
      imgStatus: "",
      modalOpen: false,
      ableRate: true,
    };
  },
  methods: {
    async getData() {
      let imgs = await getImages();
      this.imgsArr = this.imgsArr.concat(imgs);
      this.group++;
    },
    openModal(event, { value }) {
      this.imgUrl = value.src;
      console.log(value.src)
      this.imgTitle = value.title;
      this.modalOpen = true;
    },
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
  padding: 0 2px;
  .img-info {
    .like {
      margin-top: 15px;
      line-height: 28px;
      .likeIcon {
        font-size: 16px;
        padding: 0 5px;
      }
      .likeNum {
        font-size: 15px;
      }
    }
    .title {
      border-top: 1px solid #e0dede;
      padding: 15px 10px;
      line-height: 20px;
      .title-text {
        margin: 0;
        font-size: 16px;
        color: #5a5a5a;
        text-align: left;
        white-space: nowrap;
      }
    }
  }
}
</style>
