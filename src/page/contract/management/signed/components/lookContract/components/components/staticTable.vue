<template>
  <el-row>
    <h3 class="title" v-if="title">{{title}}</h3>
    <el-table border :data="tableData">
      <el-table-column
        v-for="(item,idx) in labelData"
        :key="item.prop+idx"
        :label="item.label"
        prop="item.prop"
      ></el-table-column>
    </el-table>
  </el-row>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss">
.title {
  margin-top: 15px;
  font-size: 16px;
  line-height: 2;
}
</style>