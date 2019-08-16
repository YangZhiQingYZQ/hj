var Mock = require("mockjs");
Mock.mock("/rst-contract/contractManagement/findByContractCode", function (options) {
  console.log(options);
  let res = require("./json/findByContractCode.json")
  return res;
})
console.log("执行")
console.log(Mock)
export default Mock;
