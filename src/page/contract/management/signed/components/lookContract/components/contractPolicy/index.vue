<template>
  <div class="contrac-policy">
    <select-edition :edition.sync="edition"></select-edition>
    <el-table border>
      <el-table-column prop="name" label="序号"></el-table-column>
      <el-table-column prop="name" label="资源编号"></el-table-column>
      <el-table-column prop="name" label="资源名称"></el-table-column>
      <el-table-column prop="name" label="房源性质"></el-table-column>
      <el-table-column prop="name" label="租赁面积(m2)"></el-table-column>
      <el-table-column prop="name" label="业态"></el-table-column>
      <el-table-column prop="name" label="时间起始"></el-table-column>
      <el-table-column prop="name" label="时间截止"></el-table-column>
      <el-table-column prop="name" label="固定底价(元)"></el-table-column>
      <el-table-column prop="name" label="浮动底价（元）"></el-table-column>
      <el-table-column prop="name" label="行业保证金(元)"></el-table-column>
      <el-table-column prop="name" label="履约保证金(元)"></el-table-column>
      <el-table-column prop="name" label="物管费(元)"></el-table-column>
    </el-table>
    <change-record></change-record>
  </div>
</template>
<script>
export default {
  components: {
    selectEdition: () => import("../components/selectEdition"),
    changeRecord: () => import("../components/changeRecord")
  },
  data() {
    return {
      edition: "1"
    };
  }
};
</script>
<style lang="scss">
</style>