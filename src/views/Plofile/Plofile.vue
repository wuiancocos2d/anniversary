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
            <a-icon type="plus" />Click To Upload
          </button>
        </div>
        <div class="upload-container">
          <div class="uploadItems" v-for="(item,index) in userUpload" v-bind:key="index">
            <a-icon type="plus"/>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-modal
      title="Collect Image"
      v-model="modalVisible"
      :footer="null"
      :width=350
    >
      <UploadModal></UploadModal>
    </a-modal>
  </div>
</template>
<script>
import { Icon, Row, Col, Modal } from "ant-design-vue"
import UploadModal from './UploadModal'
export default {
  name: "Plofile",
  components: {
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col,
    UploadModal,
    "a-modal": Modal
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
      this.modalVisible = true
    }
  },
  created() {
  }
};
</script>
<style lang="scss">
.plofile-container {
  max-width: 1200px;
  text-align: left;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
