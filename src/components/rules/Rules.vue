<template>
  <div class="rules-container">
    <Hero></Hero>
    <TimeTravel></TimeTravel>
  </div>
</template>
<script>
import TimeTravel from './TimeTravel'
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
    Hero
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
