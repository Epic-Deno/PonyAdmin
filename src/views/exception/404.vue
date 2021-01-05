<!--
 * @Description: 404
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-30 23:26:20
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-06 00:15:41
-->
<template>
  <exception-page type="404" />
</template>

<script>
  import ExceptionPage from './ExceptionPage.vue'

  export default {
    components: {
      ExceptionPage
    }
  }
</script>

<style lang="scss" scoped>
  .exception {
    min-height: 500px;
    height: 80%;
    align-items: center;
    text-align: center;
    margin-top: 150px;
    .img {
      display: inline-block;
      padding-right: 52px;
      zoom: 1;
      img {
        height: 360px;
        max-width: 430px;
      }
    }
    .content {
      display: inline-block;
      flex: auto;
      h1 {
        color: #434e59;
        font-size: 72px;
        font-weight: 600;
        line-height: 72px;
        margin-bottom: 24px;
      }
      .desc {
        color: rgba(0, 0, 0, .45);
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 16px;
      }
    }
  }

  .mobile {
    .exception {
      margin-top: 30px;
      .img {
        padding-right: unset;

        img {
          height: 40%;
          max-width: 80%;
        }
      }
    }
  }
</style>