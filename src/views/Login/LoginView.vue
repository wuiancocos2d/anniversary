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
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                class="login-form-remember"
                v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
              >Remember me</a-checkbox>
              <a class="login-form-forgot" href>Forgot password</a>
              <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { Form, Button, Input, Icon, Checkbox, Row, Col } from "ant-design-vue";
import { mapMutations } from "vuex";
import { userLogin } from "../../service/getData.js";
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
    "a-checkbox": Checkbox,
    "a-row": Row,
    "a-col": Col
  },
  methods: {
    ...mapMutations(["RECORD_USERINFO"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.login(values);
        } else {
          this.$message.error("表单验证失败");
          return false;
        }
      });
    },
    async login(user) {
      this.userInfo = await userLogin(user);
      if (!this.userInfo.userId) {
        this.$message.error(this.userInfo.message);
      } else {
        this.RECORD_USERINFO(this.userInfo);
        // this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
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


