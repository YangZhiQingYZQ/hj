<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-27 01:45:37
 -->
<template>
  <div class="additional-exlain">
    <h3 class="title">附加说明</h3>
    <textarea name id cols="30" rows="10" class="area" v-model="form.remark"></textarea>
  </div>
</template>
<script>
export default {
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
      form: {remark:""}
    };
  },
  methods: {
    initForm() {
      let {remark} = this.contract;
      this.form = {remark};
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>
<style lang="scss">
.area {
  width: 100%;
}
</style>