<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-14 12:32:04
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-21 02:12:44
 -->
<template>
  <el-dialog :visible.sync="isDialog" width="80%">
    <apply-info :selectActive="selectActive"></apply-info>
    <customer></customer>
    <wy></wy>
    <house-source></house-source>
    <rent-time></rent-time>
    <flaot-rent-rule v-if="selectActive == 'float'"></flaot-rent-rule>
    <rent-rules></rent-rules>
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
import applyInfo from "./components/applyInfo";
import customer from "./components/customer";
import wy from "./components/wy";
import rentTime from "./components/rentTime";
import houseSource from "./components/houseSource";
import rentRules from "./components/rentRules";
import rentFreeRule from "./components/rentFreeRule";
import otherExpenses from "./components/otherExpenses";
import firstRentRule from "./components/firstRentRule";
import supplementRule from "./components/supplementRule";
import additionalExplain from "./components/additionalExplain";
import relevantEnclosure from "./components/relevantEnclosure";
import rentPolicy from "./components/rentPolicy";
import rentPreviewPlan from "./components/rentPreviewPlan";
import btns from "./components/btns";
import { dialogFn, AddContract } from "../../../../common.js";
console.log(dialogFn);
export default {
  components: {
    customer,
    wy,
    houseSource,
    rentTime,
    rentRules,
    applyInfo,
    rentFreeRule,
    otherExpenses,
    firstRentRule,
    supplementRule,
    additionalExplain,
    relevantEnclosure,
    rentPolicy,
    rentPreviewPlan,
    btns,
    flaotRentRule: () => import("./components/flaotRentRule")
  },
  mixins: [dialogFn],
  props: {
    selectActive: {
      type: String,
      default: ""
    }
  },
  name: "apply",
  data() {
    return {
      isDialog: false
    };
  }
};
</script>

<style lang = "scss">
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
