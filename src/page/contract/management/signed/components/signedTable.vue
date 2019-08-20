<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-02 20:48:44
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-21 01:55:07
 -->
<template>
  <div class="signedTable">
    <el-table border :data="_tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index"></el-table-column>
      <el-table-column
        :label="item.label"
        v-for="(item,idx) in tableList"
        :key="'table_'+idx"
        :prop="item.prop"
      ></el-table-column>
      <el-table-column label="变更-交铺-收铺-装修-逾期-违约-终止">
        <template slot-scope="scope">{{scope.row.status}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <div>dkf;kl;ds</div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getText } from "../../../common.js";
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    _tableData() {
      return this.tableData.map(item => {
        item.contractTypeText = getText("contractType", item.contractType);
        item.contractSigningTypeText = getText(
          "contractSigningType",
          item.contractSigningType
        );
        return item;
      });
    }
  },
  data() {
    return {
      tableList: [
        {
          label: "合同编号",
          prop: "contractCode"
        },
        {
          label: "签订类型",
          prop: "contractSigningTypeText"
        },
        {
          label: "合同名称",
          prop: "_code"
        },
        {
          label: "合同类型",
          prop: "contractTypeText"
        },
        {
          label: "资源编号",
          prop: "resourceCode"
        },
        {
          label: "客户名称",
          prop: "customerName"
        },
        {
          label: "联系电话",
          prop: "phoneNum"
        },
        {
          label: "起始时间",
          prop: "contractStartForm"
        },
        {
          label: "截止时间",
          prop: "contractStartTo"
        },
        {
          label: "签订时间",
          prop: "signingDate"
        },
        {
          label: "签订人",
          prop: "employeeName"
        },
        {
          label: "状态",
          prop: "status"
        }
      ]
    };
  }
};
</script>

<style>
</style>
