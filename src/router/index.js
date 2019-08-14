import Vue from 'vue'
import Router from 'vue-router'
import INDEX from '@/page/index';
import Management from '../page/contract/management';
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
      }]
    }
  ]
})
