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
    <div class="detailed">
      <el-row>
        <el-col class="label" :span="6">周期费项政策金额(元)</el-col>
        <el-col class="val" :span="6">1</el-col>
        <el-col class="label" :span="6">一次性政策金额(元)</el-col>
        <el-col class="val" :span="6">1</el-col>
      </el-row>
      <el-row>
        <el-col class="label" :span="6">周期费项合同金额(元)</el-col>
        <el-col class="val" :span="6">1</el-col>
        <el-col class="label" :span="6">一次性合同金额(元)</el-col>
        <el-col class="val" :span="6">1</el-col>
      </el-row>
      <el-row>
        <el-col class="label" :span="6">折扣(%)</el-col>
        <el-col class="val" :span="6">1</el-col>
        <el-col class="label" :span="6">折扣(%)</el-col>
        <el-col class="val" :span="6">1</el-col>
      </el-row>
    </div>

    <static-table :labelData="defaultProvisionsRuleData" title="违约规定"></static-table>
    <change-record></change-record>
  </div>
</template>
<script>
export default {
  components: {
    selectEdition: () => import("../components/selectEdition"),
    staticTable: () => import("../components/staticTable"),
    changeRecord: () => import("../components/changeRecord")
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
.detailed {
  margin-top:10px;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  font-size: 14px;
  line-height: 40px;
  .label {
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
  }
  .val {
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
  }
}
</style>