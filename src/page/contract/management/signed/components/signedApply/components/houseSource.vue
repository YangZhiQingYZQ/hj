<template>
  <div class="house-source">
    <h3 class="title">
      <span class="fn">房源</span>
      <span class="fn">
        <icon class="el-icon-circle-plus"></icon>
        <icon class="el-icon-remove"></icon>
      </span>
    </h3>
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">资源编号</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
      <el-col :span="4" class="label">资源名称</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">租赁面积（m2）</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
      <el-col :span="4" class="label">房源性质</el-col>
      <el-col :span="8">
        <el-select>
          <option value></option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang = "scss" scoped>
.house-source {
  margin-bottom: 20px;
  font-size: 16px;
}
</style>
