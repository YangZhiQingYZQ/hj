<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-14 12:32:04
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-22 00:26:48
 -->
<template>
  <el-dialog title="提示" :visible.sync="isDialog">
    <el-form :inline="true">
      <el-form-item label="合同类型">
        <el-select v-model="selectActive" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户类型">
        <el-select v-model="kh" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="next">下一步</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    selectActive: {
      type: String,
      default: ""
    }
  },
  watch: {
    selectActive() {
      this.$emit("updata:selectActive", this.selectActive);
    }
  },
  data() {
    return {
      kh: "",
      options: [
        {
          label: "固定租金",
          value: "0"
        },
        {
          label: "浮动租金",
          value: "1"
        }
      ],
      isDialog: false
    };
  },
  methods: {
    show() {
      this.isDialog = true;
    },
    next() {
      this.$emit("signedAdd", {
        type: "signedAdd",
        data: ""
      });
      this.hide();
    },
    hide() {
      this.isDialog = false;
    }
  }
};
</script>

<style>
</style>
