/*
 * @Description: router
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:52:52
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-07 22:07:01
 */
import { createWebHistory, createRouter } from 'vue-router'
import { constantRouterMap } from '/@/config/router.config'

// const routes = [ 
//     {
//         path: '/',
//         name: 'Home',
//         component: () => import('/@/views/Home.vue'),
//     },

//     {
//         path: '/test',
//         name: 'Test',
//         component: () => import('/@/views/test.vue'),
//     }


// ];

export default createRouter({
    // '/ponyAdmin/'
    history: createWebHistory(),
    routes: constantRouterMap,
});