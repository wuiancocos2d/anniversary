<template>
  <div class="Sign">
    <div class="sign-hero">
      <div class="heroImage">
        <img src="../../assets/hero.png" alt>
      </div>
      <router-link class="uploadLink" to="/Profile">Go Upload</router-link>
      <div class="description-container">
        <div class="cn">
          <a-divider class="title">活動簡介</a-divider>
          <div class="quotation left">
            <img src="../../assets/left.png" alt class="left-quotation">
          </div>
          <div class="description">{{description.cn}}</div>
        </div>
        <div class="en">
          <div class="title">About the contest</div>
          <div class="description">{{description.en}}</div>
        </div>
        <div class="quotation right">
          <img class="right-quotation" src="../../assets/right.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Divider } from "ant-design-vue";
export default {
  name: "Sign",
  components: {
    "a-divider": Divider
  },
  data() {
    return {
      description: {
        cn:
          "澳門航空有很多美好的時光值得我們去回味。今年適逄澳航25週年，我們特意發起“魅力澳航”照片線上徵集評選活動。藝術哪發生就需要有人為它留下美麗的紀錄，也許是一個藝術品、一個角落、甚至是一個有趣的景象，都值得拿起你的相機，為這美好的一切留下影像。",
        en:
          "The journey of Air Macau will immediately reveal its charm – use your camera directing you towards a hidden charm – guiding you to a gorgeous stretch of the Air Macau 25th Anniversary. Finding your way through the splendid journey of Air Macau is half the fun, the staff exploring like the history of Air Macau is another wonderful thing."
      },
      time: {
        cn: {
          title: "活動日期",
          cnDate: "2019年6月17日 – 2019年8 月22日"
        },
        en: {
          title: "Contest date",
          enDate: "17th June 2019 -22nd August 2019"
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.Sign {
  padding-top: 15px;
  width: 100%;
  background-color: #fff;
  .heroImage {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .description-container {
    padding: 40px 0;
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
    color: #878787;
    background-color: #fff;
    .cn {
      .title {
        font-size: 38px;
        font-weight: 600;
      }
    }
    .en {
      margin-top: 20px;
      .title {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .title {
      color: #5c646a;
      text-align: center;
    }
    .description {
      text-align: left;
      font-size: 16px;
      line-height: 30px;
    }
    .quotation {
      position: relative;
      width: 100%;
      height: 30px;
      background-repeat: no-repeat;
      &.left {
        text-align: left;
      }
      &.right {
        text-align: right;
      }
      & .left-quotation {
        text-align: left;
        height: 25px;
        margin-left: -40px;
      }
      & .right-quotation {
        height: 25px;
        margin-right: -40px;
      }
    }
  }
  .uploadLink {
    display: block;
    width: 220px;
    height: 56px;
    margin: 0 auto;
    background-color: #fb5520;
    color: #fcfcfc;
    position: relative;
    top: -25px;
    line-height: 56px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    animation-duration: 2.2s;
    animation-timing-function: ease-out;
    -webkit-animation-duration: 2.2s; /* Safari 4.0 - 8.0 */

    &:hover {
      top: -26px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  @media only screen and (max-width: 600px) {
    .description-container {
      margin-top: 10px;
      padding: 0 35px;
      .cn {
        .title {
          font-size: 28px;
        }
      }
      .en {
        .title {
          font-size: 20px;
        }
      }
      .quotation {
        position: relative;
        width: 100%;
        height: 20px;
        background-repeat: no-repeat;
        &.left {
          text-align: left;
        }
        &.right {
          text-align: right;
        }
        & .left-quotation {
          text-align: left;
          height: 20px;
          margin-left: -20px;
        }
        & .right-quotation {
          height: 20px;
          margin-right: -20px;
        }
      }
    }
    .uploadLink {
      width: 150px;
      height: 36px;
      top: -18px;
      line-height: 36px;
      font-size: 15px;
      &:hover {
          top: -19px;
      }
    }
  }
}
</style>


