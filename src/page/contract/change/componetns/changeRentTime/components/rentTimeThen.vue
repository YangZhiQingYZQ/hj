<template>
  <div class="rent-time-then">
    <h3 class="rent-title">{{title0}}</h3>
    <h4 class="rent-title">{{title1}}</h4>
    <el-table border>
      <el-table-column label="序号"></el-table-column>
      <el-table-column label="资源编号"></el-table-column>
      <el-table-column label="费项名称"></el-table-column>
      <el-table-column label="计划缴费时间"></el-table-column>
      <el-table-column label="费项期限起"></el-table-column>
      <el-table-column label="费项期限止"></el-table-column>
      <el-table-column label="金额"></el-table-column>
    </el-table>
    <h4 class="rent-title">{{title2}}</h4>
    <el-table border>
      <el-table-column label="起始时间"></el-table-column>
      <el-table-column label="截止日期"></el-table-column>
      <el-table-column label="免租日期"></el-table-column>
      <el-table-column label="免租天数"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    title0: {
      type: String,
      default: ""
    },
    title1: {
      type: String,
      default: ""
    },
    title2: {
      tyep: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.rent-title{
    font-size:14px;
    line-height:40px;
    height:40px;
}
</style>