<template>
  <div id="app">
    <a-layout :style="{height: layoutHeight}">
      <a-layout-header id="header">
        <VHeader></VHeader>
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import VHeader from "./components/common/Header";
import { Layout } from "ant-design-vue";
export default {
  data() {
    return {
      layoutHeight: "100%"
    };
  },
  components: {
    VHeader,
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content
  }
};
</script>


<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
html,
body,
#app {
  height: 100%;
}
body {
  min-width: 100%;
  min-height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 375px;
  position: relative;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
}
#header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
}
</style>
