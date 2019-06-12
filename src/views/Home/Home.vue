<template>
  <div class="waterfallContainer" v-bind:class="{scroll: this.userStage < stageCode.approve}">
    <div class="btns">
      <a-button
        type="primary"
        v-for="(stageV,i) in stagesBtns"
        v-bind:key="i"
        @click="handleS(i)"
      >{{stageString[stageV -1 ]}}</a-button>
    </div>
    <div v-if="userStage < stageCode.approve" class="rule-container">
      <Rules></Rules>
    </div>
    <Likes v-else></Likes>
    <VFooter></VFooter>
  </div>
</template>
<script>
import Likes from "./Likes"
import Rules from '../../components/rules/Rules'
import { mapActions, mapState } from "vuex"
import { Button } from "ant-design-vue"
import { stageCode } from "../../config/config"
import VFooter from '../../components/common/VFooter'
export default {
  name: "home",
  components: {
    Likes,
    Rules,
    "a-button": Button,
    VFooter
  },
  data() {
    return {
      stagesBtns: [1, 2, 3, 4, 5, 6],
      stageString: [
        "開始上傳",
        "停止上傳",
        "開始審核",
        "開始投票",
        "停止投票",
        "開始打分"
      ],
      stageCode: stageCode
    };
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
  background-color: transparent;
  &.scroll {
    overflow-y: auto;
  }

}
.componet-contnet {
  display: block;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  position: absolute;
}
.btns {
  position: relative;
  top: 10px;
  background-color: #fff;
}
</style>

