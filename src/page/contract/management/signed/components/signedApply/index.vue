<template>
  <div>
    <el-dialog :visible.sync="isDialog" width="80%">
      <customer></customer>
      <wy></wy>
      <house-source></house-source>
      <rent-time></rent-time>
      <rent-rules></rent-rules>
    </el-dialog>
  </div>
</template>

<script>
import customer from "./components/customer";
import wy from "./components/wy";
import rentTime from "./components/rentTime";
import houseSource from "./components/houseSource";
import rentRules from "./components/rentRules";
export default {
  components: { customer, wy, houseSource, rentTime,rentRules },
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
