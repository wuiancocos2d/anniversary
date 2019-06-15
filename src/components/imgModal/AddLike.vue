<template>
  <div class="add-like-container">
    <div class="content" v-if="loadInfoSuccess">
      <div class="content">
        <a-icon
          v-if="liked"
          type="heart"
          class="like-icon"
          theme="twoTone"
          twoToneColor="#eb2f96"
          @click="handleLikedClick"
        />
        <a-icon v-else class="like-icon" type="heart" @click="handleLikeClick" :spin="iconSpin"/>
        <span class="like-num">{{likeTimes}}</span>
      </div>
    </div>
    <div v-else class="errorMessage">
      <span>{{loadMessage}}</span>
    </div>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
import { mapState,mapMutations } from "vuex";
import { stageCode } from "../../config/config";
import { likeImage } from "../../service/getData";
import {getUserLikeList,getImageLikeListById} from '../../service/getData'
export default {
  name: "AddLike",
  components: {
    "a-icon": Icon
  },
  data() {
    return {
      stageCode: stageCode,
      iconSpin: false,
      remainVote: 0,
      likeTimes: 0,
      loadInfoSuccess: false,
      loadMessage: "Loading like info",
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(["userStage", "userId", "uesrLikeList"]),
    liked: function() {
      console.log('computed hasliked')
      return this.hasLiked()
    },
    voteLeft: function(){
      return (10 - this.uesrLikeList.length)
    }
  },

  watch: {
    id: function(){
      this.updateLikeTimes()
    }
  },
  mounted: function() {
    this.initLike()
    this.updateLikeTimes()
  },
  
  methods: {
    ...mapMutations(['USER_LIKE_LIST']),
    handleLikeClick() {
      if (this.uesrLikeList.length >= 10) {
        this.$modal.warning({
          title: "The number of votes cannot exceed 10",
          content: (
            <div>
              <p>
                Your vote has been used up,vote cannot be withdrawn.
              </p>
              <p>您的點贊機會已經用完，且點贊不能撤回</p>
            </div>
          )
        });
        return;
      }

      if (this.userStage === this.stageCode.like) {
        const that = this;
        this.$modal.confirm({
          title: "Are you sure you want to vote for this photo? ",
          content: "Once voted, cannot be withdrawn(投票無法撤回)"+
          "Your still have "+ this.voteLeft + " left",
          onOk() {
            that.iconSpin = true;
            likeImage(that.id).then(res => {
              that.iconSpin = false;
              if (res.code === 200) {
                that.liked = true;
                that.likeTimes = that.likeTimes + 1;
                that.asyncUserLikeList();
                that.$emit("likeSuccess");
              } else {
                that.$error("msg:" + res.message);
                that.loadMessage = "Load failed ,please flesh and try again ";
              }
            });
          }
        });
      } else {
        const h = this.$createElement;
        this.$modal.info({
          title: "Notice",
          content: h("h3", {}, [
            h("p", "Has passed the 'Like' period"),
            h("p", "已经过了可以点赞的时期")
          ])
        });
      }
    },
    handleLikedClick() {
      const h = this.$createElement;
      this.$modal.info({
        title: "Notice",
        content: h("h3", {}, [
          h("p", "You areadly liked this image"),
          h("p", "不能重复点赞或取消点赞")
        ])
      });
    },
    async initLike () {
      getUserLikeList().then(
        res => {
          if(res && res.data) {
            this.USER_LIKE_LIST(res.data[0])
            this.loadInfoSuccess = true
          }else {
            this.loadInfoSuccess = false
            if(res)
            this.loadMessage = res.message
          }
        }
      )
    },
    hasLiked() {
      const list = this.uesrLikeList;
      for (let i = 0; i < list.length; i++) {
        if (this.id === list[i]) {
          return true;
        }
      }
      return false
    },
    updateLikeTimes() {
      getImageLikeListById(this.id).then(
        res => {
          if(res && res.data) {
            this.loadInfoSuccess = true
            this.likeTimes = res.data.length
          }
        }
      )
    }
  }
};
</script>
<style lang="scss" scoped>
.add-like-container {
  display: block;
  width: 100%;
  margin-top: 15px;
  .like-icon {
    font-size: 32px;
  }
}
</style>