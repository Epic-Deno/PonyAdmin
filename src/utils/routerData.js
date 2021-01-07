/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: Purpose
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-07 21:58:15
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-07 23:06:56
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */
export const routerData = [
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