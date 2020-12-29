<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:58:43
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-12-29 23:08:41
-->
<template>
  <h1>这个是home页面</h1>
  <div>count: {{count}}</div>
  <button @click="add">+</button>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Home',
    setup() {
        //缓存里面取
        const store = useStore();

        return { 
            ...toRefs(store.state),
            add() {
                store.commit('increment')
            },
         }
    },
};
</script>

<style>
</style>