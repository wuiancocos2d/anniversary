<template>
  <div class="waterfallContainer">
    <vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <p class="some-info">{{props.value.info}}</p>
      </div>
    </vue-waterfall-easy>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
    name: 'waterfall',
    components: {
        vueWaterfallEasy
    },
    props: {
      
    }
};
</script>
