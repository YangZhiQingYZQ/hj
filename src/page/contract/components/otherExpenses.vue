<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-27 01:00:19
 -->
<template>
  <div class="OtherExpenses">
    <template v-if="other">
      <h3 class="title">
        <span class="fn">其他费用</span>
        <span class="fn">
          <icon class="el-icon-circle-plus" @click="addItem"></icon>
          <icon class="el-icon-remove" @click="popItem"></icon>
        </span>
      </h3>
      <el-row border class="mr-b-20" v-for="(item,idx) in list" :key="'list_'+idx">
        <el-row class="table">
          <el-col class="label bd-l bd-t" :span="6">费项名称</el-col>
          <el-col class="label bd-t" :span="6">费项类型</el-col>
          <el-col class="label bd-t" :span="6">费用单价</el-col>
          <el-col class="label bd-t" :span="6">计量单位</el-col>
        </el-row>
        <el-row class="table">
          <el-col class="label bd-l" :span="6">物管费</el-col>
          <el-col class="label" :span="6">一次性</el-col>
          <el-col class="label" :span="6">
            <el-input></el-input>
          </el-col>
          <el-col class="label" :span="6">元/m/月</el-col>
        </el-row>
      </el-row>
    </template>

    <el-row class="table">
      <el-col :span="3" class="label bd-l bd-t">租金合同金额（元）</el-col>
      <el-col :span="3" class="bd-t">{{from.rentContractAmount}}</el-col>
      <el-col :span="3" class="label bd-t">物管费合同金额（元）</el-col>
      <el-col :span="3" class="bd-t">{{from.contractPropertyFee}}</el-col>
      <el-col :span="3" class="label bd-t">周期合计合同金额（元）</el-col>
      <el-col :span="3" class="bd-t">{{from.periodicTotalContractAmount}}</el-col>
      <el-col :span="3" class="bd-n">
        <div class="label bd-t bd-l mr-l-20 bd-r bd-b">政策押金（元）</div>
      </el-col>
      <el-col :span="3" class="bd-t">{{from.policyDeposit}}</el-col>
    </el-row>
    <el-row class="table">
      <el-col :span="3" class="label bd-l">租金政策金额（元）</el-col>
      <el-col :span="3">{{from.rentPolicyAmount}}</el-col>
      <el-col :span="3" class="label">物管费政策金额（元）</el-col>
      <el-col :span="3">{{from.policyPropertyFee}}</el-col>
      <el-col :span="3" class="label">周期合计政策金额（元）</el-col>
      <el-col :span="3">{{from.periodicTotalPolicyAmount}}</el-col>
      <el-col :span="3" class="bd-n">
        <div class="label bd-l mr-l-20 bd-r bd-b">合同押金（元）</div>
      </el-col>
      <el-col :span="3">{{from.contractDeposit}}</el-col>
    </el-row>
    <el-row class="table">
      <el-col :span="3" class="label bd-l"></el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3" class="label"></el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="label">折扣%</el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
      <el-col :span="3" class="bd-n">
        <div class="label bd-l mr-l-20 bd-r bd-b">折扣%</div>
      </el-col>
      <el-col :span="3">
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    other: {
      type: Boolean,
      default: true
    },
    contract: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      from: {},
      list: ["test"]
    };
  },
  methods: {
    initForm() {
      let {
        rentContractAmount,
        policyPropertyFee,
        periodicTotalContractAmount,
        policyDeposit,
        rentPolicyAmount,
        contractPropertyFee,
        periodicTotalPolicyAmount,
        contractDeposit
      } = this.contract;
      this.from = {
        rentContractAmount,
        policyPropertyFee,
        periodicTotalContractAmount,
        policyDeposit,
        rentPolicyAmount,
        contractPropertyFee,
        periodicTotalPolicyAmount,
        contractDeposit
      };
    },
    addItem(){
      this.list.push("test")
    },
    popItem(){
      this.list.length >1 && this.list.pop()
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>

<style lang = "scss" scopde>
.title {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: 2;
}
.fn {
  flex: none;
}
.mr-l-20 {
  margin-left: 20px;
}
.bd-t {
  border-top: 1px solid #bbb;
}
.bd-r {
  border-right: 1px solid #bbb;
}

.bd-b {
  border-bottom: 1px solid #bbb;
}
.mr-b-20 {
  margin-bottom: 20px;
}
.table {
  display: flex;
  .el-col {
    display: flex;
    flex: auto;
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    &.bd-n {
      border: none;
    }
  }
  .label {
    line-height: 39px;
    flex: auto;

    &.bd-l {
      border-left: 1px solid #bbb;
    }
  }
  .el-input__inner {
    flex: auto;
    border: none;
    border-radius: 0;
  }
}
</style>
