<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div slot="waterfall-head">
        <Hero></Hero>
        <TimeTravel></TimeTravel>
      </div>
      <div class="img-info" slot-scope="props">
        <a-icon type="heart" theme="filled" style="heartStyle"/><span class="rate">{{props.value.like}}</span>
        <p class="upName">{{props.value.upUser}}</p>
      </div>
    </vue-waterfall-easy>
  </div>
</template>
<script>
import TimeTravel from "../../components/timeTravel/TimeTravel"
import vueWaterfallEasy from "vue-waterfall-easy"
import { getImages } from "../../service/getData.js"
import Hero from "./Hero"
import {Icon} from 'ant-design-vue'
export default {
  name: "home",
  components: {
    TimeTravel,
    vueWaterfallEasy,
    Hero,
    "a-icon": Icon
  },
  data() {
    return {
      imgsArr: [],
      group: 0,
      heartStyle: {
        color: '#8c7e7e',
        backgroundColor: '#8c7e7e'
      }
    };
  },
  methods: {
    async getData() {
      const newImages = await getImages();
      this.imgsArr = this.imgsArr.concat(newImages);
      this.group++
    }
  },
  created() {
    this.getData();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.waterfallContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #8c7e7e;
  .rate {
    color: #8c7e7e;
  }
  .upName {
    border-top: 1px solid #F2F2F2;
    color: #8c7e7e;
    text-align: left;
    padding: 5px 10px;
  }
}
.anticon {
  font-size: 13px;
  line-height: 13px;
  padding: 10px 5px;
  color: #8c7e7e;
}

</style>

