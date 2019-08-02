// /**
//  * Created by alan on 17-5-1.
//  */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

// // 应用初始状态
const state = {
  isDialog: "OFF",
}



// // 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
