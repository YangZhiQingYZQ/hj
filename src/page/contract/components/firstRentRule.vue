<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-27 01:03:22
 -->
<template>
  <div class="first-rent-rule">
    <h3 class="title">首次租金规定</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="7" class="label">首次交租日期</el-col>
      <el-col :span="7">
        <el-date-picker type="date" placeholder="选择日期" v-model="firstRentDate"></el-date-picker>
      </el-col>
      <el-col :span="3" class="label">首次缴纳</el-col>
      <el-col :span="4">
        <el-input v-model="firstPaymentNtermRent"></el-input>
      </el-col>
      <el-col :span="3" class="label">期租金</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    contract: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      form: { firstRentDate: "", firstPaymentNtermRent: "" }
    };
  },
  methods: {
    initForm() {
      let { firstRentDate, firstPaymentNtermRent } = this.contract;
      this.form = { firstRentDate, firstPaymentNtermRent };
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
.first-rent-rule {
  margin-bottom: 20px;
}
</style>