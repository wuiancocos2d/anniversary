<template>
  <div class="imageControl">
    <div class="control-container">
      <a-button class="control-btn" :loading="passing" type="primary" block @click="handlePassClick">Pass</a-button>
      <a-button class="control-btn" :loading="Offing" type="danger" block @click="handleOffClick">Off</a-button>
    </div>
  </div>
</template>
<script>
import {Button} from  'ant-design-vue'
import {resourceCheck,resourceUnCheck} from '../../service/getData'
export default {
  name: "Approve",
  components: {
      "a-button": Button
  },
  data() {
    return {
      passing: false,
      Offing: false
    }
  },
  props: {
      id: Number
  },
  methods: {
      handlePassClick() {
          if(this.Offing || !this.id ||this.passing) return
          this.$modal.confirm({
              title: 'Do you want to set Image public',
              content: 'If image is made pbulic,it will be visible to everyone',
              onOk() {
                  this.passing = true,
                  resourceCheck(this.id).then(res => {
                      if(res.code === 200) {
                          this.$message.success('public success')
                      }
                      this.passing = false
                      this.$emmit("changedone")
                  },err=> {
                      this.passing = false
                      this.$message.error('failed: connecion' + err)
                  })
              }
          })
      },
      handleOffClick() {
         if(this.Offing || !this.id ||this.passing) return
          this.$modal.confirm({
              title: 'Do you want to set Image Off',
              content: 'If image is made Off,it will not be visible',
              onOk() {
                  this.passing = true,
                  resourceUnCheck(this.id).then(res => {
                      if(res.code === 200) {
                          this.$message.success('deleted success')
                      }else {
                          this.$message.error('deleted failed')
                      }
                      this.passing = false
                      this.$emmit("changedone")
                  },err=> {
                      this.passing = false
                      this.$message.error('failed: something wrong with your connection'+ err)
                  })
              }
          })
      }
  }
};
</script>
<style lang="scss" scoped>
.control-btn {
    margin: 10px 0;
}
</style>

