<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-27 01:51:44
 -->
<template>
  <div class="rent-policy">
    <h3 class="title">租赁政策</h3>
    <el-table border :data="form.periodPolicyList">
      <el-table-column label="序号" type = "index"></el-table-column>
      <el-table-column label="资源编号" prop = ""></el-table-column>
      <el-table-column label="资源名称" prop = ""></el-table-column>
      <el-table-column label="房源性质" prop = ""></el-table-column>
      <el-table-column label="租赁面积" prop = ""></el-table-column>
      <el-table-column label="业态" prop = ""></el-table-column>
      <el-table-column label="时间起始" prop = ""></el-table-column>
      <el-table-column label="时间截至" prop = ""></el-table-column>
      <el-table-column label="标准价" prop = ""></el-table-column>
      <el-table-column label="底价" prop = ""></el-table-column>
      <el-table-column label="行业保证金" prop = ""></el-table-column>
      <el-table-column label="履约保证金" prop = ""></el-table-column>
      <el-table-column label="物管费" prop = ""></el-table-column>
    </el-table>
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
      form: { periodPolicyList: [] }
    };
  },
  methods: {
    initForm() {
      let { periodPolicyList } = this.contract;
      this.form = { periodPolicyList };
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>
<style>
</style>
