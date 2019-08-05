<template>
  <div class="rentTime">
    <h3 class="title">租赁时间</h3>
    <el-row class="apply-form">
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

<style lang = "scss">
.rentTime {
  margin-bottom: 20px;
  font-size: 16px;
  .title {
    font-size: 24px;
    line-height: 2;
  }
  .apply-form {
    height: 40px;
    border-right: 1px solid #bbb;
    &:nth-child(2) {
      border-top: 1px solid #bbb;
    }
    .label {
      padding-left: 10px;
      line-height: 39px;
      box-sizing: border-box;
      border-left: 1px solid #bbb;
      border-bottom: 1px solid #bbb;
    }
    /* .el-col-4,.el-col-8,.el-col-10{
        box-sizing: border-box;
    } */
    .el-input__inner {
      box-sizing: border-box;
      display: block;
      border: none;
      border-radius: 0;
      border-left: 1px solid #bbb;
      border-bottom: 1px solid #bbb;
    }
    .el-select,.el-date-editor.el-input{
        width:100%;
    }
  }
}
</style>
