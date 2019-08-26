<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-14 12:32:04
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-27 01:57:38
 -->
<template>
  <el-dialog :visible.sync="isDialog" width="80%">
    <apply-info
      :contract="contract"
      :title="'租赁申请('+(selectActive=='0' ?'固定合同':'浮动合同')+')'"
      ref="applyInfo"
    ></apply-info>
    <customer :contract="contract" ref="customer"></customer>
    <!-- 暂不确定 -->
    <wy :contract="contract" ref="wy"></wy>
    <house-source :contract="contract" ref="houseSource"></house-source>
    <rent-time :contract="contract" ref="rentTime"></rent-time>
    <!-- 暂不确定 -->
    <flaot-rent-rule v-if="selectActive == '1'" :contract="contract" ref="floatRentRule"></flaot-rent-rule>
    <!-- 暂不确定 -->
    <rent-rules :contract="contract" ref="rentRules"></rent-rules>

    <rent-free-rule :contract="contract" ref="rentFreeRule"></rent-free-rule>
    <other-expenses :contract="contract" ref="otherExpenses"></other-expenses>
    <first-rent-rule :contract="contract" ref="firstRentRule"></first-rent-rule>
    <supplement-rule :contract="contract" ref="supplementRule"></supplement-rule>
    <additional-explain :contract="contract" ref="supplementRule"></additional-explain>
    <relevant-enclosure :contract="contract" ref="relevantEnclosure"></relevant-enclosure>
    <rent-policy :contract="contract" ref="rentPlicy"></rent-policy>
    <rent-preview-plan :contract="contract" ref="rentPreviewPlan"></rent-preview-plan>
    <btns></btns>
  </el-dialog>
</template>

<script>
import applyInfo from "../../../../components/applyInfo";
import customer from "../../../../components/customer";
import wy from "../../../../components/wy";
import houseSource from "../../../../components/houseSource";
import rentTime from "../../../../components/rentTime";
import rentRules from "../../../../components/rentRules";
import rentFreeRule from "../../../../components/rentFreeRule";
import otherExpenses from "../../../../components/otherExpenses";
import firstRentRule from "../../../../components/firstRentRule";
import supplementRule from "../../../../components/supplementRule";
import additionalExplain from "../../../../components/additionalExplain";
import relevantEnclosure from "../../../../components/relevantEnclosure";
import rentPolicy from "../../../../components/rentPolicy";
import rentPreviewPlan from "../../../../components/rentPreviewPlan";
import btns from "../../../../components/btns";
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
      type: [String,Number],
      default: ""
    }
  },
  name: "apply",
  data() {
    return {
      isDialog: false,
      contract: {}
    };
  },
  methods: {
    subimt() {
      console.log(this.$refs.applyInfo.form);
      let params = Object.assign(
        this.contract,
        this.$refs.applyInfo.form,
        this.$refs.customer.form,
        this.$refs.houseSource.form,
        this.$resf.rentTime.form
      );
      console.log(params);
    }
  },
  created() {
    this.contract = new AddContract(this.selectActive);
    console.log((this.contract.employeeName = "21123123"));
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
