<template>
  <el-dialog :visible.sync="isDialog" title="提示">
    <el-select v-model="changeType">
      <option value></option>
    </el-select>
    <el-button class="next">确定</el-button>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      isDialog: false,
      changeType: "1"
    };
  }
};
</script>
<style lang="scss">
.next {
  display: block;
  margin: 0 auto;
  width: 80px;
}
</style>