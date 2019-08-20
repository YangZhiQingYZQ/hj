<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-14 12:33:27
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-21 01:02:45
 -->
<template>
  <div class="signed">
    <signed-form>
      <template v-slot="soltData">
        <signed-btns :btns="btns" class="btns" @clickBtns="selectEvent"></signed-btns>
        <signed-table :tableData="soltData.tableData"></signed-table>
      </template>
    </signed-form>

    <signed-add ref="signedAdd" @signedAdd="selectEvent" :selectActive.sync="selectActive"></signed-add>
    <signed-apply ref="signedApply" :selectActive.sync="selectActive"></signed-apply>
    <look-contract></look-contract>
  </div>
</template>

<script>
import signedForm from "./components/signedForm";
import signedBtns from "./components/signedBtns";
import signedTable from "./components/signedTable";
import signedAdd from "./components/signedAdd";
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
      ],
      selectActive: "flxed"
    };
  },
  components: {
    signedForm,
    signedBtns,
    signedTable,
    signedAdd,
    signedApply: () => import("./components/signedApply"),
    lookContract: () => import("./components/lookContract/index.vue")
  },
  methods: {
    add() {
      this.$refs.signedAdd.show();
    },
    signedAdd() {
      this.$refs.signedApply.show();
    },
    selectEvent(data) {
      this[data.type](data.data);
    }
  }
};
</script>

<style>
.btns {
  margin-bottom: 20px;
}
</style>
