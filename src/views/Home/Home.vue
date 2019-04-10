<template>
  <div>
    <Hero></Hero>
    <TimeTravel></TimeTravel>
    <div class="waterfallContainer">
      <stack
        :column-min-width="200"
        :gutter-width="32"
        :gutter-height="32"
        :monitor-images-loaded="true"
      >
        <stack-item v-for="(item, i) in imgsArr" :key="i" v-bind:style="stactItemStyle">
          <img v-bind:src="item.src" alt :style="{width:'100%'}">
        </stack-item>
      </stack>
    </div>
  </div>
</template>
<script>
import TimeTravel from "../../components/timeTravel/TimeTravel";
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";
// import vueWaterfallEasy from "vue-waterfall-easy";
import "../../mock";
import Hero from "./Hero";

export default {
  name: "home",
  components: {
    TimeTravel,
    Stack,
    StackItem,
    Hero
  },
  data() {
    return {
      imgsArr: [],
      group: 0,
      stactItemStyle: {
        transition: "left 300ms, top 300ms"
      },
      scrolledToBottom: false
    };
  },
  methods: {
    getData() {
      axios.get("/mock/").then(res => {
        this.imgsArr = this.imgsArr.concat(res.data.images);
        this.group++;
      });
    },
    scroll () {
      window.onscroll = () => {
        console.log(window.pageYOffset,document.documentElement.scrollTop, document.body.scrollTop,window.innerHeight,document.documentElement.offsetHeight);
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          console.log('getData');
         this.scrolledToBottom = true // replace it with your code
         this.getData()
        }
      }
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.scroll();
  }
};
</script>
<style lang="scss" scoped>
.homeContainer {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.waterfallContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

