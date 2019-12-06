<template>
  <div id="login">
    <el-card class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码至少六位数", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     let res = this.$http.get("user/login", this.ruleForm);
      //     console.log(res);
      //   } else {
      //     return false;
      //   }
      // });
      let res = await this.$http.get('api/user/login', {
        params: {
          ...this.ruleForm
        }
      })
      console.log(res)
    }
  }
};
</script>

<style scoped lang="less">
#login,
.login {
  height: 100%;
  color: #ccc;
}
.el-form {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 350px;
  height: 200px;
  padding: 30px 30px 0 0;
  border: 2px solid #20a0ff;
  border-radius: 10px;
}
</style>