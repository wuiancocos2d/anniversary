<template>
  <a-menu theme="light" :mode="mode" class="nav-header right">
    <a-menu-item key="home" class="nav-item">
      <router-link to="/">Home</router-link>
    </a-menu-item>
    <a-menu-item key="userStage" class="nav-item">
      <router-link to="/">{{userStage}}</router-link>
    </a-menu-item>
    <a-menu-item v-if="userInfo.user" class="nav-item">
      <router-link to="/Profile">Profile</router-link>
    </a-menu-item>
    <a-menu-item v-if="userInfo.user" class="nav-item">
      <a class="nav-link" @click="userLogout">Logout</a>
    </a-menu-item>
    <a-menu-item class="nav-item" v-else>
      <router-link to="/login">Login</router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { Menu } from "ant-design-vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Navigation",
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item
    // "a-sub-menu": Menu.SubMenu
  },
  data() {
    return {
      current: ["home"]
    };
  },
  props: {
    mode: [String]
  },
  computed: mapState([
    'userInfo',
    'userStage'
  ]),
  methods: {
    ...mapActions(["logout"]),
    userLogout(event) {
      event.preventDefault();
      const that = this
      this.$modal.confirm({
        title: "Are you sure to logout?",
        onOk() {
          that.logout();
        },
        onCancel() {
          return
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-item {
  line-height: 60px;
  height: 100%;
  .nav-link {
    line-height: 60px;
  }
}
</style>

