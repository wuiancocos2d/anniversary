<template>
  <div class="modal-container">
    <a-card :bordered="false">
      <img :src="imageItem.resourceUrl" alt slot="cover">
      <a-card-meta :title="imageItem.resourceTitle">
        <template slot="description">
          <div class="disciption">
            <span>{{imageItem.resourceContent}}</span>
          </div>
          <AddLike v-if="userStage > stageCode.approve" :imgeItem="imageItem"></AddLike>
          <Approve v-if="userStage === stageCode.approve" :id="imageItem.id"></Approve>
          <Rate v-if="userStage === stageCode.rate"></Rate>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
import { Card } from "ant-design-vue"
import AddLike from "./AddLike"
import Approve from "./Approve"
import Rate from "./Rate"
import {stageCode} from '../../config/config'
import {mapState} from 'vuex'
export default {
  name: "ImageModal",
  components: {
    "a-card": Card,
    "a-card-meta": Card.Meta,
    Approve,
    AddLike,
    Rate
  },
  data() {
    return {
      stageCode: stageCode
    }
  },
  props: {
    imageItem: Object
  },
  computed: {
    ...mapState(['userStage'])
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
