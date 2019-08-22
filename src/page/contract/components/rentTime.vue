<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 02:59:14
 -->
<template>
  <el-form class="rentTime">
    <h3 class="title">租赁时间</h3>
    <el-row class="apply-form bd-t">
      <el-col :span="4" class="label">签约时间</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.signingDate"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4" class="label">收费周期</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-select>
            <option value label="请选择"></option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">租约起始日期</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.contractStartForm"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4" class="label">租约截至日期</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-date-picker v-model="form.contractStartTo" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row class="apply-form">
      <el-col :span="4" class="label">规定交铺日期</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.deliveryDate"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4" class="label">规定开业日期</el-col>
      <el-col :span="8">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.openDay"></el-date-picker>
      </el-col>
    </el-row>
  </el-form>
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
        //$$缺少收费周期属性
        signingDate: "",
        contractStartForm: "",
        contractStartTo: "",
        openDay: "",
        deliveryDate: ""
      }
    };
  },
  methods: {
    initForm() {
      let {
        signingDate,
        contractStartForm,
        contractStartTo,
        openDay,
        deliveryDate
      } = this.contract;
      this.form = {};
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>

<style lang = "scss" scoped>
.rentTime {
  margin-bottom: 20px;
  font-size: 16px;
}
</style>
