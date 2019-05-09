<template>
  <div class="modal-container">
    <a-card :bordered="false">
        <img :src="imgUrl" alt="" slot="cover">
        <a-card-meta :title="title">
            <template slot="description">
                <div class="rate-container" v-if="ableRate">
                  <a-rate count="10" v-model="rate"></a-rate>
                </div>
            </template>
        </a-card-meta>
        <template slot="actions">
            
        </template>
    </a-card>
  </div>
</template>
<script>
import {Card, Rate} from 'ant-design-vue'
export default {
  name: "ImageModal",
  components: {
      "a-card": Card,
      "a-card-meta": Card.Meta,
      "a-rate": Rate
  },
  data(){
    return {
      rate: 0
    }
  },
  props: {
    status: {
      type: String,
      required: true
    },
    imgUrl: {
        type: String,
        required: true,
        validator: function() {
          return true
        }
    },
    title: {
        type: String,
        required: true,
    },
    ableRate: {
      type: Boolean,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
