<template>
  <div class="editor-block">
    <div class="editor-container">
      <div class="coverImg">
        <a-upload
          name="avatar"
          listType="picture"
          class="avatar-uploader"
          :showUploadList="false"
          action="//jsonplaceholder.typicode.com/posts/"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar">
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'"/>
            <div class="ant-upload-text">Upload Cover Image</div>
          </div>
        </a-upload>
      </div>
      <a-input class="title" placeholder="Title"/>
      <div class="editor-text" ref="editor" style="text-align:left"></div>
      <button v-on:click="getContent">查看内容</button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import { Upload, Input, Icon } from "ant-design-vue";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      imageUrl: "",
      loading: false
    };
  },
  components: {
    "a-upload": Upload,
    "a-input": Input,
    "a-icon": Icon
  },
  methods: {
    getContent: function() {
      console.log(this.editorContent);
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      // "video", // 插入视频
      // "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    editor.customConfig.lang = {
      设置标题: "title",
      字号码: "font-size",
      字体: "font-family",
      正文: "p",
      链接文字: "link text",
      链接: "link",
      文字颜色: "font-color",
      背景颜色: "background-color",
      上传图片: "upload image",
      网络图片: "online-link",
      上传: "upload",
      创建: "init",
      插入: "insert"
    };
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    editor.create();
  }
};
</script>
<style lang="scss" scoped>
.editor-block {
  padding: 0 15px;
  width: 100%;
  min-width: 450px;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  line-height: 26px;
  .editor-container {
    max-width: 660px;
    margin: 0 auto;
  }
  .coverImg {
    // background: #f7f8f9;
    margin: 15px auto;
    color: #808080;
    background: #dddedf;
    text-align: center;
    line-height: 192px;
    .avatar-uploader {
      width: 100%;
      .ant-upload.ant-upload-select.ant-upload-select-picture {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .avatar-uploader {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
  .title {
    height: 44px;
    line-height: 44px;
    margin: 10px 0;
    outline: none;
    font-size: 32px;
    font-weight: 600;
    box-shadow: none;
  }
  .editor-text {
    margin-top: 20px;
    line-height: 25px;
    height: 100%;
  }
}
</style>

