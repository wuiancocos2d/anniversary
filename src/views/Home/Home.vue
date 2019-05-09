<template>
  <div class="waterfallContainer">
    <div>
      <button @click="showComponent = 'Rules'">Rules</button>
      <button @click="showComponent = 'Likes'">Likes</button>
    </div>
    <div class="componet-contnet">
      <component :is="showComponent"></component>
    </div>
  </div>
</template>
<script>

import Rules from "../../components/rules/Rules";
import Likes from "./Likes";
export default {
  name: "home",
  components: {
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

