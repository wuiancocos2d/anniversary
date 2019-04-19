<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div slot="waterfall-head">
        <div class="upload-block">
          <a-upload-dragger
            name="file"
            :multiple="true"
            action="//jsonplaceholder.typicode.com/posts/"
            @change="handleChange"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox"/>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p
              class="ant-upload-hint"
            >Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </a-upload-dragger>
        </div>
      </div>
    </vue-waterfall-easy>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy"
import { getImages } from "../service/getData.js"
import { Upload, Icon } from 'ant-design-vue'
export default {
  name: "profile",
  components: {
    vueWaterfallEasy,
    "a-upload-dragger": Upload.dragger,
    "a-icon": Icon
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
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
</style>
