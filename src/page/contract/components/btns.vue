<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-28 02:03:06
 -->
<template>
  <div class="btns">
    <el-button
      type="success"
      v-for="item in btns"
      :key="'btns_'+item.type"
      @click="btnClick(item.type)"
    >{{item.label}}</el-button>
  </div>
</template>
<script>
export default {
  props: {
    btns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    btnClick(type) {
      this.$emit("btnClick", type);
    }
  }
};
</script>
<style lang = "scss" scoped>
.btns {
  display: flex;
  flex-direction: row-reverse;
  .el-button {
    margin: 0 10px;
    flex: none;
  }
}
</style>