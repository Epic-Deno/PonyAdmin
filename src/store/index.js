/*
 * @Description: vuex
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:55:34
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-12-29 23:07:54
 */
import { createStore } from 'vuex'

export default createStore({
    state() {
        return { 
            count: 0,
         };
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
})