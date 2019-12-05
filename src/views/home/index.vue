<template>
  <el-container>
    <el-header>新宏高科后台管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :router="this.isRouter"
        >
          <el-menu-item index="/objList">
            <i class="el-icon-menu"></i>
            <span slot="title">项目列表</span>
          </el-menu-item>
          <el-menu-item index="/option2">
            <i class="el-icon-menu"></i>
            <span slot="title">功能二</span>
          </el-menu-item>
          <el-menu-item index="option3">
            <i class="el-icon-menu"></i>
            <span slot="title">功能三</span>
          </el-menu-item>        
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      isRouter: true
    }
  }
}
</script>

<style scoped lang="less">
.el-menu {
  text-align: left;
}
</style>
