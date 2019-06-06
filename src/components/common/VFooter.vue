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
    height: 98px;
    background: url("~@/assets/footer.png") repeat-x;
    .footer-container {
      .copyRight{
        line-height: 58px;
        font-weight: 600;
      }
      .copyRightCn {
        line-height: 40px;
      }
    }
}
</style>


