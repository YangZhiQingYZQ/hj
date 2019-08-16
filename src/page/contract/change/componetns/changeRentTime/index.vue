<template>
  <el-dialog :visible.sync="isDialog" width="80%">
    <apply-info title="周期免租期变更"></apply-info>
    <customer></customer>
    <wy></wy>
    <house-source></house-source>
    <rent-time></rent-time>
    <rent-rules :month="true"></rent-rules>
    <el-row class="rent-time-then-box">
      <el-col :span="11" class="fn">
        <rent-time-then title0="变更前" title1="缴租周期" title2="免租规定"></rent-time-then>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="11" class="fn">
        <rent-time-then title0="变更后"></rent-time-then>
      </el-col>
    </el-row>
    <flaot-rent-rule></flaot-rent-rule>
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
    // 私有模块
    rentTimeThen: () => import("./components/rentTimeThen")
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
.rent-time-then-box {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  .fn {
    overflow: hidden;
    flex: none;
  }
}
</style>