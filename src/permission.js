/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Version: 2.6.1
 * @Autor: PONY ZHANG
 * @Date: 2021-01-04 22:57:44
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-06 00:19:17
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */
import router from '/@/router'
const whiteList = ["/user/login", ];

const guards = (to, from, next) => {
    //todo  user login
    console.log(to)
    if(whiteList.indexOf(to.path) != -1) {
        
        //在白名单里面
       next();
    } else {
        next({ path: '/user/login', query: { redirect: to.fullPath } });
    }
}
router.beforeEach((to, from, next) => {
    if(false) {

    } else { 
        guards(to, from, next);
     }
})