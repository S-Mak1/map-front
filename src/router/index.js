import Vue from 'vue'
import Router from 'vue-router'
import NavigatorPage from '@/components/NavigatorPage'
import MapPage from '@/components/MapPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Карта',
      component: MapPage
    },
    {
      path: '/site/navigator',
      name: 'Навигатор',
      component: NavigatorPage
    }
  ]
})
