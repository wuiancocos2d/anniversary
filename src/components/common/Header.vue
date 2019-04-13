<template>
  <a-row>
    <a-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5" :xxl="4">
      <div class="logo"><img src="../../assets/logo-with20.svg" alt="" class="logoImg"></div>
    </a-col>
    <a-col :xs="0" :sm="0" :md="18" :lg="19" :xl="19" :xxl="24">
    <a-menu theme="light" mode="horizontal" class="nav-header right" >
      <a-menu-item class="nav-item">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item class="nav-item">
        <router-link to="userInfo? '/plofile':'/login'">
          <span v-if="userInfo">
            userInfo.name
          </span>
          <span v-else>
            Login
          </span>
        </router-link>
      </a-menu-item>
    </a-menu>
    </a-col>
  </a-row>
</template>
<script>
// @ is an alias to /src
import { Menu, Row, Col } from "ant-design-vue";
 import {mapState, mapActions} from 'vuex'
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
  },
  mounted(){
    this.getUserInfo();
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions([
      getUserInfo
    ]),
  }
};
</script>
<style lang="scss" scoped>
.nav-header {
  height: 60px;
  border: none;
  padding-right: 40px;
  & .nav-item {
    line-height: 60px;
    height: 100%;
  }
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

