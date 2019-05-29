<template>
  <div class="modal-container">
    <a-card :bordered="false">
      <img :src="imageItem.resourceUrl" alt slot="cover">
      <a-card-meta :title="imageItem.resourceTitle">
        <template slot="description">
          <div class="disciption">
            <span>{{imageItem.resourceContent}}</span>
          </div>
          <Like v-if="stageComponent === 2" :imgeItem="imageItem"></Like>
          <Approve v-if="stageComponent === 1"></Approve>
          <Rate v-if="stageComponent === 3"></Rate>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
import { Card } from "ant-design-vue";
import Like from "./Like";
import Approve from "./Approve";
import Rate from "./Rate";
export default {
  name: "ImageModal",
  components: {
    "a-card": Card,
    "a-card-meta": Card.Meta,
    Approve,
    Like,
    Rate
  },
  props: {
    imageItem: Object
  },
  computed: {
    stageComponent: function() {
      return this.$store.getters.stage;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.modal-container {
  .discription {
    font-size: 16px;
    white-space: normal;
  }
  .control-btn {
    margin-top: 15px;
  }
  .like-container {
    text-align: center;
    .like-icon {
      padding: 0 5px;
      font-size: 26px;
      cursor: pointer;
    }
    .like-num {
      font-size: 16px;
    }
  }
}
</style>
