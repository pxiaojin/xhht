<template>
  <div id="correct">
    <el-card id="nav">
      <el-page-header @back="goBack" content="项目审批"></el-page-header>
    </el-card>
    <el-card id="content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="当前版本" prop="version">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class="choose" label="审批结果" prop="isOk">
          <el-radio-group v-model="ruleForm.isOk">
            <el-radio label="1">通过</el-radio>
            <el-radio label="-1">未通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="ruleForm.isOk == -1" label="审批报告" prop="report">
          <el-upload
            class="choose"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :before-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">未通过请上传审批报告</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="文件说明" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即上传</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      fileList: [],
      ruleForm: {
        name: "",
        version: "",
        date1: "",
        desc: "",
        isOk: '',
        report: ''
      },
      rules: {
        name: [
          { required: true, message: "请输入项目名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        version: [
          { required: true, message: "请输入当前版本", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        isOk: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        report: [
          { required: true, message: "请上传审批报告", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 文件移除
    handleRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 文件预览
    handlePreview(file) {},
    goBack() {
      this.$router.go(-1);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 取消上传
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$router.push('/objList')
    }
  }
};
</script>

<style scoped lang="less">
#correct,
#content {
  height: 100%;
}
#nav {
  margin-bottom: 10px;
}
.el-form {
  width: 500px;
}
.choose {
  text-align: left;
}
</style>