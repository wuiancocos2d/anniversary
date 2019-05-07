<template>
  <div class="waterfallContainer">
    <Hero></Hero>
    <div class="content">
      <component :is=showComponent></component>
    </div>
  </div>
</template>
<script>
import Hero from "./Hero";
import Rules from '../../components/rules/Rules'
export default {
  name: "home",
  components: {
    Hero,
    Rules
  },
  data() {
    return {
      showComponent: "Rules"
    };
  },
  methods: {

  },
  created() {

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
    border-top: 1px solid #f2f2f2;
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

