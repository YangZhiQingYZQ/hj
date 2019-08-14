<template>
  <el-dialog :visible.sync="isDialog" width="80%">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本资料" name="baseInfo">
        <base-info></base-info>
      </el-tab-pane>
      <el-tab-pane label="费项规定" name="expenditureRule">
        <expenditure-rule></expenditure-rule>
      </el-tab-pane>
      <el-tab-pane label="附加条款" name="additionalClauses">
        <additional-clauses></additional-clauses>
      </el-tab-pane>
      <el-tab-pane label="缴费记录" name="paymentRecord">
        <payment-record></payment-record>
      </el-tab-pane>
      <el-tab-pane label="合同预览" name="contractPreview">
        <contract-preview></contract-preview>
      </el-tab-pane>
      <el-tab-pane label="合同政策" name="contractPolicy">
        <contract-policy></contract-policy>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<script>
export default {
  name: "toView",
  components: {
    baseInfo: () => import("./components/baseInfo/index.vue"),
    expenditureRule: () => import("./components/expenditureRule/index.vue"),
    additionalClauses: () => import("./components/additionalClauses/index.vue"),
    paymentRecord: () => import("./components/paymentRecord/index.vue"),
    contractPreview: () => import("./components/contractPreview/index.vue"),
    contractPolicy: () => import("./components/contractPolicy")
  },
  data() {
    return {
      activeName: "baseInfo",
      isDialog: true
    };
  }
};
</script>
<style lang="scss">
</style>