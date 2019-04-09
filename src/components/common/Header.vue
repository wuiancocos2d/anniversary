<template>
  <a-row>
    <a-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5" :xxl="4">
      <div class="logo"></div>
    </a-col>
    <a-col :xs="0" :sm="0" :md="18" :lg="19" :xl="19" :xxl="24">
    <a-menu theme="light" mode="horizontal" class="nav-header right" >
      <a-menu-item class="nav-item">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item class="nav-item">
        <router-link to="/login">login</router-link>
      </a-menu-item>
    </a-menu>
    </a-col>
  </a-row>
</template>
<script>
// @ is an alias to /src
import { Menu, Row, Col } from "ant-design-vue";

export default {
  name: "vheader",
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-row": Row,
    "a-col": Col
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
.nav-header {
  height: 60px;
  border: none;
  & .nav-item {
    line-height: 60px;
    height: 100%;
  }
  &.right {
    float: right;
  }
}
</style>

