<template>
  <el-row class="wy">
    <el-col :span="4" class="label">物业类型</el-col>
    <el-col :span="4">
      <el-select>
        <option value></option>
      </el-select>
    </el-col>
    <el-col :span="4" class="label">业态</el-col>
    <el-col :span="4">
      <el-select>
        <option value></option>
      </el-select>
    </el-col>
    <el-col :span="4" class="label">合同模板</el-col>
    <el-col :span="4">
      <el-select>
        <option value></option>
      </el-select>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang = "scss" scoped>
.wy {
    margin-bottom:20px;
  .label {
    padding-left: 10px;
    line-height: 40px;
  }
}
</style>
