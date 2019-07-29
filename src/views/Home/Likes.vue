<template>
  <div class="like-container">
    <div class="water-container" >
      <vue-waterfall-easy
      v-if="imgsArr.length >0"
        ref="waterfall"
        :imgsArr="imgsArr"
        @scrollReachBottom="getData"
        :imgWidth="imgWidth"
        :gap="12"
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
          <VFooter></VFooter>
        </div>
      </vue-waterfall-easy>
    </div>
    <a-modal
      :title="imgTitle"
      v-model="modalOpen"
      :footer="null"
      :centered="true"
      :width="modalWidth"
      v-on:operationDone="closeModal"
    >
      <ImageModal :imageItem="imageItem"></ImageModal>
    </a-modal>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { Modal } from "ant-design-vue";
import { getHomepageImage,getUserPoint } from "../../service/getData.js";
import ImageModal from "../../components/imgModal/ImageModal";
import { mapState,mapMutations } from "vuex";
import { stageCode } from "../../config/config";
import Hero from "../../components/Hero/Hero";
import VFooter from "../../components/common/VFooter";
export default {
  name: "Likes",
  components: {
    "vue-waterfall-easy": vueWaterfallEasy,
    Hero,
    "a-modal": Modal,
    ImageModal,
    VFooter
  },
  computed: {
    ...mapState(["userId","userStage"]),
  },
  data() {
    return {
      id: 0,
      imgsArr: [],
      page: 1,
      imgTitle: "",
      modalOpen: false,
      firstLoaded: false,
      pointList: [],
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
      imgWidth: 220,
      modalWidth: 350,
      windowSize: 0,
      loading: false
    };
  },
  //测试用
  // watch: {
  //   userStage: function() {
  //     (this.imgsArr = []), (this.page = 1), this.getData();
  //   }
  // },
  mounted: function() {
    const that = this;
    if(this.userStage === 6) {
      this.getUserPointList()
    }
    this.$nextTick(() => {
      this.handleSize();
      window.addEventListener("resize", that.handleSize);
      this.getData();
    });
  },
  watch: {
    userStage: function() {
      this.getData()
      if(this.userStage === 6) {
        this.pointList = [],
        this.getUserPointList()
      }
    }
  },
  methods: {
    ...mapMutations(['USER_POINT_LIST']),
    getData() {
      if(this.loading || !this.userStage) return
      this.loading = true
      getHomepageImage(this.page).then(
        res => {
          if (res && res.code === 200) {
            if (res.data && res.data.length === 0) {
              //加载结束
              this.$refs.waterfall.waterfallOver();
            } else {
              //打分返回数据结构不同
              if (this.userStage < this.stageCode.rate) {
                this.imgsArr = this.imgsArr.concat(res.data);
                this.page++;
              } else if (this.userStage === this.stageCode.rate) {
                for (let i = 0; i < res.data.length; i++) {
                  this.imgsArr.push(res.data[i]["resource"]);
                }
              }
            }
            if(!this.firstLoaded) this.firstLoaded = true
          } else {
            this.$message.error("connect error");
          }
          this.loading = false
        },
        err => {
          this.loading = false
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
    },
    handleSize() {
      if (window.innerWidth < 576) {
        this.imgWidth = 189;
        this.modalWidth = 350;
      } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
        this.modalWidth = 760;
      } else if (window.innerWidth > 1200) {
        this.modalWidth = 1000;
      } else {
        this.modalWidth = 500;
      }
    },
    getUserPointList() {
      getUserPoint().then(
        res => {
          this.USER_POINT_LIST(res.data)
          console.log('getpoint',res)
        },
        err => {
          console.log('getUserPointList error' + err)
        }
      )
    }
  },
  
};
</script>
<style lang="scss" >
.like-container {
  position: absolute;
  top: 60px;
  bottom: 0;
  display: block;
  width: 100%;
  padding: 0 2px;
  overflow-y: auto;
  .water-container {
    height: 100%;
  }
  .hero {
    margin-bottom: 50px;
  }
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
      background-color: #fff;
      .title-text {
        margin: 0;
        font-size: 15px;
        color: #5a5a5a;
        text-align: left;
        white-space: normal;
      }
    }
  }
  .img-box.default-card-animation .alink.img-inner-box {
    border-radius: 3px;
    overflow: hidden;
    -webkit-transition: transform 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02),
      0 4px 8px rgba(0, 0, 0, 0.02);
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02),
      0 4px 8px rgba(0, 0, 0, 0.02);
    transition-duration: 0.15s;
  }
  .img-box.default-card-animation .alink.img-inner-box:hover {
    margin-top: -2px;
    opacity: 0.9;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>
