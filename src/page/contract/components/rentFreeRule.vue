<!--
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 14:24:35
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 02:58:18
 -->
<template>
  <el-form class="rent-free-rule">
    <h3 class="title">
      <span class="fn">免租期规定</span>
      <span class="fn">
        <i class="el-icon-circle-plus" @click="addRentFreeList"></i>
        <i class="el-icon-remove" @click="popRentFreeList"></i>
      </span>
    </h3>
    <el-table border :data="form.rentFreeList">
      <el-table-column label="起始日期">
        <template slot-scope="scope">
          <el-form-item>
            <el-date-picker v-model="scope.row.freeStartTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="截至日期">
        <template slot-scope="scope">
          <el-form-item>
            <el-date-picker v-model="scope.row.freeEndTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="免租月数">
        <template  slot-scope="scope">
          <el-form-item>
            <el-input v-model="scope.row.rentFreeMonth"></el-input>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="免租天数">
        <template  slot-scope="scope">
          <el-form-item>
            <el-input v-model="scope.row.rentFreeDays"></el-input>
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
import { RentFree } from "../common.js";
export default {
  name: "rentFreeRule",
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
      form: {
        rentFreeList: []
      }
    };
  },
  methods: {
    addRentFreeList() {
      this.form.rentFreeList.push(new RentFree());
    },
    popRentFreeList() {
      this.form.rentFreeList.length > 1 && this.form.rentFreeList.pop();
    },
    initForm() {
      let { rentFreeList } = this.contract;
      this.form = { rentFreeList };
    },
    // 验证逻辑
    isVerfiy() {}
  },
  created() {
    this.initForm();
  }
};
</script>

<style lang = "scss">
.rent-free-rule {
  margin-top: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    line-height: 2;
  }
  .fn {
    flex: none;
  }
}
</style>
