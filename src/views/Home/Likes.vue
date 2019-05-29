<template>
  <div class="like-container">
    <vue-waterfall-easy
      :imgsArr="imgsArr"
      @scrollReachBottom="getData"
      :imgWidth="220"
      :maxCols="8"
      srcKey="resourceUrl"
      @click="openModal"
    >
      <div class="hero" slot="waterfall-head">
        <Hero></Hero>
      </div>
      <div class="img-info" slot-scope="props">
        <div class="like" v-if="stage > 1">
          <a-icon class="likeIcon" type="heart"/>
          <span class="likeNum">{{props.value.resourceLike}}</span>
        </div>
        <div class="title">
          <p class="title-text">{{props.value.resourceTitle}}</p>
        </div>
      </div>
      <div slot="waterfall-over">
        <h3>...No More Images...</h3>
      </div>
    </vue-waterfall-easy>
    <a-modal :title="imgTitle" v-model="modalOpen" :footer="null" :centered="true" :width="350">
      <ImageModal :imageItem="imageItem"></ImageModal>
    </a-modal>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { Icon, Modal } from "ant-design-vue";
import { getHomepageImage } from "../../service/getData.js";
import ImageModal from "../../components/imgModal/ImageModal";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["stage"]),
  },
  data() {
    return {
      id: 0,
      imgsArr: [],
      page: 1,
      imgTitle: "",
      modalOpen: false,
      hasLike: false,
      imageItem: {}
    };
  },
  watch: {
    stage: function() {
      this.imgsArr = []
      this.getData()
    }
  },
  methods: {
    async getData() {
      const res = await getHomepageImage(this.page)
      if(res.code === 200) {
        this.imgsArr.concat(res.data)
        this.page++
      }else {
        this.$message.error('error request images:',res.message)
      }
    },
    openModal(event, { value }) {
      this.imageItem = value;
      this.imgTitle = value.resourceTitle;
      this.modalOpen = true;
    }
  },
  created() {
    if (this.stage !== 0) this.getData();
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
        white-space: normal;
      }
    }
  }
}
</style>
