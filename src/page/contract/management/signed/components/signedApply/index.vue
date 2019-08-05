<template>
  <el-dialog class="apply" :visible.sync="isDialog">
    <div class="apply-content">
      <h3 class="title">租赁申请（固定租金）</h3>
      <!-- 申请人信息 -->
      <el-row class="apply-form">
        <el-col :span="4" class="label">申请人</el-col>
        <el-col :span="4">
          <el-input></el-input>
        </el-col>
        <el-col :span="4" class="label">申请部门</el-col>
        <el-col :span="4">
          <el-input></el-input>
        </el-col>
        <el-col :span="4" class="label">申请日期</el-col>
        <el-col :span="4">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="apply-form">
        <el-col :span="4" class="label">关联流程</el-col>
        <el-col :span="20">
          <el-input></el-input>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "apply",
  data() {
    return {
      isDialog: false
    };
  },
  methods: {
    show() {
      this.isDialog = true;
    }
  }
};
</script>

<style>
.apply-form {
  border-right: 1px solid #bbb;
}
.apply-form:nth-child(2) {
  border-top: 1px solid #bbb;
}
.apply-form:last-child {
  border-bottom: none;
}
.label {
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.apply-form .el-input__inner {
  border: none;
}
.apply-form .el-col-4,
.el-col-20 {
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
}
</style>
