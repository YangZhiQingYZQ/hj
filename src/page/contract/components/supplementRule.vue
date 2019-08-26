<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-27 01:27:01
 -->
<template>
  <div class="supplement">
    <h3 class="title">
      <span class="fn">补充条款</span>
      <span class="fn">
        <i class="el-icon-circle-plus" @click = "addItem"></i>
        <i class="el-icon-remove" @click = "popItem"></i>
      </span>
    </h3>
    <el-row>
      <el-row class="table">
        <el-col :span="4" class="label bd-l bd-t">序号</el-col>
        <el-col :span="20" class="label bd-t">条款</el-col>
      </el-row>
      <el-row class="table" v-for="(item,idx) in form.clauseslist" :key="'clauseslist_'+idx">
        <el-col :span="4" class="label bd-l">{{idx+1}}</el-col>
        <el-col :span="20">
          <el-select v-model ="item.label">
            <option value="">请选择</option>
          </el-select>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
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
      form: { clauseslist: [{ label: "" }] }
    };
  },
  methods: {
    addItem(){
      this.form.clauseslist.push({label:""})
    },
    popItem(){
      this.form.clauseslist.length > 1 && this.form.clauseslist.pop()
    },
    initForm() {
      let { clauses } = this.contract;
      this.form.clauses = clauses;
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>
<style lang="scss">
.supplement {
  margin-bottom: 20px;
  font-size: 16px;
  .mr-b20 {
    margin-bottom: 20px;
  }
  .el-select {
    width: 100%;
  }
}
.table {
  display: flex;
  .el-col {
    display: flex;
    flex: auto;
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    &.bd-n {
      border: none;
    }
  }
  .label {
    line-height: 39px;
    flex: auto;
    padding-left:10px;
    &.bd-l {
      border-left: 1px solid #bbb;
    }
  }
  .bd-t {
    border-top: 1px solid #bbb;
  }
  .el-input__inner {
    flex: auto;
    border: none;
    border-radius: 0;
  }
}
</style>