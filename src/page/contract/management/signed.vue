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
    {{tableOption.page}}
    <avue-crud :data="tableData" :option="tableOption.option" :page="tableOption.page">
      <template v-slot:menuLeft>
        <el-button
          v-for="(item,idx) in tableBtns"
          :key="'table_'+idx"
          :icon="item.icon"
          size="small"
          :type="item.type"
          :plain="item.plain"
        >{{item.label}}</el-button>
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
        menuPostion: "left",
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
      tableData: [
        {
          name: "张三",
          sex: "男",
          date: "1994-02-23 00:00:00"
        },
        {
          name: "李四",
          sex: "女",
          date: "1994-02-23 00:00:00"
        },
        {
          name: "王五",
          sex: "女",
          date: "1994-02-23 00:00:00"
        },
        {
          name: "赵六",
          sex: "男",
          date: "1994-02-23 00:00:00"
        }
      ],
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
        },
        ...(function() {
          let arr = [];
          for (let i = 0; i < 100; i++) {
            arr.push({
              label: "审核",
              plain: false,
              type: "primary"
            });
          }
          return arr;
        })()
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
