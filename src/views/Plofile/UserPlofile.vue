<template>
  <div class="userPlofile">
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
  </div>
</template>
<script>
import { Icon, Row, Col, Modal, Card } from "ant-design-vue";
export default {
  name: "UserPlofile",
  components: {
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
