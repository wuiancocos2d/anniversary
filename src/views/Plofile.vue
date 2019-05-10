<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"  @click="cardClickHandle">
      <div slot="waterfall-head">
        <div class="upload-block">
          <a-button class="upload-btn" type="dashed" block @click="handleUploadClick">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox"/>
            </p>
            <p class="ant-upload-text">Click to Upload a new Picture</p>
            <p
              class="ant-upload-hint"
            >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </a-button>
        </div>
      </div>
    </vue-waterfall-easy>
    <a-modal
      :title=modal_title
      centered
      v-model="modal_visible"
      @ok="handleOk"
    >
    <ImgModal :title=modal_title :imgUrl=imgUrl :context=context :like=like></ImgModal>
    </a-modal>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy"
import { getImages } from "../service/getData.js"
import { Button, Icon, Modal } from "ant-design-vue"
import ImgModal from '../components/imgModal/ImageModal'
export default {
  name: "profile",
  components: {
    vueWaterfallEasy,
    "a-icon": Icon,
    "a-button": Button,
    ImgModal,
    "a-modal": Modal
  },
  data() {
    return {
      imgsArr: [],
      group: 0,
      modal_title: 'National Geographic',
      modal_visible: false,
      imgUrl: 'https://hbimg.huabanimg.com/561e1911eb7d9707a9c80b93b136768be1b560b125284-DAtomO_fw658',
      context: '孵化 ‧ 鱼-JieVan_鱼,金,卵_涂鸦王国插画',
      like: 10
    };
  },

  methods: {
    async getData() {
      const newImages = await getImages();
      this.imgsArr = this.imgsArr.concat(newImages)
      this.group++;
    },
    handleUploadClick() {
      this.$router.push('upload/')
    },
    cardClickHandle(event, {index,value}) {
      event.preventDefault()
      if(event.target.tagName.toLowerCase() === 'img') {
        this.modal_visible = true
      }
    },
    handleOk() {
      this.modal_visible  = false
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.upload-block {
  border: 1px dashed #d9d9d9;
  transition: border-color 0.3s;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: #fafafa;
  margin-top: 20px;
  margin-bottom: 15px;
  .upload-btn {
    height: 100%;
  }
  .anticon.anticon-inbox {
    font-size: 48px;
    color: #40a9ff;
  }
}
</style>
