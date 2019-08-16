<template>
  <div class="float-rent-rule">
    <h3 class="title">浮动租金指标规定</h3>
    <el-row class="apply-form bd-t">
      <el-col class="label" :span="4">考核方式</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
      <el-col class="label" :span="4">浮动租金单价</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
    </el-row>

    <el-row class="apply-form">
      <el-col class="label" :span="4">考核指标</el-col>
      <el-col :span="8">
        <el-select>
          <el-option></el-option>
        </el-select>
      </el-col>
      <el-col class="label" :span="4">考核周期(月)</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-table border class = "tatle">
      <el-table-column label="考核时间起"></el-table-column>
      <el-table-column label="考核时间止"></el-table-column>
      <el-table-column label="指标量"></el-table-column>
      <el-table-column label="单位"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scope>
.tatle{
    margin-top:20px;
}
</style>