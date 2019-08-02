<template>
  <div class="signedTable">
    <el-table border>
      <el-table-column type = "selection"></el-table-column>
      <el-table-column type = "index"></el-table-column>
      <el-table-column
        :label="item.label"
        v-for="(item,idx) in tableList"
        :key="'table_'+idx"
        :prop="item.prop"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableList: [
        {
          label: "合同编号",
          prop: "_code"
        },
        {
          label: "签订类型",
          prop: "_code"
        },
        {
          label: "合同名称",
          prop: "_code"
        },
        {
          label: "合同类型",
          prop: "_code"
        },
        {
          label: "资源编号",
          prop: "_code"
        },
        {
          label: "客户名称",
          prop: "_code"
        },
        {
          label: "联系电话",
          prop: "_code"
        },
        {
          label: "起始时间",
          prop: "_code"
        },
        {
          label: "截止时间",
          prop: "_code"
        },
        {
          label: "签订时间",
          prop: "_code"
        },
        {
          label: "签订人",
          prop: "_code"
        },
        {
          label: "状态",
          prop: "_code"
        },
        {
          label: "变更-交铺-收铺-装修-逾期-违约-终止",
          prop: "_code"
        },
        {
          label: "操作",
          prop: "_code"
        }
      ]
    };
  }
};
</script>

<style>
</style>
