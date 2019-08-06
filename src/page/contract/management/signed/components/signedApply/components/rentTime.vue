<template>
  <div class="rentTime">
    <h3 class="title">租赁时间</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">签约时间</el-col>
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="4" class="label">收费周期</el-col>
      <el-col :span="8">
        <el-select>
          <option value></option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">租约起始日期</el-col>
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="4" class="label">租约截至日期</el-col>
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">规定交铺日期</el-col>
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="4" class="label">规定开业日期</el-col>
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang = "scss" scoped>
.rentTime {
  margin-bottom: 20px;
  font-size: 16px;
}
</style>
