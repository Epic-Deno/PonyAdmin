/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: Purpose
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-05 23:38:07
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-06 00:17:13
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */

export const generateIndexRouter = (data) => {
    let indexRouter = [{
        path: '/',
        name: 'dashborad',
        component: resolve => require(['/@/components/layouts/TabLayout'], resolve),
        meta: { title: '首页' },
        redirect: '/dashboard/analysis',
        children: [
            ...generateChildRouters(data)
        ]
    }, {
        path: '/:pathMatch(.*)*',  redirect: '/404',
    }]

    return indexRouter;
}

const generateChildRouters = (data) => {

}