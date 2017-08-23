import Vue from 'vue'

// 存放数据
const state = {
    orderList: [],
    params: {}
}

// 返回数据
const getters = {
    orderList: (state) => {
        return state.orderList;
    }
}

// 可以异步操作
const actions = {
    fetchOrderList ({commit, state}) {
        Vue.http.post('api/getOrderList', state.params)
            .then( (res) => {
                commit('updateOrderList', res.data.list);
            }, (err) => {

            })
    }
}

// 必须同步操作
const mutations = {
    updateOrderList (state, orderList) {
        state.orderList = orderList;
    },
    updateParams (state, {key, val}) {
        state.params[key] = val;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}

