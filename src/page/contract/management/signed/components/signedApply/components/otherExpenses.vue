<template>
  <div class="OtherExpenses">
    <h3 class="title">
      <span class="fn">其他费用</span>
      <span class="fn">
        <icon class="el-icon-circle-plus"></icon>
        <icon class="el-icon-remove"></icon>
      </span>
    </h3>
    <el-table border class="mr-b-20">
      <el-table-column label="费项名称"></el-table-column>
      <el-table-column label="费用单价"></el-table-column>
      <el-table-column label="计价单位"></el-table-column>
    </el-table>
    <el-row class="table">
      <el-col :span="3" class="label bd-l bd-t">租金合同金额（元）</el-col>
      <el-col :span="3">
        <el-input class="bd-t"></el-input>
      </el-col>
      <el-col :span="3" class="label bd-t">物管费合同金额（元）</el-col>
      <el-col :span="3">
        <el-input class="bd-t"></el-input>
      </el-col>
      <el-col :span="3" class="label bd-t">周期合计合同金额（元）</el-col>
      <el-col :span="3">
        <el-input class="bd-t"></el-input>
      </el-col>
      <el-col :span="3" class="bd-n">
        <div class="label bd-t bd-l mr-l-20 bd-r bd-b">政策押金（元）</div>
      </el-col>
      <el-col :span="3">
        <el-input class="bd-t"></el-input>
      </el-col>
    </el-row>
    <el-row class="table">
      <el-col :span="3" class="label bd-l">租金政策金额（元）</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="label">物管费政策金额（元）</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="label">周期合计政策金额（元）</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="bd-n">
        <div class="label bd-l mr-l-20 bd-r bd-b">合同押金（元）</div>
      </el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang = "scss" scopde>
.title {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: 2;
}
.fn {
  flex: none;
}
.mr-l-20 {
  margin-left: 20px;
}
.bd-t {
  border-top: 1px solid #bbb;
}
.bd-r {
  border-right: 1px solid #bbb;
}

.bd-b {
  border-bottom: 1px solid #bbb;
}
.mr-b-20 {
  margin-bottom: 20px;
}
.table {
  display: flex;
  .el-col {
    display: flex;
    flex: auto;
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    &.bd-n {
      border: none;
    }
  }
  .label {
    line-height: 39px;
    flex: auto;

    &.bd-l {
      border-left: 1px solid #bbb;
    }
  }
  .el-input__inner {
    flex: auto;
    border: none;
    border-radius: 0;
  }
}
</style>
