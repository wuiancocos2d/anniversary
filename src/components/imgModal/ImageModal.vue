<template>
  <div class="modal-container">
    <a-card :bordered="false">
      <img :src="imgUrl" alt slot="cover">
      <a-card-meta :title="title">
        <template slot="description">
          <div class="disciption" v-if="showDiscription">
              <p>{{discription}}</p>
          </div>
          <div class="rate-container" v-if="ableRate">
            <div class="rate-area">
            <a-rate :count="10" v-model="ratePic"></a-rate>
            <span class="ant-rate-text">Picture: {{ratePic}} point</span>
            <a-rate :count="10" v-model="rateStr"></a-rate>
            <span class="ant-rate-text">Structure: {{rateStr}} point</span>
            <a-rate :count="10" v-model="rateB"></a-rate>
            <span class="ant-rate-text">Beauty: {{rateB}} point</span>
            </div>
            <a-button type="primary" :loading="rating">Update Rate</a-button>
          </div>
        </template>
      </a-card-meta>
      <template slot="actions"></template>
    </a-card>
  </div>
</template>
<script>
import { Card, Rate, Button } from "ant-design-vue";
export default {
  name: "ImageModal",
  components: {
    "a-card": Card,
    "a-card-meta": Card.Meta,
    "a-rate": Rate,
    "a-button": Button
  },
  data() {
    return {
      //打分
      ratePic: 0,
      rateStr: 0,
      rateB: 0,
      rating: false,
      };
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
        return true;
      }
    },
    title: {
      type: String,
      required: true
    },
    ableRate: {
      type: Boolean,
      required: true
    },
    discription: {
      type: String,
      default: '',
      required: false
    },
    showDiscription: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
