<template>
  <div id="app">
    <a-layout :style="{height: layoutHeight}">
      <a-layout-header id="header">
        <VHeader></VHeader>
      </a-layout-header>
      <a-layout-content :style="{height: layoutHeight}">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </a-layout-content>
      <!-- <a-layout-footer :style="footerStyle">
        <VFooter></VFooter>
      </a-layout-footer> -->
    </a-layout>
  </div>
</template>

<script>
import VHeader from "./components/common/Header/Header";
// import VFooter from "./components/common/VFooter";
import { Layout } from "ant-design-vue";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      layoutHeight: "100%",
      footerStyle: {
        "padding": 0,
      }
    };
  },
  components: {
    VHeader,
    // VFooter,
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content,
    // "a-layout-footer": Layout.Footer
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    getUser: function() {
      this.getUserInfo();
    },
  },
  created: function() {
    axios.interceptors.response.use(
      response => {
        if (response && response.data && response.data.code === 10000) {
          this.$store.dispatch("logout");
        } else {
          return response;
        }
      },
      function(error) {
        // Do something with response error
        return Promise.reject(error);
      }
    );
  },
  mounted() {
    this.getUser();
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
  padding: 0;
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
