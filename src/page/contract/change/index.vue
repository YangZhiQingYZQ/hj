<template>
  <div>
    <change-form></change-form>
    <change-btns :btns="btns" class="btns" @clickBtns="selectEvent"></change-btns>
    <change-table></change-table>
    <select-change-type></select-change-type>
    <area-adjustment></area-adjustment>
    <change-shop></change-shop>
    <change-rent-time></change-rent-time>
    <change-money></change-money>
    <change-agreement></change-agreement>
  </div>
</template>
<script>
export default {
  components: {
    changeForm: () => import("./componetns/changeForm"),
    changeBtns: () => import("./componetns/changeBtns"),
    changeTable: () => import("./componetns/changeTable"),
    selectChangeType: () => import("./componetns/selectChangeType"),
    areaAdjustment: () => import("./componetns/areaAdjustment"),
    changeShop: () => import("./componetns/changeShop"),
    changeRentTime: () => import("./componetns/changeRentTime"),
    changeMoney: () => import("./componetns/changeMoney"),
    changeAgreement:()=>import("./componetns/changeAgreement")
  },
  data() {
    return {
      btns: [
        {
          label: "审核",
          event: ""
        },
        {
          label: "审批",
          event: ""
        },
        {
          label: "签署",
          event: ""
        },
        {
          label: "查看审批进度",
          event: ""
        }
      ]
    };
  },
  methods: {
    selectEvent(data) {
      this[data.type](data.data);
    }
  }
};
</script>
<style lang="scss">
</style>