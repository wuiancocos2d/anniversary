<template>
  <div id="app">
    <a-layout :style="{height: layoutHeight}">
      <a-layout-header id="header">
        <VHeader></VHeader>
      </a-layout-header>
      <a-layout :style="{height: layoutHeight}">
        <a-layout-content :style="{backgroundColor: contentBk,height:layoutHeight}">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import VHeader from "./components/common/Header/Header"
import { Layout } from "ant-design-vue"
export default {
  data() {
    return {
      layoutHeight: "100%",
      contentBk: "#fff"
    };
  },
  components: {
    VHeader,
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content
  },
  methods: {
    valideUser() {

    },

  },
  created: function () {
    this.$axios.interceptors.response.use(function (response) {
    if(response && response.data && response.data.code === 10000) {
      this.store.dispatch('logout')
      this.router.push('/login')
    }else return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  }
};
</script>


<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  min-width: 100%;
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
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0 5px;
}
#header {
  background: #fff;
  position: relative;
  z-index: 10;
  max-width: 100%;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.waterfallContainer {
  height: 100%;
}
</style>
