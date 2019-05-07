<template>
  <div class="rules-container">
    <div class="rules">
      <a-timeline mode="alternate">
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;"/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </a-timeline-item>
        <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
        <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;"/>Technical testing 2015-09-01
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<script>
import { Timeline, Icon } from "ant-design-vue";
export default {
  name: "Rules",
  components: {
      "a-timeline" : Timeline,
      "a-timeline-item": Timeline.Item,
      "a-icon": Icon
  }
};
</script>

<style lang="scss" scoped>
</style>
