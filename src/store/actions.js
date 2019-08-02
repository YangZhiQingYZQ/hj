// /**
//  * Created by alan on 17-5-1.
//  * updata by 杨直庆 
//  */
// import {
//   strategy
// } from "../common/utils";
// import mapData from "../common/mapData";
// import FormConifg from "../common/formConfig/FormConfig"
// let http = null,
//   dicItemListByDicCode = null; //缓存http请求模块
// // 初始化http请求模块
// export const initHttp = ({}, data) => {
//   http = data;
//   dicItemListByDicCode = (paramet) => {
//     return http.post("manage/dicItemListByDicCode", {
//       dicCode: paramet
//     })
//   }
// };
// // 初始化repayTypeList(还款方式)函数;
// export const initRepayTypeList = ({
//   commit
// }) => {
//   dicItemListByDicCode("REPAY_TYPE").then(res => {
//     if (res.status == 200) {
//       let {
//         body
//       } = res;
//       strategy.init("repayType", body.data);
//       // commit("REPAY_TYPE_LIST");
//     }
//   })
// }

// // 初始化initChannelType(来源)函数；
// export const initChannelType = ({
//   commit,
//   state
// }, data) => {
//   if (state.channelTypeList.length <= 0) {
//     dicItemListByDicCode("REGISTER_CHANNEL").then(res => {
//       let {
//         body
//       } = res;
//       if (body.code == 1) {
//         let data = body.data;
//         strategy.init("channel", body.data, true);
//         mapData.init("channel", data, "channel");
//         FormConifg.init("channel", body.data, "channel");
//         commit("CHANNEL_TYPE_LIST", data)
//       }
//     })
//   }
// }
// // 初始化riskCheckManList(风控审核员数组)
// export const initRiskCheckManList = ({
//   commit,
//   state
// }, message) => {
//   if (state.riskCheckManList.length >= 0) {
//     http.post("manage/manualRisk/listAllotor", {}).then(
//       res => {
//         let {
//           body
//         } = res;
//         if (1 == body.code) {
//           FormConifg.init("approvalUuid", body.data, "approvalUuid");
//           return body.data ? commit("RISK_CHECK_MAN_LIST", body.data) : commit("RISK_CHECK_MAN_LIST", []);
//         } else {
//           message.error(body.message);
//         }
//       }
//     );
//   }

// }

// export const initOrderStatus = ({
//   commit
// }, data) => {
//   console.log(http);
// };


// export const increment = ({
//   commit
// }) => {
//   commit('INCREMENT')
// }
// export const decrement = ({
//   commit
// }) => {
//   commit('DECREMENT')
// }
// export const getUserListIndex = ({
//   commit
// }, pageIndex) => {
//   commit('GETUSERLISTINDEX', pageIndex)
// }
// export const setOrderListIndex = ({
//   commit
// }, pageIndex) => {
//   commit('SETORDERLISTINDEX', pageIndex)
// }
// export const setOrderListAllIndex = ({
//   commit
// }, pageIndex) => {
//   commit('SETORDERLISTALLINDEX', pageIndex)
// }
// export const setCreditListIndex = ({
//   commit
// }, pageIndex) => {
//   commit('SETCREDITLISTINDEX', pageIndex)
// }

export const changeIsDialog = ({commit},val)=>{
  console.log(val);
  commit("IS_DIALOG",val);
}