<template>
  <div id="building">
    <div class="login-container">
      <el-form
        :model="form"
        :rules="rules"
        status-icon
        ref="form"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-page"
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="form.username"
            auto-complete="off"
            placeholder="用户名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="密码"
            clearable
          ></el-input>
        </el-form-item>
        <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox> -->
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%"
            @click="login"
            :loading="logining"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { isNumber } from "@/utils/validate";
import { getLogin } from "@/api/login";
import { findUserByToken } from "@/api/login";

export default {
  data() {
    return {
      logining: false,
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { validator: isNumber, trigger: "blur" },
          { required: true, message: "账号不能为空", trigger: "blur" },
        ], // 使用 isSymbol 并 blur 方式 触发
        password: [
          { validator: isNumber, trigger: "blur" },
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
      // checked: false
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.logining = true;
          getLogin(this.form)
            .then((res) => {
              console.log(res);
              if (res.data.token != "") {
                this.logining = false;
                this.$store.dispatch("updateToken", res.data.token);
                findUserByToken()
                  .then((res) => {
                    switch (res.data.info) {
                      case "student":
                        this.$router.push({ path: "/student" });
                        break;
                      case "teacher":
                        this.$router.push({ path: "/teacher" });
                        break;
                      default: {
                        this.$router.push({ path: "/" });
                      }
                    }
                  })
                  .catch((res) => {
                    console.log(res);
                  });
              }
              // 成功之后的操作
            })
            .catch((res) => {
              console.log(res);
              // 失败时候的操作
            });
        } else {
          // this.$alert('username or password wrong!', 'info', {
          //     confirmButtonText: 'ok'
          // })
        }
      });
    },
  },
};
</script>

<style scoped>
#building {
  background-image: url("../../assets/examLogin.jpg");
  /* background:url("../../assets/colledge.jpg"); */
  width: 100%;
  height: 100%;
  position: fixed;
  /* padding: 25px; */
  background-size: 100% 100%;
}
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
