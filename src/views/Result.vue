<template>
  <div class="result-container">
    <div class="goldMedal-contain medal">
      <div class="imgContainer">
        <img :src="imgsSource[0]['image']" alt />
      </div>
      <div class="winner-container">
        <a-row>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="winnerImg">
              <img class="rewardImage" :src="gold.resourceUrl" alt />
            </div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="gold-text-container">
              <div class="title gold">{{gold.resourceTitle}}</div>
              <div class="content gold">{{gold.resourceContent}}</div>
              <div class="upper-info"></div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="silver-contain medal">
      <div class="imgContainer">
        <img :src="imgsSource[1]['image']" alt />
        <div class="winner-container">
          <a-row class="winner-row">
              <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="winner" v-for="(winner,index) in silver" :key="index">
                      <div class="winnerImg silverImg">
                        <img  :src="winner.resourceUrl" alt="">
                      </div>
              </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRewardList } from "../service/getData.js";
import { Row, Col } from "ant-design-vue";
export default {
  name: "Result",
  components: {
    "a-row": Row,
    "a-col": Col
  },
  data() {
    return {
      imgsSource: [
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
          details: ["Three winners", "Canon Selphy CP1300 wifi photo printer"],
          rewardImage: require("@/assets/intro-canon-selphy-cp1300.jpg")
        },
        {
          key: 3,
          title: "Excellent",
          image: require("@/assets/excellentb.png"),
          details: ["Four winners", "Oral-B electric toothbrush Pro 600"],
          rewardImage: require("@/assets/Oral_B Pro 600.jpg")
        }
      ],
      gold: {
        id: 0,
        resourceUrl: "",
        resourceTitle: "",
        resourceContent: "",
        resourceStatus: "",
        uploadTime: "",
        scoreTheme: 0,
        scoreSkill: 0,
        scoreMind: 0,
        scoreTotal: "",
        scoreTime: "",
        total: 0
      },
      silver: [],
      bronze: [],
      excellent: []
    };
  },
  mounted() {
    this.setList();
  },
  methods: {
    setList() {
      getRewardList().then(
        res => {
          if (res && res.code === 200) {
            const rewards = res.data;
            this.gold = rewards[0];
            this.silver = rewards.slice(1, 3);
            this.bronze = rewards.slice(3, 5);
            this.excellent = rewards.slice(5);
          }
        },
        err => {
          console.log("reward err", err.message);
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.result-container {
  height: 100%;
  overflow: auto;
  padding-bottom: 40px;
  .medal {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 85px;
    @media screen and(max-width: 560) {
      margin-top: 30px;
    }
  }
  .imgContainer {
    text-align: center;
    img {
      width: 120px;
    }
  }
  .winner-container {
    display: flex;
    margin-top: 20px;
    background-color: #fafafa;
    .winner-row {
      width: 100%;
      text-align: center;
    }
    .winnerImg {
      flex: 1;
      .rewardImage {
        width: 100%;
      }
    }
    .winner-row {
      display: flex;

    }
    .winner {
      flex: 1;
      margin-top: 25px;
      .winnerImg.silverImg {
        width: 50%;
        margin: 0 auto;
      }
      .winnerImg img {
        width: 100%;
      }
    }
  }
  .gold-text-container {
    flex: 1;
    position: relative;
    .title {
      padding: 0 40px;
      text-align: left;
      margin-top: 15px;
      font-size: 38px;
    }
    .content {
      position: relative;
      margin-top: 40px;
      padding: 0 40px;
      font-size: 24px;
      text-align: left;
      &::before {
        content: "";
        position: relative;
        display: inline-block;
        width: 60px;
        height: 0;
        top: -5px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
