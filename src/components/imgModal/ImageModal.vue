<template>
  <div class="modal-container">
    <a-card :bordered="false">
      <a-row>
        <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <img class="imageSource" :src="imageItem.resourceUrl" alt="imageItem.resourceTitle">
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="txt-container">
            <h2>{{imageItem.resourceTitle}}</h2>
            <div class="disciption">
              <span>{{imageItem.resourceContent}}</span>
            </div>
            <AddLike
              v-if="userStage > stageCode.approve && userStage < stageCode.rate"
              :id="imageItem.id"
              v-on:likeSuccess="handleLikeSuccess"
            ></AddLike>
            <Approve v-if="userStage === stageCode.approve" :id="imageItem.id"></Approve>
            <Rate
              v-if="userStage === stageCode.rate"
              :id="imageItem.id"
              v-on:rateSuccess="handleRateSuccuess"
            ></Rate>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import { Card, Row, Col } from "ant-design-vue";
import AddLike from "./AddLike";
import Approve from "./Approve";
import Rate from "./Rate";
import { stageCode } from "../../config/config";
import { mapState } from "vuex";

export default {
  name: "ImageModal",
  components: {
    "a-card": Card,
    "a-row": Row,
    "a-col": Col,
    Approve,
    AddLike,
    Rate
  },
  data() {
    return {
      stageCode: stageCode
    };
  },
  props: {
    imageItem: Object
  },
  computed: {
    ...mapState(["userStage", "userId"])
  },

  methods: {
    handleLikeSuccess: function() {
      this.imageItem.resourceLike = this.imageItem.resourceLike++;
    },
    handleRateSuccuess: function() {
      this.$emit("operationDone");
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-container {
  .imageSource {
    width: 100%;
  }
  .txt-container {
    padding: 0 5px 0 15px;
    .discription {
      font-size: 16px;
      white-space: normal;
    }
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
