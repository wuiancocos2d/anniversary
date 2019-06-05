<template>
  <div class="timeTravel">
    <a-timeline mode="alternate">
      <a-timeline-item>
        <div class="desctiption">
          <h3>From 6/15 to 7/15</h3>
          <h4>Upload Your Photoes</h4>
          <span>上传</span>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <div class="desctiption">
          <h3>From 7/16 to 7/20</h3>
          <h4>Screening</h4>
          <span>初审</span>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <div class="desctiption">
          <h3>From 07/21 to 07/31</h3>
          <h4>Vote</h4>
          <span>投票</span>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <div class="description">
          <h3>From 08/05 to 08/09</h3>
          <h4>Judges score</h4>
          <span>评委打分</span>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <h3>Announce WINNER</h3>
        <span>公布结果</span>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
import { Timeline } from "ant-design-vue";
export default {
  name: "TimeTravel",
  components: {
    "a-timeline": Timeline,
    "a-timeline-item": Timeline.Item
  }
};
</script>

<style lang="scss" scoped>
.timeTravel {
    display: block;
    padding: 15px 0;
    background: url('~@/assets/rulesbg.png') repeat;
}
</style>
