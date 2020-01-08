import Vue from 'vue'
import Router from 'vue-router'
import ElmHome from 'component/elm-home/home'
import ElmGoods from 'component/elm-home/Goods/goods'
import ElmGoodslist from 'component/elm-home/Goods/goodslist'
import ElmAppraise from 'component/elm-home/Appraise/appraise'
import ElmSeller from 'component/elm-home/Seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElmHome',
      component: ElmHome,
      redirect:"/goods",
      children: [
        {
          path: '/goods',
          name: 'ElmGoods',
          component: ElmGoods,
          redirect:"/goodslist/0",
          children:[
            {
              path: '/goodslist/:index',
              name: 'ElmGoodslist',
              component: ElmGoodslist
            }
          ]
        }, {
          path: '/appraise',
          name: 'ElmAppraise',
          component: ElmAppraise
        }, {
          path: '/seller',
          name: 'ElmSeller',
          component: ElmSeller
        }
      ]
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
