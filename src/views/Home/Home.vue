<template>
  <div class="waterfallContainer">
    <div class="btns">
      <a-button type="primary" v-for="(stageV,i) in stagesBtns" v-bind:key="i" @click="handleS(e,i)">
        {{stageV}}
      </a-button>
    </div>
    <Hero v-if="stage === 0"></Hero>
    <Likes v-else></Likes>
  </div>
</template>
<script>
import Likes from "./Likes";
import Hero from "./Hero";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  components: {
    Likes,
    Hero
  },
  data() {
    stagesBtns: [0,1,2,3,4]
  },
  computed: {
    ...mapGetters(["stage"])
  },
  methods: {
    ...mapActions(["setStage"]),
    handleK: function(e,i) {
      this.setStage(i)
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

