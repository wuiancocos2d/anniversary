<template>
  <div class="content">
    <div class="title">
      <h5 class="activity-title">“魅力澳航” 25週年照片徵集評選活動</h5>
      <h3>厚载文化 用心飞翔</h3>
      <h4>To become an airline rooted in Macau, serving Asia Pacific and furnishing first-class services.</h4>
    </div>
    <button class="hero-btn" v-if="displayBtn">
      <router-link class="txt"   to="/Profile">Upload</router-link>
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { stageCode } from "../../config/config";
export default {
  name: "hero",
  computed: {
    ...mapState(["userStage"]),
    displayBtn: function(){
      return this.userStage === stageCode.upload
    } 
  },
};
</script>
<style lang="scss" scoped>
.content .hero-btn {
  width: 220px;
  height: 60px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 600;
  background: rgb(56, 33, 154);
  margin-bottom: 40px;
  border: none;
  cursor: pointer;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  background: linear-gradient(
    90deg,
    rgba(56, 33, 154, 1) 39%,
    rgba(66, 125, 215, 1) 100%
  );
  color: #fff;
  line-height: 60px;
  white-space: nowrap;
  border-radius: 10px;
}
.content .hero-btn:hover {
  color: #38219a;
  background: #fff;
  border: 1px solid #38219a;
}
.content .hero-btn .txt {
  color: #fff;
  display: block;
  width: 100%;
  height: 100%;
  white-space: nowrap;
}
.content .hero-btn:hover .txt {
  color: #38219a;
}
.content {
  background: url("~@/assets/hero.png") repeat-x;
  background-color: #fff;
}
.content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 100;
}
.content .title {
  text-align: center;
  color: #333333;
  padding: 85px 0 50px;
}
.content .title h5 {
  font-size: 18px;
  color: #555;
  font-weight: 600;
}
.content .title h3 {
  font-size: 48px;
}
.content .title h4 {
  font-size: 20px;
}
/*end-index*/
@media only screen and (max-width: 1024px) {
  .content .title {
    padding: 20px 0;
  }
  .content .prod-show {
    padding: 50px 0;
  }
  .content .prod-show .img-txt {
    margin-bottom: 10px;
  }
  .content .Partner .title {
    color: #000;
    padding: 50px 0;
  }
  /*  .content .Partner .title h3{font-size: 16px;}
    .content .Partner .title h4{font-size: 14px;}*/
  .content .Partner .cont-box {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .content .Partner .cont-box h2 {
    color: #989898;
    font-size: 20px;
    padding: 15px 0;
    background: #fff;
  }
}
@media only screen and (max-width: 780px) {
  .content .title h5 {
    font-size: 12px;
    color: #878787;
  }
  .content .title h3 {
    font-size: 24px;
  }
  .content .title h4 {
    font-size: 14px;
  }
  .content .prod-show .img-txt h3 {
    line-height: 40px;
    background: #f9f9f9;
    font-size: 14px;
    color: #666666;
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
  .content .Partner .cont-box h2 {
    font-size: 14px;
  }
  .content .hero-btn {
    width: 120px;
    height: 50px;
  }
}
</style>


