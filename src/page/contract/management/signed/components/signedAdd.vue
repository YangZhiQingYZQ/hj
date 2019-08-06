<template>
  <el-dialog title="提示" :visible.sync="addLialog">
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
      this.$emit("update:selectActive", this.selectActive);
    }
  },
  data() {
    return {
      kh: "",
      options: [
        {
          label: "固定租金",
          value: "flxed"
        },
        {
          label: "浮动租金",
          value: "float"
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
    },
    next() {
      this.$emit("signedAdd", {
        type: "signedAdd",
        data: ""
      });
      this.hide();
    },
    hide() {
      this.addLialog = false;
    }
  }
};
</script>

<style>
</style>
