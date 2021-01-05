<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-30 23:29:53
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-05 23:31:00
-->
<template>
  <div id="userLayout">
    <div class="container">
      <div class="userLayOut-cover">
        <div class="login-form-wrap">
          <div class="login-form__content">
            <div class="top">
              <div class="header">
                <a href="/"
                  ><img src="../../assets/logo.png" class="logo" alt=""
                /></a>
              </div>
              <div class="desc">
                Powered By Fantastic Artwork Vue.js @ Evan You.
              </div>
            </div>
            <route-view></route-view>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="copyright">
          Copyright &copy;
          <a href="https://github.com/Epic-Deno" target="_blank"
            >Github: Epic-Deno</a
          >
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
  background: url("../../assets/login/login-bg.png") 0% 0% / 100% 100% no-repeat;
  background-size: cover;
  .container {
    width: 100%;
    min-height: 100%;
    background: url("../../assets/login/login-in.png") 50% 30% / 80% 80%
      no-repeat;
    // background-size: cover;
    padding: 110px 0 144px;
    // box-sizing: border-box;
    position: relative;

    a {
      text-decoration: none;
    }
    .userLayOut-cover {
      width: 600px;
      position: absolute;
      top: 0;
      right: 0;
      height: 90%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;

      .login-form-wrap {
        margin: 0 120px 0 50px;
        width: 520px;
        height: 440px;
        background: padding-box rgb(255, 255, 255);
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.5);
        border-image: initial;
        border-width: 8px;
        border-radius: 4px;
        .login-form__content {
          width: 100%;
          height: 100%;
          border: 1px solid rgb(153, 153, 153);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 40px 8px;
        }
      }
    }

    .top {
      text-align: center;

      .header {
        height: 60px;
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
          height: 60px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }

        .title {
          font-size: 33px;
          color: #fff;
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
        color: rgb(44, 58, 97);

        margin-top: 10px;
        margin-bottom: 10px;
        .title {
          font-size: 33px;
          color: #fff;

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
        color: #fff;
        font-size: 14px;
        a {
          color: lightgreen;
        }
      }
    }
  }
}
</style>