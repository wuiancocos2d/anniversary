<template>
  <a-menu theme="light" :mode="mode" class="nav-header right">
    <a-menu-item class="nav-item">
      <router-link to="/">Home</router-link>
    </a-menu-item>
    <a-menu-item class="nav-item">
      <router-link :to="userInfo.userNm? '/plofile':'/login'">
        <span v-if="userInfo.userNm">{{userInfo.userNm}}</span>
        <span v-else>Login</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { Menu } from "ant-design-vue"
import { mapState } from "vuex";
export default {
  name: "Navigation",
    components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
  },
  props: {
      mode: String
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
 .nav-item {
    line-height: 60px;
    height: 100%;
  }
</style>

