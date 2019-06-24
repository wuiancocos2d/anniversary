<template>
  <div class="about">
     <div class="rule-container">
      <Rules></Rules>
    </div> -->
    <VFooter></VFooter>
  </div>
</template>
<script>
import Rules from '../components/rules/Rules'
import VFooter from '../components/common/VFooter' 
export default {
  name: 'About',
  components: {
    Rules,
    VFooter
  }
}
</script>
<style lang="scss" scoped>
.about {
  height: 100%;
  overflow-y: auto;
}
</style>


