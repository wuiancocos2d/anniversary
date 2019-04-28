<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData" @click="cardClickHandle">
      <div slot="waterfall-head">
        <Hero></Hero>
        <!-- <TimeTravel></TimeTravel> -->
      </div>
      <div class="img-info" slot-scope="props">
        <a-icon type="heart" theme="filled" style="heartStyle"/>
        <span class="rate">{{props.value.like}}</span>
        <p class="upName">{{props.value.upUser}}</p>
      </div>
    </vue-waterfall-easy>
    <a-modal :title="modal_data.title" centered v-model="modal_visible" @ok="handleOk">
      <ImgModal
        :title="modal_data.title"
        :imgUrl="modal_data.imgUrl"
        :context="modal_data.context"
        :like="modal_data.like"
      ></ImgModal>
    </a-modal>
  </div>
</template>
<script>
// import TimeTravel from "../../components/timeTravel/TimeTravel";
import vueWaterfallEasy from "vue-waterfall-easy";
import { getImages, getImgModal } from "../../service/getData.js";
import Hero from "./Hero";
import { Icon, Modal } from "ant-design-vue";
import ImgModal from "../../components/imgModal/ImageModal";
export default {
  name: "home",
  components: {
    // TimeTravel,
    vueWaterfallEasy,
    Hero,
    ImgModal,
    "a-modal": Modal,
    "a-icon": Icon
  },
  data() {
    return {
      imgsArr: [],
      group: 0,
      heartStyle: {
        color: "#8c7e7e",
        backgroundColor: "#8c7e7e"
      },
      modal_visible: false,
      modal_data: {
        'imgUrl': '',
        'title':'',
        'context':'',
        'like':0
      }
    };
  },
  methods: {
    async getData() {
      const newImages = await getImages();
      this.imgsArr = this.imgsArr.concat(newImages);
      this.group++;
    },
    cardClickHandle(event, { index, value }) {
      event.preventDefault();
      console.log(index, value);
      if (event.target.tagName.toLowerCase() === "img") {
        getImgModal().then((data)=>{
          this.modal_data = data
        },(reason)=> {
          this.$message.error(reason)
        })
        this.modal_visible = true
      }
    },
    handleOk() {
      this.modal_visible  = false
    },
  },
  created() {
    this.getData();
  },
  mounted() {}
};


</script>
<style lang="scss" scoped>
.waterfallContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #8c7e7e;
  .rate {
    color: #8c7e7e;
  }
  .upName {
    border-top: 1px solid #f2f2f2;
    color: #8c7e7e;
    text-align: left;
    padding: 5px 10px;
  }
}
.anticon {
  font-size: 13px;
  line-height: 13px;
  padding: 10px 5px;
  color: #8c7e7e;
}
</style>

