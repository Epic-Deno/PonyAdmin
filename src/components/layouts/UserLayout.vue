<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-30 23:29:53
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-05 00:34:07
-->
<template>
  <div id="userLayout">
    <div class="container">
      <!-- <div class="top">
        <div class="desc">
          <span class="title">welcome to login</span>
        </div>
      </div> -->

      <!-- <img src="@/assets/login.png" class="login-png" alt="" /> -->
      <route-view></route-view>

      <div class="footer">
        <div class="copyright">
          Copyright &copy;
          <a href="https://github.com/Epic-Deno" target="_blank">Github: Epic-Deno</a>
          版权所有
        </div>
        <div class="links">
          <span>Epic-Deno</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RouteView from "./RouteView.vue";

export default {
  name: "UserLayout",
  components: { RouteView },
};
</script>
<style lang="scss" scoped>
#userLayout {
  height: 100%;


  .container {
    width: 100%;
    min-height: 100%;
    background: url('../../assets/login/login-bg.png') no-repeat 50%;
    background-size: cover;
    padding: 110px 0 144px;
    // box-sizing: border-box;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;

        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }

        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }

        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
            "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
            "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      right: 10%;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
         
        span {
          color: #fff;
        }
        a {
          color: lightgreen;
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color:#fff;
        font-size: 14px;
        a {
           color: lightgreen;
        }
      }
    }
  }
}
</style>