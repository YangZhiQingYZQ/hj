<template>
  <div class="signed">
    <el-form :inline="true" size="small">
      <el-form-item label="客户名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="合同编号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <el-button size="small">
          <i class="el-icon-delete"></i>
          清空
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
