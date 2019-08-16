<template>
  <div class="houseSourceThen">
    <h3 class="change-title">{{title}}</h3>
    <h4 class="table-title">{{title1}}</h4>
    <el-row class="apply-form bd-t">
      <el-col class="label" :span="6">资源编号</el-col>
      <el-col class="val" :span="6">
        <el-input></el-input>
      </el-col>
      <el-col class="label" :span="6">资源名称</el-col>
      <el-col class="val" :span="6">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col class="label" :span="6">租赁面积(m2)</el-col>
      <el-col class="val" :span="6">
        <el-input></el-input>
      </el-col>
      <el-col class="label" :span="6">业态</el-col>
      <el-col class="val" :span="6">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col class="label" :span="6">物业类型</el-col>
      <el-col class="val" :span="6">
        <el-input></el-input>
      </el-col>
      <el-col class="label" :span="6">房源性质</el-col>
      <el-col class="val" :span="6">
        <el-input></el-input>
      </el-col>
    </el-row>
    <h4 class="table-title">{{title2}}</h4>
    <template v-if="tableInput">
      <el-table border>
        <el-table-column lable="政策价格"></el-table-column>
        <el-table-column lable="实际签约价格"></el-table-column>
        <el-table-column lable="折扣"></el-table-column>
        <el-table-column lable="说明"></el-table-column>
      </el-table>
    </template>
    <template v-else>
      <el-table border>
        <el-tabel-column label="费项名称"></el-tabel-column>
        <el-tabel-column label="政策价格"></el-tabel-column>
        <el-tabel-column label="实际签约价"></el-tabel-column>
        <el-tabel-column label="折扣"></el-tabel-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    title1: {
      type: String,
      default: ""
    },
    title2: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.table-title {
  height: 40px;
  line-height: 40px;
}
</style>