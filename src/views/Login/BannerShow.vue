<template>
  <div class="banner-show">
    <div class="bg-img">
      <img src="../../../public/imgs/loginCover.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerShow"
};
</script>
<style lang="scss" scoped>
.banner-show {
  display: block;
  height: 100%;
  width: 100%;
  position: relative;

  .bg-img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    height: 100%;
    background-color: #322B65;
    text-align: right;
    img {
      position: relative;
      width: 480px;
      height: 100%;
      display: inline-block;
    }
  }
}

@media  only screen and (max-width: 600px) {
    .banner-show {
        height: 300px;
    }
}
</style>

