<template>
  <div class="footer">
    <div class="footer-container">
      <h4 class="copyRight">Copyright © 2019 - All Rights Reserved Air Macau Company IT Division</h4>
      <h5 class="copyRightCn">版權所有©澳門航空股份有限公司 IT</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "VFooter"
};
</script>
<style lang="scss" scoped>
.footer {
  padding-top: 10px;
  position: relative;
  background: url("~@/assets/footer.png") repeat-x;
  .footer-container {
    text-align: center;
    padding-bottom: 5px;
    .copyRight {
      line-height: 20px;
      font-weight: 600;
    }
    .copyRightCn {
      font-size: 13px;
      line-height: 18px;
    }
  }
}
</style>


