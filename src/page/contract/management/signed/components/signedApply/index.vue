<template>
  <div>
    <el-dialog :visible.sync="isDialog">
      
    </el-dialog>
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
