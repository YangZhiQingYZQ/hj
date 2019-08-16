<template>
  <div class="float-rent-rule">
    <h3 class="title">浮动租金指标规定</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">考核方式</el-col>
      <el-col :span="8">
        <el-select>
          <option value></option>
        </el-select>
      </el-col>
      <el-col :span="3" class="label">保底租金单价</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="label">浮动租金单价</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row class="apply-form bd-t mr-b-20">
      <el-col :span="4" class="label">考核指标</el-col>
      <el-col :span="8">
        <el-select>
          <option value></option>
        </el-select>
      </el-col>
      <el-col :span="4" class="label">考核周期（月）</el-col>
      <el-col :span="8">
        <el-select>
          <option value></option>
        </el-select>
      </el-col>
    </el-row>
    <el-table border>
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
<style lang="scss">
.mr-b-20{
    
}
</style>