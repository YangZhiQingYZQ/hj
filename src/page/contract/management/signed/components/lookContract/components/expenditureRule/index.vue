<template>
  <div>
    <select-edition :edition.sync="edition"></select-edition>
    <el-row>
      <el-col :span="8">
        <div class="label">收费周期</div>
        <div class="val"></div>
      </el-col>
    </el-row>
    <static-table :labelData="rentRuleData" title="租金规定"></static-table>
    <static-table :labelData="freeRentRuleData" title="免租规定"></static-table>
    <static-table :labelData="otherExpenses" title="其他费用"></static-table>
    <static-table :labelData="defaultProvisionsRuleData" title="违约规定"></static-table>
  </div>
</template>
<script>
export default {
  components: {
    selectEdition: () => import("../components/selectEdition"),
    staticTable: () => import("../components/staticTable")
  },
  data() {
    return {
      edition: "1",
      rentRuleData: [
        {
          label: "起始日期",
          prop: ""
        }
      ],
      freeRentRuleData: [
        {
          label: "起始日期",
          prop: ""
        }
      ],
      otherExpenses: [
        {
          label: "费项名称",
          prop: ""
        }
      ],
      defaultProvisionsRuleData: [
        {
          label: "延迟开业罚金单价(元/日)",
          prop: ""
        },
        {
          label: "延迟收铺罚金单价（元/日）",
          prop: ""
        },
        {
          label: "延迟缴纳租金滞纳金比例(日)",
          prop: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>