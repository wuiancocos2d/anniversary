<template>
  <a-menu v-model="current" mode="horizontal" class="nav-header">
    <a-menu-item class="nav-item">Login</a-menu-item>
  </a-menu>
</template>
<script>
// @ is an alias to /src
import { Menu } from "ant-design-vue";
export default {
  name: "vheader",
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item
  },
  data() {
    return {
      current: ["mail"]
    };
  }
};
</script>
<style lang="scss" scoped>
.nav-header {
  height: 60px;
    & .nav-item{
        line-height: 60px;
        height: 100%;
    }
}
</style>

