<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:05:42
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 02:40:42
 -->
<template>
  <el-form class="apply-info">
    <h3 class="apply-title">{{title}}</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">申请人</el-col>
      <el-col :span="4">
        <el-form-item>
          <el-input v-model="form.employeeName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4" class="label">申请部门</el-col>
      <el-col :span="4">
        <el-form-item>
          <el-input v-model="form.organizationName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4" class="label">申请日期</el-col>
      <el-col :span="4">
        <el-form-item>
          <el-date-picker v-model="form.applyDate" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">关联流程</el-col>
      <el-col :span="20">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    contract: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      form: {
        employeeName: "",
        organizationName: "",
        applyDate: ""
      }
    };
  },
  methods: {
    initForm() {
      let { employeeName, organizationName,applyDate } = this.contract;
      this.form = {
        employeeName,
        organizationName,
        applyDate
      };
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>
<style lang="scss">
.apply-info{
  margin-bottom: 20px;
  .apply-title {
    font-size: 26px;
    line-height: 2;
    text-align: center;
  }
}
</style>