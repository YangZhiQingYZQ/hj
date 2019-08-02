<template>
  <div class="signed">
    <avue-form ref="form" v-model="searchParams" :option="myoption">
      <template v-slot:buttons>
        <div style="width:180px;margin-left:-72px">
          <el-button @click="seach">搜索</el-button>
          <el-button @click="resetForm">清空</el-button>
        </div>
      </template>
    </avue-form>
    <avue-crud :data="tableData" :option="tableOption.option" :page="tableOption.page">
      <template v-slot:menuRight>
        <el-button
          v-for="(item,idx) in tableBtns"
          :key="'table_'+idx"
          :icon="item.icon"
          size="small"
          :type="item.type"
          :plain="item.plain"
        >{{item.label}}</el-button>
        <el-button circle size="small">
          <i class="el-icon-refresh"></i>
        </el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script>
let _statusList = [
  {
    label: "测试",
    value: "0"
  }
];
import tableConfig from "./signedTableOption";
export default {
  name: "signed",
  data() {
    return {
      searchParams: {},
      myoption: {
        size: "small",
        gutter: 1,
        menuBtn: false,
        menuPostion: "right",
        column: [
          {
            label: "客户名称",
            prop: "_name0",
            span: 4,
            maxlength: 3,
            minlength: 2
          },
          {
            label: "资源编号",
            prop: "_code0",
            span: 4,
            maxlength: 3,
            minlength: 2
          },

          {
            label: "合同编号",
            prop: "_code1",
            span: 4,
            maxlength: 3,
            minlength: 2
          },
          {
            label: "合同状态",
            prop: "_status",
            type: "select",
            dicData: _statusList,
            span: 4,
            mock: {
              type: "0"
            }
          },
          {
            label: "日期范围",
            prop: "_daterange",
            type: "daterange",
            span: 5,
            startPlaceholder: "请选择时间",
            endPlaceholder: "请选择时间"
          },
          {
            label: "",
            prop: "buttons",
            span: 2,
            formslot: true
          }
        ]
      },
      tableData: [],
      tableOption: tableConfig,
      tableBtns: [
        {
          label: "新增合同",
          icon: "el-icon-plus",
          plain: false,
          type: "primary"
        },
        {
          label: "审核",
          icon: "el-icon-plus",
          plain: false,
          type: "primary"
        }
      ]
    };
  },
  methods: {
    seach() {
      console.log(this.searchParams);
    },
    resetForm() {
      this.$refs.form.resetForm();
    }
  }
};
</script>

<style lang = "scss">
.signed {
  .avue-crud__tip {
    display: none;
  }
}
</style>
