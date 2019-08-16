import Vue from 'vue'
import Router from 'vue-router'
import INDEX from '@/page/index';
import Management from '../page/contract/management';
import Change from "../page/contract/change";
import routerPath from './routerPath';
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'index',
      component: INDEX,
      children: [{
        path: '/contract/management',
        name: 'management',
        component: Management,
        meta: {
          name: "合同管理"
        }
      }, {
        path: '/contract/change',
        name: 'change',
        component: Change,
        meta: {
          name: "合同变更"
        }
      }]
    }
  ]
})
