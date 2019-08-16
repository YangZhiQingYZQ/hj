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
<style lang = "scss">
.btns {
  display: flex;
  flex-direction: row-reverse;
  .el-button {
    margin: 0 10px;
    flex: none;
  }
}
</style>