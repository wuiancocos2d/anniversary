<template>
  <div class="content">
    <div class="title">
      <h5>澳门航空25周年相册征集活动</h5>
      <h3>厚载文化 用心飞翔</h3>
      <h4>To become an airline rooted in Macau, serving Asia Pacific and furnishing first-class services.</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "hero"
};
</script>
<style lang="scss" scoped>
.content{background-color: #f9f9f9}
.content {  border-bottom: 1px solid rgba(0,0,0,0.05); z-index: 100}
.content .title{text-align: center; color: #333333; padding:35px 0 50px;}
.content .title h5{font-size: 18px; color: #878787;}
.content .title h3{font-size: 48px;}
.content .title h4{font-size: 20px;}
/*end-index*/
@media only screen and (max-width: 1024px){

    .content .title{padding:20px 0;}
    .content .prod-show{padding:50px 0;}
    .content .prod-show .img-txt{margin-bottom: 10px;}
    .content .Partner .title{color: #000; padding:50px 0;}
  /*  .content .Partner .title h3{font-size: 16px;}
    .content .Partner .title h4{font-size: 14px;}*/
    .content .Partner .cont-box{max-width: 1200px; margin:0 auto; text-align: center;}
    .content .Partner .cont-box h2{color: #989898; font-size:20px; padding:15px 0; background: #fff;}
  
  }
@media only screen and (max-width: 780px){
    .content .title h5{font-size: 12px; color: #878787;}
    .content .title h3{font-size: 24px;}
    .content .title h4{font-size: 14px;}
    .content .prod-show .img-txt h3{line-height: 40px; background: #f9f9f9; font-size: 14px; color: #666666; text-align: center;}
  }

  @media only screen and (max-width: 768px){
    .content .Partner .cont-box h2{font-size:14px;}
 }
</style>


