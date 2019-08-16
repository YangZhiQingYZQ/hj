<template>
  <el-row>
    <el-col :span="20">
      <!-- <el-button type="success" size="small" @click="btnEvent('add')">
        <i class="el-icon-plus"></i>
        新增合同
      </el-button>-->
      <el-button
        size="small"
        plain
        type="success"
        @click="btnEvent(item.event,idx)"
        v-for="(item,idx) in btns"
        :key="'btns_'+idx"
      >{{item.label}}</el-button>
    </el-col>
    <el-col :span="4" style="min-width:226px">
      <el-button type="success" size="small">导入模板</el-button>
      <el-button size="small" circle>
        <i class="el-icon-refresh"></i>
      </el-button>
      <el-button size="small" circle>
        <i class="el-icon-menu"></i>
      </el-button>
      <el-button size="small" circle>
        <i class="el-icon-search"></i>
      </el-button>
    </el-col>
  </el-row>
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
    btnEvent(type, idx) {
      let data = {
        type: type,
        idx: idx
      };
      this.$emit("clickBtns", data);
    }
  }
};
</script>

<style>
</style>
