<template>
  <div class="additional-clauses">
    <select-edition :edition.sync="edition"></select-edition>
    <div class="centont">
      <h3 class="title">附加条款</h3>
      <textarea name id cols="30" rows="10" class="area"></textarea>
    </div>
    <change-record></change-record>
  </div>
</template>
<script>
export default {
  components: {
    selectEdition: () => import("../components/selectEdition"),
    changeRecord: () => import("../components/changeRecord")
  },
  data() {
    return {
      edition: "1"
    };
  }
};
</script>
<style lang="scss">
.additional-clauses {
  .title {
    font-size: 16px;
    height: 40px;
  }
  .area {
    box-sizing: border-box;
    width: 100%;
  }
}
</style>