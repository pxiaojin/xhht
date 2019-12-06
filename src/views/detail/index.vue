<template>
  <div id="detail">
    <el-card id="nav">
      <el-page-header @back="goBack" content="详情页面"></el-page-header>
    </el-card>
    <el-card id="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="项目名称" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="版本号" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="150">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 1" type="success">已通过</el-tag>
            <el-tag v-if="scope.row.status == 0">待审批</el-tag>
            <el-tag v-if="scope.row.status == -1" type="danger">未通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="开发人员" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审批人员" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="">
            <el-button size="mini">下载审批报告</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 0
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 0
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 1
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: -1
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.push("/objList");
    }
  }
};
</script>

<style scoped lang="less">
#detail,
#content {
  height: 100%;
}
#nav {
  margin-bottom: 10px;
}
</style>