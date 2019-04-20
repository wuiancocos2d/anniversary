<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div slot="waterfall-head">
        <div class="upload-block">
          <a-button type="dashed" block @click="handleUploadClick">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox"/>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p
              class="ant-upload-hint"
            >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </a-button>
        </div>
      </div>
    </vue-waterfall-easy>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy"
import { getImages } from "../service/getData.js"
import { Button, Icon } from "ant-design-vue"


export default {
  name: "profile",
  components: {
    vueWaterfallEasy,
    "a-icon": Icon,
    "a-button": Button,

  },
  data() {
    return {
      imgsArr: [],
      group: 0
    };
  },

  methods: {
    async getData() {
      const newImages = await getImages();
      this.imgsArr = this.imgsArr.concat(newImages);
      this.group++;
    },
    handleUploadClick() {
      this.$router.push('upload/')
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
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: #fafafa;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 15px 0;
  .anticon.anticon-inbox {
    font-size: 48px;
    color: #40a9ff;
  }
}
</style>
