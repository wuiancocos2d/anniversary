<template>
  <div class="imageControl">
    <div class="control-container">
      <a-button
        class="control-btn"
        :loading="passing"
        type="primary"
        block
        @click="handlePassClick"
      >Pass</a-button>
      <a-button
        class="control-btn"
        :loading="Offing"
        type="danger"
        block
        @click="handleOffClick"
      >Off</a-button>
    </div>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
import { resourceCheck, resourceUnCheck } from "../../service/getData";
export default {
  name: "Approve",
  components: {
    "a-button": Button
  },
  data() {
    return {
      passing: false,
      Offing: false
    };
  },
  props: {
    id: Number
  },
  methods: {
    handlePassClick: function() {
      const that = this;
      this.$modal.confirm({
        title: "Do you want to set Image public",
        content: "If image is made pbulic,it will be visible to everyone",
        onOk() {
          (that.passing = true),
            resourceCheck(that.id).then(
              res => {
                that.passing = false;
                if (res.code === 200) {
                  that.$message.success("public success");
                }
                that.$emit("changedone");
              },
              err => {
                that.passing = false;
                that.$message.error("failed: connecion" + err);
              }
            );
        }
      });
    },
    handleOffClick: function() {
      if (this.Offing || !this.id || this.passing) return;
      const that = this;
      this.$modal.confirm({
        title: "Do you want to set Image Off",
        content: "If image is made Off,it will not be visible",
        onOk() {
          (that.passing = true),
            resourceUnCheck(that.id).then(
              res => {
                if (res.code === 200) {
                  that.$message.success("deleted success");
                } else {
                  that.$message.error("deleted failed");
                }
                that.passing = false;
                that.$emmit("changedone");
              },
              err => {
                that.passing = false;
                that.$message.error(
                  "failed: something wrong with your connection" + err
                );
              }
            );
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.control-btn {
  margin: 10px 0;
}
</style>

