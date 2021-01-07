/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Version: 2.6.1
 * @Autor: PONY ZHANG
 * @Date: 2021-01-04 22:57:44
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-07 22:54:35
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */
import { generateIndexRouter } from './utils/util';
import router from '/@/router'
import { routerData } from "/@/utils/routerData.js"
const whiteList = ["/user/login",];
import { useStore } from "vuex"
import { toRaw } from "vue"
const store = useStore(); //解析出store,
//todo 版本1 -- 未采用接口， 采取现在本地找Token字段
let Token = localStorage.getItem('Token');

const guards = (to, from, next) => {
    //todo  user login
    if (Token) {
       if(to.path === '/user/login') {
           next({ path: '/dashboard/analysis' })
       } else {

            //todo 先检查vuex是否存在，接口获取动态的路由 登录的时候会把参数注入一次 通过token登录获取信息
           if(true) {
               //todo 这里之后换成在接口取
                const menuData = routerData;
                // 接口这里是捕获到异常退出登录
                if(menuData === null || menuData === "" || menuData === undefined) {
                    return;
                }
                let constRoutes = [];
                constRoutes = generateIndexRouter(menuData);
                //添加主路由
                store.dispatch("UpdateAppRouter", { constRoutes }).then(() => {
                    //添加动态路由 app
                    let newRouters = toRaw(store.state.app);
                    router.addRoutes(newRouters['addRouters']);
                    const redirect = decodeURIComponent(from.query.redirect || to.path)
                    if(to.path === redirect) {
                        next({ ...to, replace: true  })
                    } else {
                        //跳转到目标路由
                        next({ path: redirect })
                    }
                })

           } else {
               next();
           }
       }
    } else {
        if (whiteList.indexOf(to.path) != -1) {

            //在白名单里面
            next();
        } else {
            next({ path: '/user/login', query: { redirect: to.fullPath } });
        }
    }

}
router.beforeEach((to, from, next) => {
    if (false) {

    } else {
        guards(to, from, next);
    }
})