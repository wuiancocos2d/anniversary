<template>
  <div class="content">
    <div class="article">
      <h1 class="article_title">{{title}}</h1>
      <div id="article_container" v-html="articleContent"></div>
    </div>
  </div>
</template>
<script>
import { getArticle } from "../service/getData.js";
export default {
  name: "hero",
  data() {
    return {
      title: '',
      articleContent: ""
    };
  },
  methods: {
    async getData() {
      let articleData = await getArticle()
      this.title = articleData['title']
      this.articleContent = articleData['article']
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  min-width: 400px;
  height: 100%;
  overflow-y: auto;
  padding-top: 60px;
}
.article {
  max-width: 660px;
  margin: 0 auto;
}
#article_container {
  margin: 30px auto;
  p {
    text-align: left;
  }
}
</style>