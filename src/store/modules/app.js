/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: Purpose
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-06 23:28:51
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-07 22:28:38
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */
import { constantRouterMap } from "../../config/router.config";


const app = {
    state(){
        return {
            routers: constantRouterMap,
            addRouters: [],
        };
    },
    mutations: {
        SET_ROUTERS: (state, data) => {
            state.addRouters = data;
            state.routers = constantRouterMap.concat(data);
        },
    },
    actions: {
        //动态添加主路由
        UpdateAppRouter({ commit }, routes) {
            return new Promise(resolve => {
                const { constRoutes } = routes;
                commit("SET_ROUTERS", constRoutes);
                resolve();
            })
        },
    },
};

export default app;