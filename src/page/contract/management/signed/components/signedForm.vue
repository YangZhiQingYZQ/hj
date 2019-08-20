<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-02 20:48:44
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-21 02:06:10
 -->
<template>
  <div class="signed">
    <el-form :inline="true" size="small">
      <el-form-item label="客户名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="资源编号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="合同编号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="合同状态">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="登记时间">
        <el-date-picker align="right" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
        <el-button size="small">
          <i class="el-icon-delete"></i>
          清空
        </el-button>
      </el-form-item>
    </el-form>
    <slot :tableData ="tableData"></slot>
  </div>
</template>

<script>
import axios from "axios";
import { ContractManagement } from "../../../common.js";

export default {
  data() {
    return {
      contractManagement: new ContractManagement(),
      tableData:[],
    };
  },
  methods: {
    getData() {
      let params = this.contractManagement;
      console.log(params)
      axios
        .get("/rst-contract/contractManagement/findByContractCode", {
          params: params
        })
        .then(res => {
          console.log(res);
          this.tableData = res.data.data.records;
        });
    }
  },

  mounted() {
    this.getData(); //获取初始数据
  }
};
</script>

<style>
</style>
