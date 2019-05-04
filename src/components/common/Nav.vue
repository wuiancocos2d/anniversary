<template>
  <a-menu theme="light" :mode="mode" class="nav-header right">
    <a-menu-item class="nav-item">
      <router-link to="/">Home</router-link>
    </a-menu-item>
    <a-menu-item class="nav-item">
      <router-link :to="userInfo.userName? '/plofile':'/login'">
        <span v-if="userInfo.userName">{{userInfo.userName}}</span>
        <span v-else>Login</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { Menu } from "ant-design-vue"
import { mapState, mapActions } from "vuex";
export default {
  name: "Navigation",
    components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
  },
  props: {
      mode: String
  },
  mounted() {
    this.getUser();
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    getUser() {
      this.getUserInfo().then(
        success => {
          console.log("success", success);
        },
        error => {
          console.log("error", error);
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
 .nav-item {
    line-height: 60px;
    height: 100%;
  }
</style>

