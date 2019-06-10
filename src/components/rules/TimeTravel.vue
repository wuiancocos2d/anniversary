<template>
  <div class="timeTravel">
    <div class="timeImageContainer">
      <img class="timeImage" src="../../assets/timeTravel.png" alt="'Timeline'">
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeTravel"
};
</script>

<style lang="scss" scoped>
.timeTravel {
  display: block;
  padding: 15px 0;
  min-height: 400px;
  background: url("~@/assets/rulesbg.png") repeat;
  .timeImageContainer {
    max-width: 900px;
    margin: 0 auto;
    .timeImage {
      margin: 20px 0;
      display: block;
      width: 100%;
    }
  }
}
@media only screen and (max-width: 500px) {
    .timeTravel {
        min-height: 200px;
    }
}
</style>
