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
                <a-col :span="8">
                  <div class="title-image">
                    <img src="../../assets/flag.png" alt="'flag'">
                  </div>
                </a-col>
                <a-col :span="16">
                  <div class="title" v-if="key===0">{{detail}}</div>
                  <div class="title" v-else><div class="rewardLink" @click="openModal(item)">{{detail}}</div></div>
                </a-col> 
              </a-row>
            </li>
          </ul>
        </a-col>
      </a-row>
    </div>
    <a-modal :footer="null" v-model="visible" :width="360">
      <a-card title="" :bordered="false" >
        <img class="priceImage" :src="rewardImgSrc" alt="reward" :style="{width:'100%'}">
        <a-card-meta :title="rewardDescription">
          <template  slot="description"><p class="rewardDescription">{{rewardDescription}}</p></template>
        </a-card-meta>
      </a-card>
    </a-modal>
  </div>
</template>
<script>
import { Row, Col, Modal, Card } from "ant-design-vue";
export default {
  name: "Rewards",
  components: {
    "a-row": Row,
    "a-col": Col,
    "a-modal": Modal,
    "a-card": Card,
    "a-card-meta": Card.Meta
  },
  data() {
    return {
      rewards: [
        {
          key: 0,
          title: "Gold",
          image: require("@/assets/GOLDb.png"),
          details: ["One winner", "Dyson supersonic - Hair dryer"],
          rewardImage: require("@/assets/dyson-supersonic-hair-dryer.jpg")
        },
        {
          key: 1,
          title: "Silver",
          image: require("@/assets/SILVERb.png"),
          details: ["Two winners", "EXILIM wifi camera"],
          rewardImage: require("@/assets/camera.jpg")
        },
        {
          key: 2,
          title: "Bronz",
          image: require("@/assets/bronezb.png"),
          details: [
            "Three winners",
            "Canon Selphy CP1300 wifi photo printer"
          ],
          rewardImage: require("@/assets/intro-canon-selphy-cp1300.jpg")
        },
        {
          key: 3,
          title: "Excellent",
          image: require("@/assets/excellentb.png"),
          details: [
            "Four winners",
            "Oral-B electric toothbrush Pro 600"
          ],
          rewardImage: require("@/assets/Oral_B Pro 600.jpg")
        }
      ],
      rewardImgSrc: "",
      visible: false,
      rewardTitle: "",
      rewardDescription: ""
    };
  },
  methods: {
    openModal: function(item){
        this.rewardImgSrc = item.rewardImage
        this.rewardTitle = item.title
        this.rewardDescription = item.details[1]
        this.visible = true
    }
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
        width: 120px;
        display: block;
        margin: 0 auto;
      }
    }
    .details {
      width: 100%;
      overflow: hidden;
      margin: 0;
      padding: 0px 50px;
      height: 180px;
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
          .rewardLink {
              cursor: pointer;
          }
        }

      }
    }
  }
  .priceImage {
      width: 100%;
  }
  .rewardDescription {
      font-size: 15px;

  }
}
</style>
