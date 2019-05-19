<template>
  <div class="ImageUserModal">

  </div>
</template>
<script>
export default {
  name: "ImageUserModal",
  props: {
      id: {
          type: Number,
          required: true
      },
      title: {
          type: String,
      },
      description: {
          type: String,
      },
      editable: {
          type: Boolean,
          required: true
      },
      like: {
          type: Number
      }
  }
};
</script>
<style lang="scss" scoped>
</style>
