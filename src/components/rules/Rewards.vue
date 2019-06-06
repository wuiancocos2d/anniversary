<template>
  <div class="rewards">
    <div class="container">
      <a-row>
        <a-col
          v-for="item in rewards"
          v-bind:key="item.key"
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :xl="12"
          :span="6"
        >
          <div class="reward-hero">
            <img :src="item.image" :alt="item.title">
          </div>
          <ul class="details">
            <li class="detail-item" v-for="(detail,key) in item.details" :key="key">
              <a-row>
                <a-col :span="2">
                  <div class="title-image">
                    <img src="../../assets/flag.png" alt="'flag'">
                  </div>
                </a-col>
                <a-col :span="22">
                  <div class="title">{{detail}}</div>
                </a-col>
              </a-row>
            </li>
          </ul>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { Row, Col } from "ant-design-vue";
export default {
  name: "Rewards",
  components: {
    "a-row": Row,
    "a-col": Col
  },
  data() {
    return {
      rewards: [
        {
          key: 0,
          title: "Gold",
          image: require("@/assets/GOLD.png"),
          details: ["One winner", "Dyson supersonic - Hair dryer (MOP$3086)"]
        },
        {
          key: 1,
          title: "Silver",
          image: require("@/assets/SILVER.png"),
          details: ["Twon winners", "EXILIM wifi camera (MOP$1499)"]
        },
        {
          key: 2,
          title: "Bronz",
          image: require("@/assets/bronez.png"),
          details: [
            "Three winners",
            "Canon Selphy CP1300 wifi photo printer (MOP$1199)"
          ]
        },
        {
          key: 3,
          title: "Excellent",
          image: require("@/assets/excellent.png"),
          details: [
            "Four winners",
            "Oral-B electric toothbrush Pro 600 (MOP$248)"
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.rewards {
  display: block;
  background: #fff;
  .container {
    padding-top: 67px;
    background-color: #fff;
    max-width: 1200px;
    margin: 0 auto;
    .reward-hero {
      display: block;
      img {
        width: 250px;
        display: block;
        margin: 0 auto;
      }
    }
    .details {
      width: 100%;
      overflow: hidden;
      margin: 0;
      padding: 0px 50px;
      height: 250px;
      .detail-item {
        display: block;
        text-align: left;
        margin-top: 30px;
        .title-image {
          display: block;
          width: 25px;
          height: 25px;
          margin: 0 auto;
          img {
            display: block;
            width: 100%;
            position: relative;
            top: 3px;
          }
        }
        .title {
          line-height: 28px;
          font-size: 16px;
          color: #34495e;
          font-weight: 600;
          display: block;
          
        }
      }
    }
  }
}
</style>
