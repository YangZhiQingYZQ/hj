<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 02:49:18
 -->
<template>
  <div class="house-source">
    <h3 class="title">
      <span class="fn">房源</span>
      <span class="fn">
        <i class="el-icon-circle-plus" @click="addContractSubManagement"></i>
        <i class="el-icon-remove" @click="popContractSubManagement"></i>
      </span>
    </h3>
    <div
      v-for="(item,index) in form.contractSubManagementList"
      :key="'house_'+index"
      :class="{'mr-b20':form.contractSubManagementList.length != index}"
    >
      <el-row class="apply-form bd-t">
        <el-col :span="4" class="label">资源编号</el-col>
        <el-col :span="8">
          <el-input v-model="item.resourceCode"></el-input>
        </el-col>
        <el-col :span="4" class="label">资源名称</el-col>
        <el-col :span="8">
          <el-input v-model="item.resourceName"></el-input>
        </el-col>
      </el-row>
      <el-row class="apply-form">
        <el-col :span="4" class="label">租赁面积（m2）</el-col>
        <el-col :span="8">
          <el-input v-model="item.rentArea"></el-input>
        </el-col>
        <el-col :span="4" class="label">房源性质</el-col>
        <el-col :span="8">
          <el-select v-model="item.housingOwnership">
            <!-- <option value label="请选择"></option> -->
            <option
              v-for="(i,idx) in housingOwnershipList"
              :key="'housingOwnershipList_'+idx"
              :label="i.label"
              :value="i.value"
            ></option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ContractSubManagement } from "../common.js";
export default {
  name: "houseSource",
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
      form: {
        contractSubManagementList: []
      },
      housingOwnershipList: [
        {
          value: "1",
          label: "自有"
        },
        {
          value: "2",
          label: "已售"
        },
        {
          value: "3",
          label: "返租"
        }
      ]
    };
  },
  methods: {
    initForm() {
      let { contractSubManagementList } = this.contract;
      this.form = { contractSubManagementList };
    },
    addContractSubManagement() {
      this.form.contractSubManagementList.push(new ContractSubManagement());
    },
    popContractSubManagement() {
      let { contractSubManagementList } = this.form;
      console.log(contractSubManagementList)
      contractSubManagementList.length > 1 && contractSubManagementList.pop();
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>

<style lang = "scss" scoped>
.house-source {
  margin-bottom: 20px;
  font-size: 16px;
  .mr-b20 {
    margin-bottom: 20px;
  }
}
</style>
