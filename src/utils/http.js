import Vue from 'vue'
import axios from 'axios'
import store from 'vuex'

axios.defaults.baseURL = '192.6.1.137:8088/software'
axios.defaults.timeout = 50000

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit('delToken')
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        // 返回接口返回的错误信息
        return Promise.reject(error.response)
    })

    export default axios