<template>
  <div class="first-rent-rule">
    <h3 class="title">首次租金规定</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="7" class="label">首次交租日期</el-col>
      <el-col :span="7">
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="3" class="label">首次缴纳</el-col>
      <el-col :span="4">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="label">期租金</el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.first-rent-rule {
  margin-bottom: 20px;
}
</style>