<template>
  <div class="like-container">
    <vue-waterfall-easy
      ref="waterfall"
      :imgsArr="imgsArr"
      @scrollReachBottom="getData"
      :imgWidth="imgWidth"
      :gap="16"
      :maxCols="4"
      srcKey="resourceUrl"
      @click="openModal"
    >
      <div class="hero" slot="waterfall-head">
        <Hero></Hero>
      </div>
      <div class="img-info" slot-scope="props">
        <!-- <div class="like" v-if="userStage > stageCode.approve">
          <a-icon v-if="props.value.liked" type="heart" theme="twoTone" twoToneColor="#eb2f96"/>
          <a-icon v-else class="likeIcon" type="heart"/>
          <span class="likeNum">{{props.value.resourceLike}}</span>
        </div>-->
        <div class="title">
          <p class="title-text">{{props.value.resourceTitle}}</p>
        </div>
      </div>
      <div slot="waterfall-over">
        <h3>...No More Images...</h3>
      </div>
    </vue-waterfall-easy>
    <a-modal
      :title="imgTitle"
      v-model="modalOpen"
      :footer="null"
      :centered="true"
      :width="350"
      v-on:operationDone="closeModal"
    >
      <ImageModal :imageItem="imageItem"></ImageModal>
    </a-modal>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { Modal } from "ant-design-vue";
import { getHomepageImage } from "../../service/getData.js";
import ImageModal from "../../components/imgModal/ImageModal";
import { mapState, mapActions } from "vuex";
import { stageCode } from "../../config/config";
import Hero from "../../components/Hero/Hero";
export default {
  name: "Likes",
  components: {
    "vue-waterfall-easy": vueWaterfallEasy,
    Hero,
    "a-modal": Modal,
    ImageModal
  },
  computed: {
    ...mapState(["userStage"])
  },
  data() {
    return {
      id: 0,
      imgsArr: [],
      page: 1,
      imgTitle: "",
      modalOpen: false,
      imageItem: {
        id: 0,
        pointMind: 0,
        pointSkill: 0,
        pointTheme: 0,
        resourceAward: "string",
        resourceContent: "string",
        resourceLike: 0,
        resourcePoint: 0,
        resourceStatus: "string",
        resourceTitle: "string",
        resourceUrl: "string",
        userId: 0,
        liked: false
      },
      stageCode: stageCode,
      //默认图片宽度
      imgWidth: 236
    };
  },
  //测试用
  watch: {
    userStage: function() {
      (this.imgsArr = []), (this.page = 1), this.getData();
    }
  },
  mounted:function(){
    console.log('window',window,'inner',window.innerWidth)
    if(window.innerWidth < 500) {
      this.imgWidth = 189
    }
    console.log(this.imgWidth)
  },
  methods: {
    ...mapActions(["syncUserImages"]),
    getData() {
      getHomepageImage(this.page).then(
        res => {
          if (res && res.code === 200) {
            if (res.data && res.data.length === 0)
              this.$refs.waterfall.waterfallOver();
            if (this.userStage < this.stageCode.rate) {
              this.imgsArr = this.imgsArr.concat(res.data);
              this.page++;
            } else if (this.userStage === this.stageCode.rate) {
              for (let i = 0; i < res.data.length; i++) {
                this.imgsArr.push(res.data[i]["resource"]);
              }
            }
          } else {
            this.$message.error("connect error");
          }
        },
        err => {
          this.$message.error("err", err);
        }
      );
    },
    openModal(event, { value }) {
      this.imageItem = value;
      this.imgTitle = value.resourceTitle;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
      this.imageItem = null;
    }
  },
  created() {
    if (this.userStage > this.$stageCode.upload) {
      this.getData();
      this.syncUserImages();
    }
  }
};
</script>
<style lang="scss" scoped>
.like-container {
  display: block;
  height: 100%;
  width: 100%;
  padding: 0 2px;
  overflow-y: auto;
  .img-info {
    .like {
      margin-top: 15px;
      line-height: 28px;
      background-color: #fff;
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
        font-size: 18px;
        color: #5a5a5a;
        text-align: left;
        white-space: normal;
      }
    }
  }
}
</style>
