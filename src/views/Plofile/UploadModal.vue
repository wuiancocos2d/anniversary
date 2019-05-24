<template>
  <div class="upload-container">
    <a-form class="uploadForm" :layout="'horizontal'" :form="form" @submit="handleFormSubmit">
      <a-form-item label="Pic">
        <a-upload
          class="img-block"
          listType="picture-card"
          :showUploadList="false"
          :action="imgaeUploadUrl"
          :beforeUpload="beforeUpload"
          @change="handleImgChange"
          :name="'image'"
        >
          <img class="uploadShow" v-if="imageUrl" :src="imageUrl" alt="avatar">
          <div v-else>
            <a-icon class="plus" type="plus"/>
            <p class="hint">Please upload you image here</p>
          </div>
        </a-upload>
      </a-form-item>
      <a-form-item label="Title">
        <a-input
          placeholder="Give it a title~"
          v-decorator="[
                'title',
                {rules: [{required: true,message: 'Please give a title'}]}
            ]"
        ></a-input>
      </a-form-item>
      <a-form-item label="description">
        <a-textarea
          class="description"
          placeholder="Would you like to Tell us what your Pic is about?"
          :autosize="true"
          v-decorator="[
                'description',
                {rules: [{required: true,message: 'Please fill description'},{max: 500,message: 'Oops,the description is getting long ,try cutting it down'}]}
          ]"
        ></a-textarea>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" :loading="uploading" block>
          <div v-if="pState==='upload'">Upload</div>
          <div v-if="pState==='change'">Update</div>
        </a-button>
        <a-button
          v-if="pState==='change'"
          @click="handleDelet"
          :loading="uploading"
          type="danger"
          class="deletBtn"
          block
        >Delet</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { Icon, Upload, Form, Input, Button } from "ant-design-vue";
import { uploadImgData } from "../../service/getData.js";
import config from "../../config/config";
export default {
  name: "UploadModal",
  components: {
    "a-icon": Icon,
    "a-upload": Upload,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-textarea": Input.TextArea,
    "a-button": Button
  },
  data() {
    return {
      id: null,
      imgLoading: false,
      imageUrl: "",
      form: this.$form.createForm(this),
      uploading: false,
      imgaeUploadUrl: config.IMGUPLOAD_URL
    };
  },
  props: {
    imageModal: {
      type: Object
    },
    pState: {
      type: String
    }
  },
  mounted() {
    this.$nextTick(function() {
      const imageModal = this.imageModal;
      if (imageModal && imageModal.id !== undefined) {
        this.form.setFieldsValue({ title: imageModal.title });
        this.form.setFieldsValue({ description: imageModal.description });
      }
    });
  },
  methods: {
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
    },
    handleImgChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        const res = info.file.response;
        if (res.code === 200) {
          this.imageUrl = res.data;
        } else {
          this.$message.error(
            "Error code:" + res.code + "  message:" + res.data
          );
        }
      }
    },
    handleFormSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (err) {
          console.log("err");
          return;
        } else {
          let formVl = values;
          if (this.imageUrl.length > 0) {
            this.uploading = true;
            formVl.resourceUrl = this.imageUrl;
            const res = await uploadImgData(formVl);
            this.uploading = false;
            if (res.data) {
              this.$emit("user-upload-event", res.data.data)
            }
          } else {
            this.$message.error("Please upload your Pictrue")
          }
        }
      });
    },
    handleDelet() {}
  }
};
</script>
<style lang="scss" scoped>
.upload-container {
  width: 100%;
  padding: 0 10px;
  .img-block {
    display: block;

    text-align: center;
    cursor: pointer;

    .plus {
      margin-top: 28px;
      padding-bottom: 20px;
      position: relative;
      font-size: 38px;
    }
    .hint {
      width: 262px;
      top: 20px;
      left: 50px;
    }

    .uploadShow {
      width: 264px;
      height: auto;
    }
    .deletBtn {
      display: block;
      margin-top: 10px;
    }
  }
}
</style>
