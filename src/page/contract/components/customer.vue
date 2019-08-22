<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:20:31
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 02:45:45
 -->
<template>
  <el-form class="customer">
    <h3 class="title">客户信息</h3>
    <el-row class="apply-form bd-t">
      <el-col class="label" :span="4">客户名称</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-input v-model="form.customerName"></el-input>
        </el-form-item>
      </el-col>
      <el-col class="label" :span="4">联系电话</el-col>
      <el-col :span="8">
        <el-form-item>
          <el-input v-model="form.phoneNum"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <template v-if="customerInfo">
      <el-row class="apply-form">
        <el-col class="label" :span="4">证件类型</el-col>
        <el-col :span="8">
          <el-select v-model="form.documentType">
            <el-option value label = "请选择"></el-option>
          </el-select>
        </el-col>
        <el-col class="label" :span="4">证件号码</el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="form.documentNum"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row class="apply-form">
        <el-col class="label" :span="4">地址</el-col>
        <el-col :span="20">
          <el-form-item>
            <el-input v-model="form.address2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </template>
  </el-form>
</template>

<script>
export default {
  props: {
    customerInfo: {
      type: Boolean,
      default: true
    },
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
        employeeName: "",
        phoneNum: "",
        documentType: "",
        documentNum: "",
        address2: ""
      }
    };
  },
  methods: {
    initForm() {
      let {
        employeeName,
        phoneNum,
        documentType,
        documentNum,
        address2
      } = this.contract;
      this.form = {
        employeeName,
        phoneNum,
        documentType,
        documentNum,
        address2
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

<style lang = 'scss' scoped>
.customer {
  margin-bottom: 20px;
  font-size: 16px;
}
</style>
