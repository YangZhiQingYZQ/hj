const column = [{
    label: "合同编号",
    prop: "_code0"
  },
  {
    label: "签订类型",
    prop: "_code0"
  },
  {
    label: "合同名称",
    prop: "_code0"
  },
  {
    label: "合同类型",
    prop: "_code0"
  },
  {
    label: "资源编号",
    prop: "_code0"
  },
  {
    label: "客户名称",
    prop: "_code0"
  },
  {
    label: "联系电话",
    prop: "_code0"
  },
  {
    label: "起始时间",
    prop: "_code0"
  },
  {
    label: "截止时间",
    prop: "_code0"
  },
  {
    label: "签订时间",
    prop: "_code0"
  },
  {
    label: "签订人",
    prop: "_code0"
  },
  {
    label: "状态",
    prop: "_code0"
  },
  {
    label: "合同编号",
    prop: "_code0"
  },
  {
    label: "变更-交铺-收铺-装修-逾期-违约-终止",
    prop: "_code0",
    width:"230"
  },
  {
    label: "操作",
    prop: "_code0"
  },
]
const option = {
  addBtn: false,
  align: "center",
  border: true,
  calcHeight:"100",
  pageSizes: [10, 20],
  // header:false,
  index: true,
  selectClearBtn: false,
  selection: true,
  column: column
}
const tableConfig = {
  option: option,
  page: {
    pageSize: 20,
    total: 1000
  },
}
export default tableConfig;
