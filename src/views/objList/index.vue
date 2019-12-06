<template>
  <div id="home">
    <!-- 搜索 -->
    <el-card id="search">
      <el-page-header @back="goBack" content="项目列表"></el-page-header>
      <el-input
        placeholder="请输入内容"
        v-model="keyword"
        clearable
        style="width:300px;margin-right:10px;"
        @keyup.enter.native="handleSearch()"
      ></el-input>
      <el-button type="primary" @click="handleSearch()">搜索</el-button>
      <el-button size="large" @click="handleAdd()">新增项目</el-button>
    </el-card>
    <!-- 项目列表 -->
    <el-card id="list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="项目名称" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="当前版本" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 1" type="success">已通过</el-tag>
            <el-tag v-if="scope.row.status == 0">待审批</el-tag>
            <el-tag v-if="scope.row.status == -1" type="danger">未通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="开发人员" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleDetail(scope.row.name)">查看</el-button>
            <el-button size="mini" type="primary" @click="handleUpdate(scope.$index, scope.row)">上传</el-button>
            <el-button size="mini" type="primary" @click="handleCorrect(scope.row.name)">审批</el-button>
            <el-button size="mini">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script type="text/javascript">
// import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      keyword: '',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 0
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          status: 1
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status: -1
        }]
      }
    },
    methods: {
      // 搜索
      handleSearch() {
        this.keyword = ''
      },

      // 新增
      handleAdd() {
        this.$router.push('/update')
      },

      // 查看详情
      handleDetail(name) {
        this.$router.push('/detail')
      },

      // 审批
      handleCorrect(name) {
        this.$router.push('/correct')
      },

      // 更新上传
      handleUpdate(index, row) {
        // console.log(index, row);
        this.$router.push('/update')
      },
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
#home {
  height: 100%;
}
#search {
  text-align: left;
}
#list {
  margin-top: 10px;
  height: 100%;
}
.el-page-header {
  margin-bottom: 20px;
}
</style>
