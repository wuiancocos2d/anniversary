<template>
  <div class="login-container">
    <a-row class="login-row">
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="banner">
          <img class="banner" src="../../../public/imgs/banner2.png" alt>
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
                class="an-ipt"
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
                class="an-ipt"
                v-decorator="[
          'birthday',
          { rules: [{ required: true, message: 'Please input your Birthday!(s:19901230)' }] }
        ]"
                type="password"
                placeholder="Birthday(s:19901230)"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" class="login-form-button">Login</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
    <a-row class="footer">
      <VFooter></VFooter>
    </a-row>
  </div>
</template>
<script>
import { Form, Button, Input, Icon, Row, Col } from "ant-design-vue";
import { mapActions } from "vuex";
import { userLogin } from "../../service/getData";
import VFooter from "../../components/common/VFooter";
export default {
  name: "login",
  data() {
    return {
      userInfo: null,
      logining: false
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
    "a-col": Col,
    VFooter
  },

  methods: {
    ...mapActions(["recordUser"]),
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
      if (this.logining === true) return;
      const loadingMessage = this.$message.loading("Loading..", 0);
      this.logining = true;
      userLogin(user).then(
        res => {
          this.logining = false;
          setTimeout(loadingMessage, 0);
          if (!res) {
            this.$modal.error({ title: "ERR_CONNECTION_REFUSED" });
            return;
          }
          if (res.code === 200) {
            this.recordUser(res);
            this.$router.push("/");
          } else if (res.code === 10003) {
            const h = this.$createElement;
            this.$modal.error({
              tite: "Staff Number or Birthday Wrong",
              content: h("div", {}, [h("h3", "Staff Number or Birthday Wrong")])
            });
          }
        },
        error => {
          this.logining = false;
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
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;

  .login-row {
    min-height: 500px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-bottom: 150px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .banner {
    margin: 15px auto 0;
    width: 460px;
  }
  @media screen and (min-width: 600px){
    .banner {
      position: relative;
      left: 35px;;
    }
    .loginFormContainer {
      margin-top: 70px;
    }
  }
  @media screen and (min-width: 900px) {
    .loginFormContainer {
      margin-top: 90px;
    }
  }
  @media only screen and (max-width: 600px) {
    .banner {
      margin: 10px auto 0;
      height: 180px;
      width: auto;
    }
    .login-row {
      margin-top: 20px;
    }
    .loginFormContainer {
      margin-top: 45px;
    }
  }
  .loginFormContainer {
    position: relative;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    min-width: 300px;
    height: 100%;
    padding: 0 35px;
    .an-ipt {
      line-height: 18px;
    }
    .login-form-button {
      height: 30px;
      line-height: 30px;
      font-size: 15px;
    } 
  }

  #components-form-demo-normal-login {
    .login-form-button {
      width: 100%;
      background-color: #4c3b9f;
      border-color: #4c3b9f;
      font-size: 18px;
      height: 36px;
      font-weight: 600;
      color: #fcfcfc;
      &:hover {
        opacity: 0.9;
        box-shadow: 0 7px 18px rgba(0, 0, 0, 0.25),
        0 5px 5px rgba(0, 0, 0, 0.22);
      }
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


