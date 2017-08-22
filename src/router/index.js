import Vue from 'vue'
import Router from 'vue-router'
import DetailPage from '../pages/detail.vue'
import IndexPage from '../pages/index.vue'
import OrderListPage from '../pages/orderList.vue'

import DetailAnaPage from '../pages/detail/analysis.vue'
import DetailCouPage from '../pages/detail/count.vue'
import DetailForPage from '../pages/detail/forecast.vue'
import DetailPubPage from '../pages/detail/publish.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/orderList',
            name: 'OrderListPage',
            component: OrderListPage
        },
        {
            path: '/detail',
            name: 'DetailPage',
            component: DetailPage,
            // 默认加载页面
            redirect: '/detail/count',
            children: [
                {
                    path: 'analysis',
                    component: DetailAnaPage
                },
                {
                    path: 'count',
                    component: DetailCouPage
                },
                {
                    path: 'forecast',
                    component: DetailForPage
                },
                {
                    path: 'publish',
                    component: DetailPubPage
                }

            ]
        }
    ]
})
