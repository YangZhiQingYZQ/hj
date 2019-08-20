/*
 * @Author: YZQ
 * @DeScription: 
 * @Date: 2019-08-16 21:50:44
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-21 00:55:57
 */
var Mock = require("mockjs");
Mock.mock(RegExp("/rst-contract/contractManagement/findByContractCode"+"*"), "get", function (options) {
  console.log(options)
  let res = require("./json/findByContractCode.json")
  return res;
})
export default Mock;
