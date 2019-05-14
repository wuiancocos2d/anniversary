<template>
  <div class="modal-container">
    <a-card :bordered="false">
      <img :src="imgUrl" alt slot="cover">
      <a-card-meta :title="title">
        <template slot="description">
          <div class="disciption" v-if="showDiscription">
              <p>{{discription}}</p>
          </div>
          <div class="rate-container" v-if="status === 3">
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
          <div class="imageControl" v-if="status===1">
            <div class="control-container" >
              <a-button class="control-btn" type="primary" block>Pass</a-button>
              <a-button class="control-btn" type="danger" block>Delet</a-button>
            </div>
          </div>
          <div class="like-container" v-if="status===2">
            <a-icon class="like-icon" type="heart" @click="handleLikeClick"/><span class="like-num" >{{like}}</span>
          </div>
        </template>
      </a-card-meta>
      <template slot="actions"></template>
    </a-card>
  </div>
</template>
<script>
import { Card, Rate, Button, Icon } from "ant-design-vue";
export default {
  name: "ImageModal",
  components: {
    "a-card": Card,
    "a-card-meta": Card.Meta,
    "a-rate": Rate,
    "a-button": Button,
    "a-icon": Icon
  },
  data() {
    return {
      //state
      //打分
      ratePic: 0,
      rateStr: 0,
      rateB: 0,
      rating: false,

      //like
      likeHover: false,
      };
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    status: {
      type: Number,
      required: true,
      default: 0
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
      default: 'this a disciption',
      required: false
    },
    showDiscription: {
      type: Boolean,
      required: false,
      default: true
    },
    like: {
      type: Number,
      default: 0,
    },
    hasLike: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleLikeClick() {
        if(!this.hasLike) {
          this.$emit("listenLikeEvent",this.id)
        }else {
          this.$message.warning("You aready like")
        }
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-container {
  .discription{
    font-size: 16px;
  }
  .control-btn {
    margin-top: 15px;
  }
  .like-container {
    text-align: center;
    .like-icon {
      padding: 0 5px;
      font-size: 26px;
      cursor: pointer
    }
    .like-num {
      font-size: 16px;
    }
  }
}
</style>
