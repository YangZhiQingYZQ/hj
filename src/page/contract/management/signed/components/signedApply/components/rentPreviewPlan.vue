<template>
  <div class="rent-preview-plan">
    <h3 class="title">交租预览计划</h3>
    <div class="table-check">收起</div>
    <el-table border>
      <el-table-column label="序号"></el-table-column>
      <el-table-column label="资源编号"></el-table-column>
      <el-table-column label="费项名称"></el-table-column>
      <el-table-column label="计划缴费时间"></el-table-column>
      <el-table-column label="费项期限起"></el-table-column>
      <el-table-column label="费项期限止"></el-table-column>
      <el-table-column label="金额"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.rent-preview-plan {
  margin-bottom: 20px;
  .table-check {
    margin: 0 auto;
    width: 150px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #bbb;
    border-bottom: none;
  }
}
</style>