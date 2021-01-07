<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 23:16:32
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-12-29 23:44:11
-->
<template>
  <h2>组件页面</h2>
  <div>count: {{ count }}</div>
  <button @click="add">+</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Test",
  setup() {
    const count = ref(0);
    function add() {
      
      count.value++;
    }
    return {
      count,
      add,
    };
  },
};
</script>

<style>
</style>