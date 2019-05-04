<template>
  <div class="navDrawer-contaienr">
    <a-button class="drawer-handel" @click="showDrawer">Open</a-button>
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
import { Button, Drawer } from "ant-design-vue";
import Navigation from "./Nav";
export default {
  name: "navDraw",
  components: {
    "a-button": Button,
    "a-drawer": Drawer,
    Navigation
  },
  data() {
    return {
      visible: false,
      placement: "left"
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
    position: fixed;
}
.drawer-handle {
  position: absolute;
  top: 72px;
  width: 41px;
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

  right: -40px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 0 4px 4px 0;
}
</style>
