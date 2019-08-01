<template>
  <div class="tableDome">
    <table-top></table-top>
    <h3 class="title">客户信息</h3>
    <el-form ref="form" :model="form">
      <el-row class="form-row">
        <el-col :span="4" class="label">客户名称</el-col>
        <el-col :span="8">
          <el-input></el-input>
        </el-col>
        <el-col :span="4" class="label">联系电话</el-col>
        <el-col :span="8">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row class="form-row">
        <el-col :span="4" class="label">证件类型</el-col>
        <el-col :span="8">
          <el-input></el-input>
        </el-col>
        <el-col :span="4" class="label">证件号码</el-col>
        <el-col :span="8">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row class="form-row">
        <el-col :span="4" class="label">地址</el-col>
        <el-col :span="20">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row class="from-row">
        <el-col :span="2">物业类型</el-col>
        <el-col :span="6">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </div>
</template>


<script>
import tableTop from "./tableTop";
export default {
  data() {
    return {
      form: {},
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ]
    };
  },
  components: { tableTop },
  methods: {}
};
</script>
<style lang = "scss">
.form-row {
  border-bottom: 1px solid black;
  border-right: none;
  border-left: 1px solid black;
  &:nth-child(1) {
    border-top: 1px solid black;
  }
  .el-form-item__label,
  .label {
    line-height: 40px;
    border-right: 1px solid black;
  }
  .el-input__inner {
    border: none;
    border-right: 1px solid black;
    border-radius: 0;
  }
  .el-input__inner:focus {
    border-color: black;
  }
  .el-select .el-input.is-focus .el-input__inner {
    border-color: black;
  }
  .el-select .el-input__inner:focus {
    border-color: black;
  }
}

.title {
  text-align: left;
}
.label {
  text-align: left;
}
</style>
