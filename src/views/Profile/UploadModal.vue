<template>
  <div class="upload-container">
    <a-form class="uploadForm" :layout="'horizontal'" :form="form" @submit="handleFormSubmit">
      <a-form-item label="Pic">
        <a-upload
          :action="imageUploadUrl"
          class="img-block"
          listType="picture-card"
          :showUploadList="false"
          :beforeUpload="beforeUpload"
          @change="handleImgChange"
          :name="'image'"
          :withCredentials="true"
          :disabled="disableChangeImage"
        >
          <img class="uploadShow" v-if="imageUrl" :src="imageUrl" alt="avatar">
          <div v-else>
            <a-icon class="plus" type="imgLoading? loading : plus"/>
            <p class="hint">Please upload you image here</p>
          </div>
        </a-upload>
      </a-form-item>
      <a-form-item label="Title: (less than 50)">
        <a-input
          placeholder="Give it a title~"
          v-decorator="[
                'resourceTitle',
                {rules: [{required: true,message: 'Please give a title'},{max: 50,message: 'Oops,title cannot exceed 100 words '}]}
            ]"
        ></a-input>
      </a-form-item>
      <a-form-item label="Description: (less than 500)">
        <a-textarea
          class="description"
          placeholder="Would you like to Tell us what your Pic is about?"
          :autosize="true"
          v-decorator="[
                'resourceContent',
                {rules: [{required: true,message: 'Please fill some description'},{max: 500,message: 'Oops,the description must not exceed 500,try cutting it down'}]}
          ]"
        ></a-textarea>
      </a-form-item>
      <a-form-item>
        <a-button v-if="!imageModal.id" type="primary" html-type="submit" :loading="uploading" block>
          <span>Upload</span>
        </a-button>
        <a-button
          v-if="imageModal.id && canEdit"
          type="primary"
          @click="handleUpdate"
          :loading="uploading"
          block
        >
          <span>Update</span>
        </a-button>
        <a-button
          v-if="imageModal.id && canEdit"
          @click="handleDelet"
          :loading="deleting"
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
import {
  uploadImgData,
  resourceDelete,
  resourceUpdate
} from "../../service/getData.js";
import config from "../../config/config";
import { mapState } from "vuex";

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
      imgLoading: false,
      form: this.$form.createForm(this),
      uploading: false,
      deleting: false,
      imageUploadUrl: config.IMG_UPLOAD_URL,
      disableChangeImage: false,
      imageUrl: null,
      image: {},
      file: null
    };
  },
  props: {
    imageModal: Object
  },
  computed: {
    ...mapState(["userStage"]),
    canEdit: function() {
      return this.$stageCode.upload === this.userStage;
    }
  },
  watch: {
    imageModal: function(val) {
      this.setForm(val);
    }
  },
  mounted: function() {
    if (this.imageModal.id) this.setForm(this.imageModal);
  },
  methods: {
    beforeUpload(file) {
      const isJPG = ["image/jpeg", "image/png"].includes(file.type)
      if (!isJPG) {
        this.$message.error("You can only upload JPG/JPGE/PNG file!")
      }
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 5MB!");
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
            "Error code:" + res.code + "  message:" + res.message
          );
        }
      }
    },

    handleFormSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (err) {
          this.$info.error(err)
          return;
        } else {
          let formVl = values;
          if (this.imageUrl.length > 0) {
            this.uploading = true;
            formVl.resourceUrl = this.imageUrl;
            const res = await uploadImgData(formVl);
            if (res.code === 200) {
              formVl.id = res.data;
              this.$emit("user-upload-event", formVl);
            } else {
              this.$message.error(res);
            }
            this.uploading = false;
          } else {
            this.$message.error("Please upload your Pictrue");
          }
        }
      });
    },

    handleUpdate(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (err) {
          this.$message.error("err:", err);
          return;
        } else {
          this.uploading = true;
          values.id = this.imageModal.id;
          const res = await resourceUpdate(values);
          if (res && res.code === 200) {
            this.$emit("userUpdate", values);
          }
          this.uploading = false;
        }
      });
    },
    handleDelet() {
      const that = this;
      this.$modal.confirm({
        title: "Do you want to delete this image",
        onOk() {
          that.deleting = true;
          resourceDelete(that.imageModal.id).then(res => {
            if (res && res.code === 200) {
              that.$message.success("deleted");
              that.$emit("userDelete", that.imageModal.id);
            } else {
              that.$messge.error("failed" + res);
            }
            that.deleting = false;
          });
        }
      });
    },
    setForm(data) {
      if (data && data.id) {
        this.disableChangeImage = true;
        this.$nextTick(function() {
          this.imageUrl = data.resourceUrl;
          this.form.setFieldsValue({ resourceTitle: data.resourceTitle })
          this.form.setFieldsValue({
            resourceContent: data.resourceContent
          })
        });
      } else {
        this.disableChangeImage = false;
        this.imageUrl = null;
        this.form.setFieldsValue({ resourceTitle: '' })
          this.form.setFieldsValue({
            resourceContent: ''
          });
      }
    }
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
