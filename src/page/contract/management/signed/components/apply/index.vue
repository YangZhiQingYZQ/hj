<template>
  <div>
    <el-dialog title="外层 Dialog" :visible.sync="isDialog"></el-dialog>
  </div>
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
</style>
