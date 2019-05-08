<template>
  <div class="modal-container">
    <a-card>
        <img src="props.imgUrl" alt="" slot="cover">
        <a-card-meta title="props.title">
            <template slot="description">
                
            </template>
        </a-card-meta>
        <template slot="actions">
            
        </template>
    </a-card>
  </div>
</template>
<script>
import {Card } from 'ant-design-vue'
export default {
  name: "ImageModal",
  components: {
      "a-card": Card,
      "a-card-meta": Card.Meta
  },
  props: {
    status: {
      type: String,
      required: true
    },
    imgUrl: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true,
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
