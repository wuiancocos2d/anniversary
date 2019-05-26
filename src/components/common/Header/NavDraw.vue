<template>
  <div class="navDrawer-contaienr">
    <a class="drawer-handel" @click="showDrawer">
      <a-icon v-if="fold" type="menu-unfold"/>
      <a-icon v-else type="menu-unfold" />
    </a>
    <a-drawer
      title="25th Anniversary"
      :visible="visible"
      @close="onClose"
      :closable="false"
      :placement="placement"
    >
      <Navigation :mode="'inline'"></Navigation>
    </a-drawer>
  </div>
</template>
<script>
import { Drawer ,Icon} from "ant-design-vue";
import Navigation from "./Nav";
export default {
  name: "navDraw",
  components: {
    "a-drawer": Drawer,
    Navigation,
    "a-icon": Icon
  },
  data() {
    return {
      visible: false,
      placement: "left",
      fold: true
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.navDrawer-contaienr {
  height: 100%;
  position: relative;
  left: 0;
}
.drawer-handle {
  position: relative;
  top: 72px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 10000;
  right: -40px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 0 4px 4px 0;
}
</style>
