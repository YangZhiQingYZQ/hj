<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="资源1" name="resources_0">
      <el-row>
        <el-col :span="8">
          <div class="label">资源编号</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">资源名称</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">租赁面积</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">资源类型</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">业&nbsp;&nbsp;态</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">资源性质</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">规定交铺日期</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">规定开业日期</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">收铺日期</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">实际交铺日期</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">实际开业日期</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">终止日期</div>
          <div class="val"></div>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "resources_0"
    };
  }
};
</script>
<style lang="scss">
</style>