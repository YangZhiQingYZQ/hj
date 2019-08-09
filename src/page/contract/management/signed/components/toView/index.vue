<template>
  <el-dialog :visible.sync="isDialog">dfsfds</el-dialog>
</template>

<script>
import { dialogFn } from "../../../../common.js";
export default {
  mixins: [dialogFn],
  data() {
    return {
      isDialog: true
    };
  },
  methods() {}
};
</script>

<style lang = "scss" scoped>
</style>
