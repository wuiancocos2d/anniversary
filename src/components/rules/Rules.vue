<template>
  <div class="rules-container">
    <Hero></Hero>
    <TimeTravel></TimeTravel>
    <Rewards></Rewards>
    <RequireMent></RequireMent>
  </div>
</template>
<script>
import TimeTravel from './TimeTravel'
import Rewards from './Rewards'
import RequireMent from './RequireMent'
import Hero from '../Hero/Hero'
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
    Hero,
    Rewards,
    RequireMent
  }
};
</script>

<style lang="scss" scoped>
.rules-container {
  .rules {
    max-width: 900px;
    margin:  0 auto;
  }
}
</style>
