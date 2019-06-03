<template>
  <div class="plofile-container">
    <div class="fixed-container">
      <a-row>
        <a-col :span="20" :offset="2">
          <UserProfile v-on:listenOpenUploadModal="openUploadModal"></UserProfile>
          <UploadItems v-on:listenUpdateImage="openUpdateModal"></UploadItems>
        </a-col>
      </a-row>
      <a-modal title="Collect Image" v-model="modalVisible" :footer="null" :width="350">
        <UploadModal
          :imageModal="imageModal"
          v-on:user-upload-event="handleUploadSuccess"
          v-on:userDelete="deleteSuccess"
          v-on:userUpdate="updateSuccess"
        ></UploadModal>
      </a-modal>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Row, Col, Modal } from "ant-design-vue";
import UploadModal from "./UploadModal";
import UserProfile from "./UserProfile";
import UploadItems from "./UploadItems";
export default {
  name: "Plofile",
  components: {
    "a-row": Row,
    "a-col": Col,
    "a-modal": Modal,
    UploadModal,
    UserProfile,
    UploadItems
  },
  data() {
    return {
      modalVisible: false,
      imageModal: {}
    };
  },
  mounted() {
    this.syncUserImages();
  },
  computed: {
    ...mapState(["userUploads"])
  },
  methods: {
    ...mapActions(["syncUserImages"]),
    openUploadModal: function() {
      this.imageModal = false
      if (this.userUploads.length < 2) {
        this.modalVisible = true;
      } else {
        this.outOfImages();
      }
    },
    openUpdateModal: function(imgModal) {
      this.imageModal = imgModal;
      this.modalVisible = true;
    },
    handleCardClick: function(item) {
      this.modalVisible = true;
      this.imageModal.id = item.id;
      this.imageModal.title = item.imgTitle;
      this.imageModal.description = item.description;
      this.editOrUpload = "change";
    },
    outOfImages() {
      const h = this.$createElement;
      this.$info({
        title: "This is a notification message",
        content: h("div", {}, [h("p", "You can only upload 2 photos")]),
        onOk() {}
      });
    },
    handleUploadSuccess: function(data) {
      this.imageModal = null;
      this.modalVisible = false;
      this.syncUserImages();
    },
    deleteSuccess: function(imgId) {
      this.modalVisible = false;
      this.syncUserImages();
    },
    updateSuccess: function(imgInfo) {
      this.$message.success("update successful");
      this.modalVisible = false;
      this.syncUserImages();
    }
  }
};
</script>
<style lang="scss">
.plofile-container {
  width: 100%;
  text-align: left;
  margin: 0 auto;
  padding-top: 50px;
  display: block;
  height: 100%;
  overflow-y: auto;
  .fixed-container {
    max-width: 1200px;
    margin: 0 auto;
    display: block;
  }
  .imgRow {
    margin-top: 30px;
  }
}
</style>
