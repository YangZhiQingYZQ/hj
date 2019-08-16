<template>
  <div class="customer">
    <h3 class="title">客户信息</h3>
    <el-row class="apply-form bd-t">
      <el-col class="label" :span="4">客户名称</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
      <el-col class="label" :span="4">联系电话</el-col>
      <el-col :span="8">
        <el-input></el-input>
      </el-col>
    </el-row>
    <template v-if="customerInfo">
      <el-row class="apply-form">
        <el-col class="label" :span="4">证件类型</el-col>
        <el-col :span="8">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-col>
        <el-col class="label" :span="4">证件号码</el-col>
        <el-col :span="8">
          <el-input></el-input>
        </el-col>
      </el-row>

      <el-row class="apply-form">
        <el-col class="label" :span="4">地址</el-col>
        <el-col :span="20">
          <el-input></el-input>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    customerInfo: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang = 'scss' scoped>
.customer {
  margin-bottom: 20px;
  font-size: 16px;
}
</style>
