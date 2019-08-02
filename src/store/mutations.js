import {
  IS_DIALOG
} from './mutation-type';

// 定义所需的 mutations
const mutations = {
  [IS_DIALOG](state, data) {
    state.isDialog = data;
  },

}

export default mutations;
