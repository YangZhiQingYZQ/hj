<template>
  <div class="signedTable">
    <el-table border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index"></el-table-column>
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
          label: "客户名称",
          prop: "_code"
        },
        {
          label: "联系电话",
          prop: "_code"
        },
        {
          label: "变更类型",
          prop: "_code"
        },
        {
          label: "生效时间",
          prop: "_code"
        },
        {
          label: "创建人",
          prop: "_code"
        },
        {
          label: "创建时间",
          prop: "_code"
        },
        {
          label: "状态",
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
