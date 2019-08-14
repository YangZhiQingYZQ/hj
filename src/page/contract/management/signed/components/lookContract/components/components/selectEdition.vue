<template>
  <div class="selectEdition">
    <el-select v-model="edition">
      <option value></option>
    </el-select>
    <div class="label">合同版本</div>
  </div>
</template>
<script>
export default {
  name: "selectEdition",
  props: {
    edition: {
      type: String,
      default: ""
    }
  },
  wacth: {
    edition() {
      this.$emit("updata:edition", this.edition);
    }
  }
};
</script>
<style lang="scss">
.selectEdition {
  display: flex;
  flex-direction: row-reverse;
  .label {
    margin-right: 20px;
    font-size: 14px;
    line-height: 40px;
  }
  .fn {
    flex: none;
  }
}
</style>