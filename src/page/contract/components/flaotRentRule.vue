<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-28 01:40:14
 -->
<template>
  <div class="float-rent-rule">
    <h3 class="title">浮动租金指标规定</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">考核方式</el-col>
      <el-col :span="8">
        <el-select v-model=" form.measurementMethod">
          <option value></option>
        </el-select>
      </el-col>
      <el-col :span="3" class="label">保底租金单价</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="label">浮动租金单价</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row class="apply-form bd-t mr-b-20">
      <el-col :span="4" class="label">考核指标</el-col>
      <el-col :span="8">
        <el-select v-model="form.assessmentIndicators">
          <option value></option>
        </el-select>
      </el-col>
      <el-col :span="4" class="label">考核周期（月）</el-col>
      <el-col :span="8">
        <el-select v-model="form.examineCycle">
          <option value></option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-row class="table">
        <el-col :span="6" class="label bd-l bd-t">考核时间起</el-col>
        <el-col :span="6" class="label bd-t">考核时间止</el-col>
        <el-col :span="6" class="label bd-t">指标量</el-col>
        <el-col :span="6" class="label bd-t">单位</el-col>
      </el-row>
      <el-row
        class="table"
        v-for="(item,idx) in form.transactionVolumeList"
        :key="'transactionVolumeList_'+idx"
      >
        <el-col :span="6" class="label bd-t">{{item.measureStartForm}}</el-col>
        <el-col :span="6" class="label bd-t">{{item.measureStartTo}}</el-col>
        <el-col :span="6" class="label bd-t">
          <el-input v-model="item.transactionVolume2" placeholder="请输入指标量"></el-input>
        </el-col>
        <el-col :span="6" class="label bd-t">
          <el-select>
            <option value>请选择单位</option>
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
      form: {
        measurementMethod: "",
        assessmentIndicators: "",
        examineCycle: "",
        transactionVolumeList: []
      }
    };
  },
  methods: {
    initForm() {
      let {
        measurementMethod,
        assessmentIndicators,
        examineCycle,
        transactionVolumeList
      } = this.contract;
      this.form = {
        measurementMethod,
        assessmentIndicators,
        examineCycle,
        transactionVolumeList
      };
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
.mr-b-20 {
}
</style>