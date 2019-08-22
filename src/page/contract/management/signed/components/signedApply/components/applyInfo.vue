<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-06 22:28:11
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-22 00:00:35
 -->
<template>
  <div class="apply-info">
    <h3 class="apply-title">租赁申请（{{selectActive == "1"?"浮动租金":"固定租金"}}）</h3>
    <!-- 申请人信息 -->
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">申请人</el-col>
      <el-col :span="4">
        <el-input></el-input>
      </el-col>
      <el-col :span="4" class="label">申请部门</el-col>
      <el-col :span="4">
        <el-input></el-input>
      </el-col>
      <el-col :span="4" class="label">申请日期</el-col>
      <el-col :span="4">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">关联流程</el-col>
      <el-col :span="20">
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    selectActive: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.apply-info {
  margin-bottom: 20px;
  .apply-title {
    font-size: 26px;
    line-height: 2;
    text-align: center;
  }
}
</style>