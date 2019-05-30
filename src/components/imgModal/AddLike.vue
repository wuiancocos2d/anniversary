<template>
  <div class="add-like-container" v-if="status===2">
    <a-icon class="like-icon" type="heart" @click="handleLikeClick"/>
    <span class="like-num">{{like}}</span>
  </div>
</template>
<script>
import {Icon} from 'ant-design-vue'
export default {
  name: "AddLike",
  components: {
      "a-icon": Icon
  },
  props: {
      id: {
          required: true,
          type: Number
      },
      like: Number
  },
  methods: {
      handleLikeClick() {
          
      }
  }
};
</script>
<style lang="scss" scoped>
</style>