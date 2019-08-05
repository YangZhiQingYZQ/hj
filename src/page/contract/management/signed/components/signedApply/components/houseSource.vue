<template>
  <div class="house-source">
    <h3 class="title">
        <span class="fn">房源</span>
        <span class="fn">
            <icon class = "el-icon-circle-plus"></icon>
            <icon class = "el-icon-remove"></icon>
        </span>
    </h3>
    <el-row class="apply-form">
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

<style lang = "scss">
.house-source {
  margin-bottom: 20px;
  font-size: 16px;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    line-height: 2;
  }
  .fn{
    flex:none;
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
