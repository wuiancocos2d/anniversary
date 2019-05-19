<template>
  <div class="plofile-container">
    <a-row>
      <a-col :span="20" :offset="2">
        <div class="user-infor">
          <div class="user-name">
            <p>{{user.name}}</p>
          </div>
        </div>
        <div class="uploadBlock">
          <button @click="handleUploadBtn">
            <a-icon type="plus"/>Click To Upload
          </button>
        </div>
      </a-col>
    </a-row>
    <a-row class="imgRow">
      <a-col v-for="item in userUpload" :key="item.id" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <a-card
          hoverable
        >
          <img :src="item.imgUrl" :alt="item.imgTitle" slot="cover">
          <a-card-meta :title="item.imgTitle">
            <template :slot="description">{{item.description}}</template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-modal title="Collect Image" v-model="modalVisible" :footer="null" :width="350">
      <UploadModal v-on:user-upload-event="handleUploadSuccess"></UploadModal>
    </a-modal>
  </div>
</template>
<script>
import { Icon, Row, Col, Modal,Card } from "ant-design-vue";
import UploadModal from "./UploadModal";
export default {
  name: "Plofile",
  components: {
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col,
    UploadModal,
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
      modalVisible: false
    };
  },
  methods: {
    handleUploadBtn: function() {
      this.modalVisible = true;
    },
    handleUploadSuccess: function(data) {
      if (data) {
        this.modalVisible = false;
        this.userUpload.push(data);
      }
    }
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
