// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRersource from 'vue-resource'
// import App from './App'
import router from './router'

// 导入自己的组件
import Layout from './components/layout.vue';

// 注册组件
Vue.use(Vuex);
Vue.use(VueRersource);

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout }
})
