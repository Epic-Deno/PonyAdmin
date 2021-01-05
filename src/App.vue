<!--
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Version: 2.6.1
 * @Autor: PONY ZHANG
 * @Date: 2020-12-29 22:16:20
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-05 23:09:15
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
-->
<template>
  <a-config-provider :locale="locale">
    <router-view />
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
<style lang="scss" >
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mt-10 {
  margin-top: 10px;
}
</style>

