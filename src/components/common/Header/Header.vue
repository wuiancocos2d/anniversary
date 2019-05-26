<template>
  <div>
    <a-row>
      <a-col :xs="2" :sm="2" :md="0" :lg="0" :xl="0" :xxl="0">
        <navDraw></navDraw>
      </a-col>
      <a-col :xs="22" :sm="22" :md="6" :lg="5" :xl="5" :xxl="4">
        <div class="logo">
          <img src="../../../assets/logo-with20.svg" alt class="logoImg">
        </div>
      </a-col>
      <a-col :xs="0" :sm="0" :md="18" :lg="19" :xl="19" :xxl="20">
        <nav-menu :mode="'horizontal'"></nav-menu>
      </a-col>
    </a-row>
  </div>
</template>
<script>
// @ is an alias to /src
import { Row, Col } from "ant-design-vue";
import Navigation from "./Nav";
import navDraw from "./NavDraw";
export default {
  name: "vheader",
  components: {
    "a-row": Row,
    "a-col": Col,
    "nav-menu": Navigation,
    navDraw
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.nav-header {
  height: 60px;
  border: none;
  padding-right: 40px;

  &.right {
    float: right;
  }
}

.logo {
  .logoImg {
    width: 178px;
    height: 46px;
    white-space: nowrap;
    overflow: hidden;
    text-indent: 150%;
  }
}
</style>

