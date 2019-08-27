<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-14 12:33:27
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-28 01:22:35
 -->
<template>
  <div class="signed">
    <signed-form>
      <template v-slot="soltData">
        <signed-btns :btns="btns" class="btns" @clickBtns="selectEvent"></signed-btns>
        <signed-table :tableData="soltData.tableData"></signed-table>
      </template>
    </signed-form>
    <signed-add :selectActive.sync="selectActive" ref="signedAdd" @signedAdd="selectEvent" v-on:updata:selectActive="changeSelectActive"></signed-add>
    <signed-apply ref="signedApply" :selectActive.sync="selectActive" v-on:updata:selectActive="changeSelectActive"></signed-apply>
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
      selectActive: "0"
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
    changeSelectActive(val){
      this.selectActive = val;
    },
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

<style lang ="scss">
.apply-info , .apply-form ,.wy {
  .el-form-item {
    margin: 0;
  }
  .el-form-item__content {
    line-height: 0;
  }
  .el-select .el-input.is-focus .el-input__inner,.el-select .el-input__inner:focus{
    border-color:#bbb;
  }
}
.btns {
  margin-bottom: 20px;
}
</style>
