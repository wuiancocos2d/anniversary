<template>
  <div class="rules-container">
    <Sign></Sign>
    <TimeTravel></TimeTravel>
    <Rewards></Rewards>
    <RequireMent></RequireMent>
  </div>
</template>
<script>
import TimeTravel from './TimeTravel'
import Rewards from './Rewards'
import RequireMent from './RequireMent'
import Sign from '../Sign/Sign'
import { mapState } from "vuex"
export default {
  name: "Rules",
  data() {
    return { ruleState: 0 };
  },
  computed: {
    ...mapState(["userStage"])
  },
  components: {
    TimeTravel,
    Rewards,
    RequireMent,
    Sign
  }
};
</script>

<style lang="scss" scoped>
.rules-container {
  overflow-y: auto;
  .rules {
    max-width: 900px;
    margin:  0 auto;
  }
}
</style>
