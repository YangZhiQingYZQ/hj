<template>
  <div class="signed">
    <signed-form></signed-form>
    <signed-btns :btns="btns" class="btns" @clickBtns="selectEvent"></signed-btns>
    <signed-table></signed-table>
    <signed-add ref="signedAdd"></signed-add>
    <apply></apply>
  </div>
</template>

<script>
import signedForm from "./components/signedForm";
import signedBtns from "./components/signedBtns";
import signedTable from "./components/signedTable";
import signedAdd from "./components/signedAdd";
import apply from "./components/apply";
export default {
  data() {
    return {
      btns: [
        {
          label: "审核",
          event: ""
        },
        {
          label: "提交审核",
          event: ""
        },
        {
          label: "交铺",
          event: ""
        },
        {
          label: "收铺",
          event: ""
        },
        {
          label: "装修",
          event: ""
        },
        {
          label: "续签",
          event: ""
        },
        {
          label: "签署",
          event: ""
        },
        {
          label: "违约",
          event: ""
        },
        {
          label: "变更",
          event: ""
        },
        {
          label: "终止结算",
          event: ""
        },
        {
          label: "录入交易量",
          event: ""
        },
        {
          label: "查看审批进度",
          event: ""
        }
      ]
    };
  },
  components: { signedForm, signedBtns, signedTable, signedAdd, apply },
  methods: {
    add() {
      this.$store.dispatch('changeIsDialog','SIGED_ADD')
    },
    selectEvent(data) {
      this[data.type]();
    }
  }
};
</script>

<style>
.btns {
  margin-bottom: 20px;
}
</style>
