<template>
  <div class="plofile-container">
    <UserPlofile></UserPlofile>
    <a-row class="imgRow">
      <a-col v-for="item in userUpload" :key="item.id" :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <a-card hoverable @click="handleCardClick(item)">
          <img :src="item.imgUrl" :alt="item.imgTitle" slot="cover">
          <a-card-meta :title="item.imgTitle">
            <template slot="description">{{item.description}}</template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-modal title="Collect Image" v-model="modalVisible" :footer="null" :width="350">
      <UploadModal
        :pState="editOrUpload"
        v-on:user-upload-event="handleUploadSuccess"
        :imageModal="{}"
      ></UploadModal>
    </a-modal>
    <a-modal title="Rules notice">

    </a-modal>
  </div>
</template>
<script>
import {  Row, Col, Modal, Card } from "ant-design-vue";
import UploadModal from "./UploadModal"
import UserPlofile from './UserPlofile'
export default {
  name: "Plofile",
  components: {
    "a-row": Row,
    "a-col": Col,
    UploadModal,
    UserPlofile,
    "a-modal": Modal,
    "a-card": Card,
    "a-card-meta": Card.Meta
  },
  data() {
    return {
      user: {
        name: ""
      },
      userUpload: [],
      modalVisible: false,
      imageModal: {
        title: "",
        description: ""
      },
      editOrUpload: "upload"
    };
  },
  methods: {
    handleUploadBtn: function() {
      if (this.userUpload.length < 2) {
        this.modalVisible = true;
        this.editOrUpload = "upload";
      } else {
        this.outOfImages()
      }
    },
    handleUploadSuccess: function(data) {
      if (data) {
        this.modalVisible = false;
        console.log(data);
        this.userUpload.push(data);
      }
    },
    handleCardClick: function(item) {
      this.modalVisible = true;
      this.imageModal.id = item.id;
      this.imageModal.title = item.imgTitle;
      this.imageModal.description = item.description;
      this.editOrUpload = "change";
    },
    outOfImages() {
      const h = this.$createElement
      this.$info({
        title: 'This is a notification message',
        content: h('div',{}, [
          h('p', 'You can only upload 2 photos'),
        ]),
        onOk() {},
      });
    },
  },
  created() {}
};
</script>
<style lang="scss">
.plofile-container {
  max-width: 1200px;
  text-align: left;
  margin: 0 auto;
  padding-top: 50px;
  .imgRow {
    margin-top: 30px;
  }
}
</style>
