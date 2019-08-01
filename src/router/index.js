import Vue from 'vue'
import Router from 'vue-router'
import tableDome from '@/components/tableDome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tableDome',
      component: tableDome
    }
  ]
})
