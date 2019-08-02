<template>
  <el-dialog title="提示" :visible.sync="isDialog">
    <el-form :inline="true">
      <el-form-item label="合同类型">
        <el-select v-model="ht" placeholder="请选择">
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
        <el-button>下一步</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      ht: "",
      kh: "",
      options: [
        {
          label: "固定租金",
          value: "_code"
        },
        {
          label: "浮动租金",
          value: "_code"
        }
      ],
      addLialog: false
    };
  },
  computed: {
    isDialog() {
      return this.$store.getters.isDialog == "SIGED_ADD";
    }
  },
  methods: {
    show() {
      this.addLialog = true;
    }
  }
};
</script>

<style>
</style>
