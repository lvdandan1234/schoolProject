import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Shopping from '@/components/Shopping'
import ProDetails from '@/components/ProDetails'
import FillOrder from '@/components/FillOrder'
import ShopCart from '@/components/ShopCart'
Vue.use(Router)

export default new Router({
 mode: 'history',
  routes: [
    // {
    //   path: '/index/:sessionId',
    //   name: 'beginAuction', 
    //   component: beginAuction
    // },
    {
      path: '/index/:id',
      name: 'Hello',
      component: Hello
    },{
     path:'/shopping/',
     name:'Shopping',
      component:Shopping
    },{
      path:'/proDetails/',
      name:'proDetails',
      component:ProDetails
    },{
      path:'/FillOrder/',
      name:'FillOrder',
      component:FillOrder
    },{
      path:'/ShopCart/',
      name:'ShopCart',
      component:ShopCart
    }
  ]
});
