<template>
  <div class="content" v-html="articleContent">
  </div>
</template>
<script>
import {getArticle} from "../service/getData.js"
export default {
  name: "hero",
  data(){
      return {
        articleContent: ''
      }
  },
  methods: {
      async getData() {
          this.articleContent = await getArticle()
      }
  },
  created() {
      this.getData()
  }
};
</script>
<style lang="scss" scoped>
.content {
    width: 100%;
    min-width: 450px;
    max-width: 1200px;
}
</style>