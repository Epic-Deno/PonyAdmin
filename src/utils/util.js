/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: 动态路由拼接函数
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-05 23:38:07
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-06 23:17:23
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */

export const generateIndexRouter = (data) => {
    let indexRouter = [{
        path: '/',
        name: 'dashborad',
        component: () => import(`/@/components/layouts/TabLayout.vue`),
        // resolve => require(['/@/components/layouts/TabLayout.vue'], resolve)
        meta: { title: '首页' },
        redirect: '/dashboard/analysis',
        children: [
            ...generateChildRouters(data)
        ]
    }, {
        path: '/:pathMatch(.*)*', redirect: '/404',
    }]

    return indexRouter;
}

/**
 * URL地址
 * @param {*} s
 */
function isURL(s) {
    return /^http[s]?:\/\/.*/.test(s)
}

const generateChildRouters = (data) => {
    const routers = [];
    //遍历路由树
    for (var item of data) {
        let component = "";
        if (item.component.indexOf('layouts') != -1) {
            component = "component" + item.component;
        } else {
            component = "views/" + item.component;
        }

        //规范化URL 
        let URL = (item.meta.url || '').replace(/{{([^}}]+)?}}/g, (a, b) => eval(b));//
        //监测下URL是不是http://
        if (isURL(URL)) {
            item.meta.url = URL;
        }

        //路由参数
        let menu = {
            path: item.path,
            name: item.name,
            redirect: item.redirect,
            component: () => import(`/@/${component}.vue`),
            hidden: item.hidden,
            // resolve => require(['/@/' + component + '.vue'], resolve)
            meta: {
                title: item.meta.title,
                icon: item.meta.icon,
                url: item.meta.url,
                internalOrExternal: item.meta.internalOrExternal,
                keepAlive: item.meta.keepAlive
            }
        }

        if(item.children && item.children.length > 0) {
            //递归子节点遍历
            menu.children = [...generateChildRouters(item.children)];
        }

        //--update-begin----author:pony---date:20210106------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
        if(item.route && item.route === '0') {
            //不生成路由
        } else {
            routers.push(menu);
        }
        //--update-end----author:pony---date:20210106------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------

    }

    return routers
}