<template>
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
</template>
<script>
import { Form, Button, Input, Icon, Checkbox } from "ant-design-vue";

export default {
  name: "login",
  beforeCreate() {
    this.form = Form.createForm(this);
  },
  components: {
    "a-input": Input,
    "a-button": Button,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-icon": Icon,
    "a-checkbox": Checkbox
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.loginFormContainer {
  max-width: 400px;
  margin: 0 auto;
  min-width: 300px;
  margin-top: 65px;
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
</style>


