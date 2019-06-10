<template>
  <div class="userPlofile">
    <div class="user-infor">
      <div class="user-name">
        <a-card title="User Information" class="infoCard">
          <a-row>
            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p>
                User Name:
                <span v-if="userInfo.user" class="userName">{{userInfo.user.userNm}}</span>
              </p>
              <p>
                Department:
                <span v-if="userInfo.user">{{userInfo.user.department}}</span>
              </p>
              <p>
                Division:
                <span v-if="userInfo.user">{{userInfo.user.division}}</span>
              </p>
              <p>
                Email:
                <span v-if="userInfo.user">{{userInfo.user.emailAddrs}}</span>
              </p>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="thumbsGrp">
                <a-row>
                  <a-col span="12">
                    <div class="fun-btn-item heart-item">
                      <a-badge class="icon heart-icon-block" :count="likeTimes" :offset="[-10,20]">
                        <a-icon class="heart" type="heart"/>
                      </a-badge>
                      <div class="description">
                        <h3>Get {{likeTimes}} Like</h3>
                      </div>
                    </div>
                  </a-col>
                  <a-col span="12">
                    <div class="fun-btn-item">
                      <div class="icon add" @click="handleUploadBtn">
                        <a-icon
                          class="addBtnIcon"
                          theme="filled"
                          fill="'#fafafa'"
                          type="plus-circle"
                        />
                        <h2 class="hint">Upload</h2>
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Row, Col, Card, Badge } from "ant-design-vue";
import { mapState } from "vuex";
import { stageCode } from "../../config/config";
export default {
  name: "UserProfile",
  components: {
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col,
    "a-card": Card,
    "a-badge": Badge
  },
  data() {
    return {
      likeTimes: 0
    };
  },
  computed: {
    ...mapState(["userInfo", "userStage", "uesrLikeList"])
  },
  watch: {
    uesrLikeList: function() {
      this.likeTimes = this.uesrLikeList.length;
    }
  },
  methods: {
    handleUploadBtn: function() {
      if (this.userStage !== stageCode.upload) {
        const h = this.$createElement;
        this.$info({
          title: "The uploaded time has passed",
          content: h("div", {}, [
            h("p", "the uploaded time is 6/15 - 7/15"),
            h("p", "可以上传的时间为 6/15 -7/15")
          ]),
          onOk() {}
        });
      } else {
        this.$emit("listenOpenUploadModal");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.userPlofile {
  margin-bottom: 40px;
  background-color: #fff;
  .infoCard {
    min-height: 250px;
    p {
      line-height: 18px;
      font-size: 15px;
    }
    span {
      padding: 0 15px;
      font-weight: 500;
      &.userName {
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
      }
    }
  }
  .fun-btn-item {
    padding: 0 15px;
    .icon {
      &.add {
        display: block;
        cursor: pointer;
        background: rgb(68, 73, 194);
        background: linear-gradient(
          90deg,
          rgba(68, 73, 194, 1) 44%,
          rgba(66, 125, 215, 1) 100%
        );
        text-align: center;
        animation-duration: 0.15s;
        &:hover {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25),
            0 5px 5px rgba(0, 0, 0, 0.22);
        }
        .addBtnIcon {
          cursor: pointer;
          line-height: 95px;
          font-size: 45px;
          color: #fafafa;
          text-align: center;
        }
        .hint {
          color: #fafafa;
        }
      }

      &.heart-icon-block {
        text-align: center;
        .heart {
          display: block;
          line-height: 95px;
          font-size: 45px;
        }
        .description {
          text-align: center;
        }
      }
    }
    &.heart-item {
      text-align: center;
    }
  }
}
</style>
