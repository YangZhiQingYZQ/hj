<template>
  <el-dialog :visible.sync="isDialog" width="80%">
    <apply-info :title="'面积调整('+(changeType =='flxed'?'固定':'浮动')+'租金)'"></apply-info>
    <customer></customer>
    <wy></wy>
    <house-source></house-source>
    <rent-time></rent-time>
    <flaot-rent-rule></flaot-rent-rule>
    <!-- 固定合同差异部分 -->
    <rent-rules v-if="changeType =='fixed'"></rent-rules>
    <!-- 浮动合同差异部分 -->
    <template v-else>
      <float-rent-rule></float-rent-rule>
      <rent-rule></rent-rule>
    </template>

    <!-- 分割线 -->
    <rent-free-rule></rent-free-rule>
    <other-expenses></other-expenses>
    <first-rent-rule></first-rent-rule>
    <supplement-rule></supplement-rule>
    <additional-explain></additional-explain>
    <relevant-enclosure></relevant-enclosure>
    <rent-policy></rent-policy>
    <rent-preview-plan></rent-preview-plan>
    <btns></btns>
  </el-dialog>
</template>
<script>
export default {
  components: {
    applyInfo: () => import("../../../components/applyInfo"),
    customer: () => import("../../../components/customer"),
    wy: () => import("../../../components/wy"),
    rentTime: () => import("../../../components/rentTime"),
    houseSource: () => import("../../../components/houseSource"),
    rentRules: () => import("../../../components/rentRules"),
    rentFreeRule: () => import("../../../components/rentFreeRule"),
    otherExpenses: () => import("../../../components/otherExpenses"),
    firstRentRule: () => import("../../../components/firstRentRule"),
    supplementRule: () => import("../../../components/supplementRule"),
    additionalExplain: () => import("../../../components/additionalExplain"),
    relevantEnclosure: () => import("../../../components/relevantEnclosure"),
    rentPolicy: () => import("../../../components/rentPolicy"),
    rentPreviewPlan: () => import("../../../components/rentPreviewPlan"),
    btns: () => import("../../../components/btns"),
    // 浮动模块
    floatRentRule: () => import("./components/floatRentRule"),
    rentRule: () => import("./components/rentRule")
  },
  data() {
    return {
      isDialog: false,
      applyInfoTitle: "面积调整（固定租金）",
      changeType: "float"
    };
  }
};
</script>
<style lang="scss">
.apply-form {
  height: 40px;
  border-right: 1px solid #bbb;
  &.bd-t {
    border-top: 1px solid #bbb;
  }
  .el-input__inner {
    border: none;
    border-radius: 0;
    border-left: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
  }
  .label {
    padding-left: 10px;
    line-height: 39px;
    box-sizing: border-box;
    border-left: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
  }
  .el-select,
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
  }
}
</style>