/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: Purpose
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-07 23:12:20
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-07 23:31:27
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */
const routerData = [
    {
        "redirect": null,
        "path": "/dashboard/analysis",
        "component": "dashboard/Analysis",
        "route": "1",
        "meta": {
            "keepAlive": true,
            "internalOrExternal": false,
            "icon": "home",
            "title": "首页",
            "url": null,
        },
        "name": "dashboard-analysis",
        "id": "9502685863ab87f0ad1134142788a385",
        // "children": [],
    },
    {
        "redirect": null,
        "path": "/home",
        "component": "layouts/RouteView",
        "name": "myhome",
        "route": "1",
        "children": [
            {
                "path": "/home/homeView",
                "component": "HomeView/Home",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "首页",
                    "url": null,
                },
                "name": "home",
                "id": "12333211"
            },
            {
                "path": "/home/test",
                "component": "HomeView/test",
                "route": "1",
                "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "测试页面",
                    "url": null,

                },
                "name": "test",
                "id": "14554433",
            }
        ]
    }
];
const generateIndexRouter = (data) => {
    let indexRouter = [{
        path: '/',
        name: 'dashborad',
        component: () => import('/@/components/layouts/TabLayout.vue'),
        // resolve => require(['/@/components/layouts/TabLayout.vue'], resolve)
        meta: { title: '首页' },
        redirect: '/dashboard/analysis',
        children: [
            ...generateChildRouters(data)
        ]
    }, {
        path: '/:pathMatch(.*)*', redirect: '/404',
    }]
    console.log(indexRouter)
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
    data.map(item =>{
        
        let component = "";
        if (item.component.indexOf('layouts') != -1) {
            component = "component" + item.component;
        } else {
            component = "views/" + item.component;
        }
        //规范化URL 
        // let URL = (item.meta.url || '').replace(/{{([^}}]+)?}}/g, (a, b) => eval(b));//
        //监测下URL是不是http://
        // if (isURL(URL)) {
        //     item.meta.url = URL;
        // }
        // console.log(item)
        //路由参数
        let menu = {
            path: item.path,
            name: item.name,
            redirect: item.redirect,
            component: resolve => require(['/@/' + component + '.vue'], resolve),
            hidden: item.hidden,
            // resolve => require(['/@/' + component + '.vue'], resolve)
            meta: {
                title: item.meta?(item.meta.title || '') : '',
                icon: item.meta?(item.meta.icon || '') : '',
                url: item.meta?(item.meta.url || '') : '',
                internalOrExternal: item.meta?(item.meta.internalOrExternal || '') : '',
                keepAlive: item.meta?(item.meta.keepAlive || '') :''
            }
        }
        // console.log(item.children)

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

    });
    
    return routers
}

generateIndexRouter(routerData);
