<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div slot="waterfall-head">
        <Hero></Hero>
        <TimeTravel></TimeTravel>
      </div>
    </vue-waterfall-easy>
  </div>
</template>
<script>
import TimeTravel from "../../components/timeTravel/TimeTravel";
import axios from "axios";
import vueWaterfallEasy from "vue-waterfall-easy";
import "../../mock";
import Hero from "./Hero";

export default {
  name: "home",
  components: {
    TimeTravel,
    vueWaterfallEasy,
    Hero
  },
  data() {
    return {
      imgsArr: [],
      group: 0
    };
  },
  methods: {
    getData() {
      axios.get("/mock/").then(res => {
        this.imgsArr = this.imgsArr.concat(res.data.images);
        this.group++;
      });
    },
  },
  created() {
    this.getData();
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
.waterfallContainer {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

