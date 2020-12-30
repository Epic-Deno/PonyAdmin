/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-30 23:23:17
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-12-30 23:49:05
 */
import { UserLayout, TabLayout, RouteView,  } from '/@/components/layouts'



 /**
  * 基础路由
  * @type {* []}
  * 
  */
export const constantRouterMap = [
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            { 
                path: 'login',
                name: 'login',
                component: () => import('/@/views/user/Login'),
            },
        ]
    },
    {
        path: '/404',
        component: () => import('/@/views/exception/404')
    }
];