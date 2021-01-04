<!--
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Version: 2.6.1
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:16:20
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-04 23:32:14
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import enUS from "ant-design-vue/es/locale/en_US";
export default {
  name: "App",
  components: {},
  data() {
    return {
      locale: enUS,
    };
  },
};
</script>

