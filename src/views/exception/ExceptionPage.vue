<!--
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: Purpose
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-06 00:02:12
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-06 00:11:06
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
-->
<template>
  <div class="exception">
    <div class="img">
      <img :src="config[type].img" />
    </div>
    <div class="content">
      <h1>{{ config[type].title }}</h1>
      <div class="desc">{{ config[type].desc }}</div>
      <div class="action">
        <a-button type="primary" @click="handleToHome">返回首页</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import types from "./type";
import { reactive } from "vue";
import { useRouter } from 'vue-router'
export default {
  props: {
    type: {
      type: String,
      default: "404",
    },
  },
  setup(props) {
    const config = reactive({ ...types });
    const router = useRouter();

    function handleToHome () {
        router.push('/')
    };
    return {
      config,
      handleToHome,
    };
  },
};
</script>

<style>
</style>