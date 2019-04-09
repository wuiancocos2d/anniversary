<template>
  <div class="homeContainer">
    <TimeTravel></TimeTravel>
    <div class="waterfallContainer">
      <vue-waterfall-easy
        ref="waterfall"
        :imgsArr="imgsArr"
        @scrollReachBottom="getData"
      >
        <div class="img-info" slot-scope="props">
          <p class="some-info">第{{props.index+1}}张图片</p>
          <p class="some-info">{{props.value.info}}</p>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>
<script>
import TimeTravel from '../components/timeTravel/TimeTravel';
import axios from "axios";
import vueWaterfallEasy from "vue-waterfall-easy";
import Mock from "../mock";

export default {
  name: "home",
  components: {
    TimeTravel,
    vueWaterfallEasy,
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
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.homeContainer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.waterfallContainer {
  position: relative;
  width: 100%;
  bottom: 0;
  height: 100%;
}
</style>

