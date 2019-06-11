<template>
  <div class="requireMent">
    <div class="requirement-container">
      <a-card :bordered="false">
        <div class="title" slot="title">
          <h3 class="title-txt">Requirement</h3>
          <h4>參賽要求</h4>
        </div>
        <div class="requireds">
          <ul class="list">
            <li class="item" v-for="item in requires" :key="item.key">
              <p class="en">{{item.en}}</p>
              <p class="cn">{{item.cn}}</p>
            </li>
          </ul>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script>
import { Card } from "ant-design-vue";
export default {
  name: "RequireMent",
  components: {
    "a-card": Card
  },
  data() {
    return {
      requires: [
        {
          key: 1,
          en:
            "All loyal employees are welcome to participate in the “Air Macau’s Charisma” Photo Contest – Online Voting and Elections.",
          cn: "凡熱愛澳航的員工皆可參加"
        },
        {
          key: 2,
          en:
            "Not eligible to register as a single department or any other organization.",
          cn:
            "僅接受熱愛澳航的員工以個人名義參賽，不得以部門或機關團體名義參加。"
        },
        {
          key: 3,
          en: "Theme content: Air Macau",
          cn: "攝影範圍：澳航 (照片須包含澳航元素)"
        },
        {
          key: 4,
          en:
            "A simple guide to the type of cameras use: Not limited to mobile phone camera, traditional" +
            " camera and digital monocular camera, either in black-and-white or color output photography " +
            " works is acceptable",
          cn:
            "相機要求: 不分手機、傳統相機、彩色或黑白,數位單眼相機的拍攝作品皆具有參賽資格"
        },
        {
          key: 5,
          en:
            "Maximum two photography works for a single entry – duplicated, laminated, color edited," +
            "photomontage (computer synthesis) related photography works are not acceptable.",
          cn: "張數2張為限，連作不收，不得疊片、加色、電腦合成"
        },
        {
          key: 6,
          en:
            "The photography submissions require to be completed in one shot, without the post production," +
            "and the theme of the same attraction is limited to one photography work entry." +
            "(The original photography work file must require high-quality pixel output. For the JPEG file" +
            "submission, the photography work is limited to 5 Megabyte “MB” with high-quality display " +
            "resolution.)",
          cn:
            "以一次拍攝完成之作品，不得後期製作，且同一個景" +
            "點主題以1張為限。(原始檔案要求高質量畫素、高質量解析度規格之JPEG檔, 相片不能超過5MB。)"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.requireMent {
  max-width: 894px;
  width: 100%;
  margin: 40px auto 30px;
  
  .title {
    .title-txt {
      font-size: 48px;
      color: #202124;
      line-height: 60px;
    }
  }
  .requireds {
    .list {
      margin: 0;
      text-align: left;
      counter-reset: my-awesome-counter;

      .item {
        counter-increment: my-awesome-counter;
        list-style-type: none;
        &:before {
          content: counter(my-awesome-counter) ".  ";
          color: #202124;
          font-weight: bold;
          font-size: 18px;
        }
        .en {
          font-size: 16px;
          color: #3C4043;
        }
        .cn {
          font-size: 13px;
          color: #34495E;
        }
        
      }
    }
  }
}
</style>
