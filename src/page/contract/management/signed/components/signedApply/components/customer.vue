<template>
  <div class="customer">
    <h3 class="title">客户信息</h3>
    <el-row class="apply-form">
      <el-col class="label" :span="4">客户名称</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
      <el-col class="label" :span="4">联系电话</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
    </el-row>

    <el-row class="apply-form">
      <el-col class="label" :span="4">证件类型</el-col>
      <el-col :span="8">
        <el-select>
          <el-option></el-option>
        </el-select>
      </el-col>
      <el-col class="label" :span="4">证件号码</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
    </el-row>

    <el-row class="apply-form">
      <el-col class="label" :span="4">地址</el-col>
      <el-col :span="20">
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang = 'scss' scoped>
.customer {
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
    .el-select{
        width:100%;
    }
  }
}
</style>
