/*
 * @Description: vuex
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:55:34
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-06 23:41:59
 */
import { createStore } from 'vuex'
import Combiner from './modules/index.js'

export default createStore({
    modules: {
        ...Combiner
    },
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