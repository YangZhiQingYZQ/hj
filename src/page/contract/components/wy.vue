<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 01:08:33
 -->
<template>
  <el-form class="wy">
    <el-col :span="4" class="label">物业类型</el-col>
    <el-col :span="4">
      <el-form-item>
        <el-select>
          <option value></option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="4" class="label">业态</el-col>
    <el-col :span="4">
      <el-form-item>
        <el-select>
          <option value></option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="4" class="label">合同模板</el-col>
    <el-col :span="4">
      <el-form-item>
        <el-select>
          <option value></option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
export default {
  name: "wy",
  props: {
    contract: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    initForm() {
      let {} = this.contract;
      this.form = {};
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>

<style lang = "scss" scoped>
.wy {
  margin-bottom: 20px;
  overflow: hidden;
  .label {
    padding-left: 10px;
    line-height: 40px;
  }
}
</style>
