/*
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-14 12:32:04
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-23 02:57:05
 */
export const dialogFn = {
  methods: {
    show() {
      this.isDialog = true;
    },
    hide() {
      this.isDialog = false
    }
  }
}
const baseCreatContractManagement = function () {
  this.acceptanceShopDate = ""; //收铺日期
  this.address2 = ""; //联系地址
  this.applyData = ""; //申请日期
  this.approvalld = ""; //申请审批ID
  this.assessmentIndicators = ""; //考核指标
  this.attachment01 = ""; //附件1
  this.attachment02 = ""; //附件2
  this.attachment03 = ""; //附件3
  this.attachment04 = ""; //附件4
  this.attachment05 = ""; //附件5
  this.clauses = ""; //补充条款
  this.contractCode = ""; //合同编码
  this.contractDeposit = ""; //合同押金
  this.contractPropertyFee = ""; //物管费合同金额
  this.contractSigningType = ""; //合同签订类型 新签/续签/变更
  this.contractStartForm = ""; //合同起始日期
  this.contractStartTo = ""; //合同截止日期
  this.contractSubManagementList = []; //子合同对象数组
  this.contractTerminationType = ""; //终止类型
  this.contractType = ""; //合同类型 1 固定合同、2 浮动合同
  this.contractVersion = ""; //变更版本号
  this.createTime = ""; //创建时间
  this.createUser = ""; //创建人
  this.customerId = ""; //客户编号
  this.customerName = ""; //客户名称
  this.dailyOpeningHours = ""; //每日营业时长
  this.deliveryDate = ""; //交铺日期
  this.documentNum = ""; //证件号码
  this.documentType = ""; //证件类型
  this.emergency = ""; //0.一般,1.紧急
  this.employeeName = ""; //申请人
  this.examineCycle = ""; //考核周期
  this.examineTime = ""; //审批时间
  this.examineUser = ""; //审批人
  this.feeListList = []; //合同费项 租金、物管费
  this.firstPaymentNtermRent = ""; //首次缴纳N期租金
  this.firstRentDate = ""; //首次交租日期
  this.id = ""; //主键id
  this.isDeleted = ""; //是否已删除
  this.measurementMethod = ""; //考核方式
  this.openDay = ""; //开业日
  this.organizationName = ""; //申请部门
  this.periodicTotalContractAmount = ""; //周期合计合同金额
  this.periodicTotalPolicyAmount = ""; //周期合计政策金额
  this.phoneNum = ""; //联系电话
  this.policyDeposit = ""; //政策押金
  this.policyPropertyFee = ""; //物管费政策金额
  this.projectId = ""; //项目
  this.realDeliveryDate = ""; //实际交铺日期
  this.remark = ""; //附加说明
  this.rentContractAmount = ""; //租金合同金额
  this.rentFreeList = []; //出租合同对象数组
  this.rentPayingCycle = ""; //1 月/2 季/3 年/4 一次性
  this.rentPolicyAmount = ""; //租金政策金额
  this.resourceCode = ""; //资源编号
  this.signingDate = ""; //签约日期
  this.sourceContractId = ""; //原始合同ID
  this.startTime = ""; //起始时间
  this.status = ""; //业务状态
  this.title = ""; //数据字典
  this.updateTime = ""; //更新时间
  this.updateUser = ""; //更新人
  this.useApprovedContract = ""; //0.是,1.否
}
// 合同房源资源对象
export const ContractSubManagement = function () {
  this.contractId = ""; //合同编码
  this.createTime = ""; //创建时间
  this.createUser = ""; //创建人
  this.format = ""; //业态编码
  this.housingOwnership = ""; //房源性质 1自有/2已售/3返祖
  this.id = ""; //主键id
  this.isDeleted = ""; //是否已删除
  this.rentArea = ""; //租赁面积
  this.resourceCode = ""; //资源编码
  this.resourceId = ""; //租赁ID
  this.resourceName = ""; //资源名称
  this.resourceType = ""; //资源类型 棚、铺、房间（专用于综合配套的房间）、摊位、广告牌、仓库、冷库
  this.status = ""; //业务状态
  this.subContractCode = ""; //子合同编码
  this.updateTime = ""; //更新时间
  this.updateUser = ""; //更新人
}
// 免租规定对象
export const RentFree = function () {
  this.checkTime = ""; //审核时间
  this.checkUser = ""; //审核人
  this.contractId = ""; //ID
  this.createTime = ""; //创建时间
  this.createUser = ""; //创建人
  this.freeEndTime = ""; //免租期截止时间
  this.freeStartTime = ""; //免租期起始时间
  this.id = ""; //主键id
  this.isDeleted = ""; //是否已删除
  this.rentFreeDays = ""; //免租天数
  this.rentFreeMonth = ""; //免租月数
  this.status = ""; //业务状态
  this.updateTime = ""; //更新时间
  this.updateUser = ""; //更新人
}
// 合同接口请求对象
export const ContractManagement = function () {
  baseCreatContractManagement.call(this);
  this.current = ""; //当前页
  this.periodPolicyList = []; //合同数组
  this.size = ""; //每页的数量
  this.transactionVolumeList = []; //创建合同对象数组
};
// 合同新增请求对象
export const AddContract = function (contractType) {
  baseCreatContractManagement.call(this);
  this.contractType = contractType;
  this.contractSubManagementList.push(new ContractSubManagement())
  this.rentFreeList.push(new RentFree());
}

export const getText = (function () {
  let textObj = {
    contractType: {
      "0": "固定合同",
      "1": "浮动合同"
    },
    contractSigningType: {
      "0": "新签",
      "1": "续签",
      "2": "变更"
    }
  }
  return function (type, val) {
    let result = textObj[type][val];
    return result ? result : '';
  }
})()
