<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-07 01:32:14
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-22 00:04:28
 -->
<template>
  <div class="btns">
    <el-button type="success">保存</el-button>
    <el-button type="success">提交审核</el-button>
    <el-button type="success">合同预览</el-button>
  </div>
</template>
<script>
export default {};
</script>
<style lang = "scss" scoped>
.btns {
  display: flex;
  flex-direction: row-reverse;
  .el-button {
    margin: 0 10px;
    flex: none;
  }
}
</style>