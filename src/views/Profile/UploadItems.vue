<template>
  <div class="uploadItems">
    <a-card title="The photos you uploaded">
      <a-row :gutter="16">
        <a-col
          v-for="photoItem in userInfo.resource"
          v-bind:key="photoItem.id"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          :xl="8"
        >
          <a-card
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
    ...mapState(["userInfo"])
  },
  methods: {
    handleImgClick(id, title, url,resourceContent) {
      const imgData = {
        id: id,
        resourceTitle: title,
        resourceUrl: url,
        resourceContent: resourceContent
      }
      this.$emit('listenUpdateImage',imgData)
    }
  }
};
</script>
<style lang="scss" scoped>
.uploadItems {
  margin-top: 30px;
  .uploadImg {
    border-radius: 8px;
    border: none;
  }
}
</style>


