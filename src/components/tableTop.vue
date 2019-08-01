<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row class="form-row">
      <el-col :span="4" class="label">申请人</el-col>
      <el-col :span="4">
        <el-input v-model="form.name"></el-input>
      </el-col>
      <el-col :span="4" class="label">申请部门</el-col>
      <el-col :span="4">
        <el-input v-model="form.name"></el-input>
      </el-col>
      <el-col :span="4" class="label">申请日期</el-col>
      <el-col :span="4" class="label">
        <i class="el-input__icon el-icon-date" style = "float:right"></i>
      </el-col>
    </el-row>
    <el-row class="form-row">
      <el-col :span="4" class="label">关联流程</el-col>
      <el-col :span="20">
        <el-input v-model="form.name"></el-input>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      form: {
        name: ""
      }
    };
  }
};
</script>

<style>
</style>
