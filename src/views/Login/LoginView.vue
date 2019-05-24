<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="banner">
          <img class="banner" src="../../../public/imgs/banner1200_400.png" alt>
        </div>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="loginFormContainer">
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                v-decorator="[
          'staffNo',
          { rules: [{ required: true, message: 'Please input your Staff number!(s:04035)' }] }
        ]"
                placeholder="StaffNo"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
          'birthday',
          { rules: [{ required: true, message: 'Please input your Birthday!(s:19901230)' }] }
        ]"
                type="password"
                placeholder="Birthday"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { Form, Button, Input, Icon, Row, Col } from "ant-design-vue"
import { mapMutations } from "vuex"
import { userLogin } from "../../service/getData"
export default {
  name: "login",
  data() {
    return {
      userInfo: null
    };
  },
  beforeCreate() {
    this.form = Form.createForm(this);
  },
  components: {
    "a-input": Input,
    "a-button": Button,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col
  },

  methods: {
    ...mapMutations(["RECORD_USERID","RECORD_USERINFO"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.login(values);
        } else {
          this.$message.error("Form valid failed, fill neccessary ");
          return false;
        }
      });
    },
    login(user) {
      const loadingMessage = this.$message.loading('Loging..', 0);
      userLogin(user).then(
        res => {
          if (res.code === 200) {
            setTimeout(loadingMessage, 0);
            this.RECORD_USERID(res.data.userNo)
            this.RECORD_USERINFO(res.data)
            this.$message.success('Welcome to AirMacau 25th anniverary, Redircting...',2).then(
              ()=>{
                this.$router.push('/')
              }
            )
          }
        },
        error => {
          console.log("error", error);
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  .banner {
    margin: 30px auto 0;
    height: 240px;
  }
  @media only screen and (max-width: 600px) {
    .banner {
      margin: 30px auto 0;
      height: 160px;
    }
  }
  .loginFormContainer {
    position: relative;
    max-width: 350px;
    margin: 0 auto;
    min-width: 300px;
    margin-top: 65px;
    height: 100%;
  }

  #components-form-demo-normal-login {
    .login-form-button {
      width: 100%;
    }
    .login-form-forgot {
      float: right;
    }
    .login-form-remember {
      float: left;
    }
  }
}
</style>


