<template>
  <el-dialog :visible.sync="isDialog" width="80%">
    <apply-info title="合同变更-换铺"></apply-info>
    <!-- 非公共部分 -->
    <customer :customerInfo="false"></customer>
    <div class="rent-time">
      <h3 class="title">租赁时间</h3>
      <el-row class="selectTime">
        <el-col :span="5" class="label">租约起始日期</el-col>
        <el-col :span="6" class="val"></el-col>
      </el-row>
      <el-row class="apply-form">
        <el-col :span="5" class="label bd-t">变更生效时间</el-col>
        <el-col :span="6" class="val bd-t bd-r">
          <el-input></el-input>
        </el-col>
        <el-col :span="2">a</el-col>
        <el-col :span="5" class="label bd-t">变更手续费(元)</el-col>
        <el-col :span="6" class="val bd-t">
          <el-input></el-input>
        </el-col>
      </el-row>
    </div>
    <el-row class="house-source-then">
      <el-col :span="11" class="fn">
        <house-source-then title="变更前" title1="房源信息" title2="租金规定"></house-source-then>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="11" class="fn">
        <house-source-then title="变更后" :tableInput="true"></house-source-then>
      </el-col>
    </el-row>
    <el-row class="selectTime">
      <el-col :span="5" class="label">租约起始日期</el-col>
      <el-col :span="6" class="val"></el-col>
    </el-row>
    <!-- 分割线 -->
    <other-expenses :other="false"></other-expenses>
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
    otherExpenses: () => import("../../../components/otherExpenses"),
    additionalExplain: () => import("../../../components/additionalExplain"),
    relevantEnclosure: () => import("../../../components/relevantEnclosure"),
    rentPolicy: () => import("../../../components/rentPolicy"),
    rentPreviewPlan: () => import("../../../components/rentPreviewPlan"),
    btns: () => import("../../../components/btns"),
    // 私有模块
    houseSourceThen: () => import("./components/houseSourceThen")
  },
  data() {
    return {
      isDialog: false,
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
  &.bd-l {
    border-left: 1px solid #bbb;
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
    height: 40px;
    box-sizing: border-box;
    border-left: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
  }
  .el-select,
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
  }
  .bd-n {
    border: none;
  }
  .bd-r {
    border-right: 1px solid #bbb;
  }
}

.rent-time,
.mr-b {
  margin-bottom: 20px;
}
.rent-time {
  .apply-form {
    .label {
      height: 41px;
    }
  }
}
.selectTime {
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 38px;
  height: 42px;
  .label {
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #bbb;
  }
  .val {
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #bbb;
    border-left: none;
  }
}
.house-source-then {
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