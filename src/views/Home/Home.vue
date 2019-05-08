<template>
  <div class="waterfallContainer">
    <Hero></Hero>
    <div>
      <button @click="showComponent = 'Rules'">Rules</button>
      <button @click="showComponent = 'Likes'">Likes</button>
    </div>
    <div class="content">
      <component :is="showComponent"></component>
    </div>
  </div>
</template>
<script>
import Hero from "./Hero";
import Rules from "../../components/rules/Rules";
import Likes from "./Likes";
export default {
  name: "home",
  components: {
    Hero,
    Rules,
    Likes
  },
  data() {
    return {
      showOpts: ["Rules", "Likes"],
      showComponent: "Rules"
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.waterfallContainer {
  display: block;

}
.content {
  display: block;
  height: 100%;
  position: relative;
}
</style>

