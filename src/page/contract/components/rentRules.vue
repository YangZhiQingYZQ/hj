<template>
  <div class="rent-rules">
    <h3 class="title">
      <span class="fn">合同租金规定</span>
      <span class="fn">
        <icon class="el-icon-circle-plus"></icon>
        <icon class="el-icon-remove"></icon>
      </span>
    </h3>
    <el-table border>
      <el-table-column label="起始日期"></el-table-column>
      <el-table-column label="截至日期"></el-table-column>
      <el-table-column label="租金单价(元/m/天)"></el-table-column>
      <el-table-column label="月租金(元)" v-if="month"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang = "scss">
.rent-rules {
  margin-top: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    line-height: 2;
  }
  .fn {
    flex: none;
  }
}
</style>
