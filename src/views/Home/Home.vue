<template>
  <div class="waterfallContainer">
    <div class="btns">
      <a-button
        type="primary"
        v-for="(stageV,i) in stagesBtns"
        v-bind:key="i"
        @click="handleS(i)"
      >{{stageV}}</a-button>
      {{userStage}}
    </div>
    <Hero v-if="userStage < stageCode.approve"></Hero>
    <Likes v-else></Likes>
  </div>
</template>
<script>
import Likes from "./Likes"
import Hero from "./Hero"
import { mapActions, mapState } from "vuex"
import { Button } from "ant-design-vue"
import {stageCode} from '../../config/config'
export default {
  name: "home",
  components: {
    Likes,
    Hero,
    "a-button": Button
  },
  data() {
    return {
      stagesBtns: [1, 2, 3, 4, 5, 6, 7],
      stageCode: stageCode
    }
  },
  computed: {
    ...mapState(["userStage"])
  },
  methods: {
    ...mapActions(["setUserStage"]),
    handleS: function(i) {
      this.setUserStage(i + 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.waterfallContainer {
  display: block;
  height: 100%;
  width: 100%;
}
.componet-contnet {
  display: block;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  position: absolute;
}
</style>

