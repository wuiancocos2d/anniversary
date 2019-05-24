<template>
  <div class="userPlofile">
    <a-row>
      <a-col :span="20" :offset="2">
        <div class="user-infor">
          <div class="user-name">
            <p>{{userInfo.userNm}}</p>
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
import { Icon, Row, Col } from "ant-design-vue"
import {mapState} from 'vuex'
export default {
  name: "UserPlofile",
  components: {
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col
  },
  computed: {
    ...mapState(['userInfo'])
  }
};
</script>
<style lang="scss" scoped>
</style>
