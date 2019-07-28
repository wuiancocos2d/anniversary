<template>
  <div class="uploadItems">
    <a-card title="The photos have been uploaded">
      <a-row :gutter="16">
        <a-col
          v-for="photoItem in userUploads"
          v-bind:key="photoItem.id"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
        >
          <a-card
            class="uploadItem"
            :hoverable="true"
            @click="handleImgClick(photoItem)"
          >
            <img
              class="uploadImg"
              :alt="photoItem.resourceTitle"
              :src="photoItem.resourceUrl"
              slot="cover"
            >
            <a-card-meta>
            <div class="status" slot="description">
                      <a-badge v-if="photoItem.resourceStatus === '0' && userStage < $stageCode.approve" status="processing" text="Waiting for Approve"></a-badge>
                      <a-badge v-else-if="photoItem.resourceStatus === '0' && userStage > $stageCode.approve" status="Default" text="Denny"></a-badge>
                      <a-badge v-else-if="photoItem.resourceStatus === '1' " status="success" text="Approved"></a-badge>
            </div>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import { Row, Col, Card, Badge } from "ant-design-vue";
import { mapState } from "vuex";

export default {
  name: "UploadItems",
  components: {
    "a-card": Card,
    "a-row": Row,
    "a-col": Col,
    "a-badge": Badge,
    "a-card-meta": Card.Meta
  },
  computed: {
    ...mapState(["userStage","userUploads"])
  },
  methods: {
    handleImgClick(imgModal) {
      
      this.$emit("listenUpdateImage", imgModal);
    }
  }
};
</script>
<style lang="scss" scoped>
.uploadItems {
  margin-top: 30px;
  background-color: #fff;
  .uploadItem {
    animation-duration: 0.15s;
    outline: none;
    border: none;
    &:hover {
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35),
        0 15px 15px rgba(0, 0, 0, 0.32);
    }
  }
  .uploadImg {
    border-radius: 8px;
    border: none;
  }
}
</style>


