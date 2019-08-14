<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="签订合同" name="signed" :lazy="true">
      <signed></signed>
    </el-tab-pane>
    <el-tab-pane label="合同变更" name="change" :lazy="true">合同变更</el-tab-pane>
    <el-tab-pane label="合同违约" name="default" :lazy="true">合同违约</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  components: {
    signed: () => import("./signed/index.vue")
  },
  data() {
    return {
      activeName: "signed"
    };
  },
  created() {},
  methods: {}
};
</script>