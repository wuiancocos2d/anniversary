<template>
  <div class="uploadItems">
    <a-card title="The photos you uploaded">
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
            @click="handleImgClick(photoItem.id,photoItem.resourceTitle,photoItem.resourceUrl,photoItem.resourceContent)"
          >
            <img
              class="uploadImg"
              :alt="photoItem.resourceTitle"
              :src="photoItem.resourceUrl"
              slot="cover"
            >
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import { Row, Col, Card } from "ant-design-vue";
import { mapState } from "vuex";

export default {
  name: "UploadItems",
  components: {
    "a-card": Card,
    "a-row": Row,
    "a-col": Col
  },
  computed: {
    ...mapState(["userUploads"])
  },
  methods: {
    handleImgClick(id, title, url, resourceContent) {
      const imgData = {
        id: id,
        resourceTitle: title,
        resourceUrl: url,
        resourceContent: resourceContent
      };
      this.$emit("listenUpdateImage", imgData);
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
      box-shadow: 0 8px 14px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  .uploadImg {
    border-radius: 8px;
    border: none;
  }
}
</style>


