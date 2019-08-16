<template>
  <div class="payment-record">
    <select-edition :edition.sync="edition"></select-edition>
    <el-tabs v-model="activeName">
      <el-tab-pane label="资源1" name="1">
        <el-table border>
          <el-table-column prop="name" label="序号"></el-table-column>
          <el-table-column prop="name" label="资源编号"></el-table-column>
          <el-table-column prop="name" label="费项名称"></el-table-column>
          <el-table-column prop="name" label="计划缴费时间"></el-table-column>
          <el-table-column prop="name" label="费项期限起"></el-table-column>
          <el-table-column prop="name" label="费项期限止"></el-table-column>
          <el-table-column prop="name" label="金额"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
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
      activeName: "1",
      edition: "1"
    };
  }
};
</script>
<style lang="scss">
</style>