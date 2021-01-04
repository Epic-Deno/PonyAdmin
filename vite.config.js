/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 23:15:39
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-04 22:50:35
 */
import { resolve } from 'path'
const pathResolve = (dir) => {
    return resolve(__dirname, ".", dir);
}
module.exports = {
    alias: {
        "/@/": pathResolve("src"),
    },
    optimizeDeps: {
        include: ["@ant-design/icons-vue","ant-design-vue/es/locale/en_US"],
    },
    // otherwise, may assets 404 or visit with index.html
    base: "/ponyAdmin/",
    assetsDir: "",
};