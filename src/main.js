/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:16:20
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-12-29 23:41:34
 */
import { createApp } from 'vue'
import router from '/@/router'
import store from '/@/store'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";

import App from './App.vue'
import '/@/styles/index.scss'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.mount("#app");
