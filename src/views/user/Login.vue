<!--
 * @Description: login
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-30 23:25:25
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-05 00:32:21
-->
<template>
  <div class="login">
    <div class="login-mask" />
    <div class="login-form-wrap">
      <div class="login-form mx-6">
        <div class="login-form__content px-2 py-10">
          <header>
            <img src="/@/assets/images/logo.png" class="mr-4" />
            <h1>Pony</h1>
          </header>

          <a-form
            class="mx-auto mt-10"
            :model="formData"
            :rules="formRules"
            ref="formRef"
          >
            <a-form-item name="account">
              <a-input
                size="large"
                v-model:value="formData.account"
                placeholder="Username: vben"
              />
            </a-form-item>
            <a-form-item name="password">
              <a-input-password
                size="large"
                visibilityToggle
                v-model:value="formData.password"
                placeholder="Password: 123456"
              />
            </a-form-item>

            <!-- <a-form-item name="verify" v-if="openLoginVerify">
              <BasicDragVerify v-model:value="formData.verify" ref="verifyRef" />
            </a-form-item> -->
            <a-row>
              <a-col :span="12">
                <a-form-item>
                  <!-- 未做逻辑，需要自行处理 -->
                  <a-checkbox v-model:checked="autoLogin" size="small"
                    >自动登录</a-checkbox
                  >
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :style="{ 'text-align': 'right' }">
                  <!-- 未做逻辑，需要自行处理 -->
                  <a-button type="link" size="small">忘记密码</a-button>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item>
              <a-button
                type="primary"
                size="large"
                class="rounded-sm"
                :block="true"
               
                :loading="formState.loading"
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref , reactive,} from 'vue'
export default {
  name: "login",
  setup() {
      const autoLoginRef = ref(false);
       const formData = reactive({
        account: 'vben',
        password: '123456',
        // verify: undefined,
      });
      const formState = reactive({
        loading: false,
      });

      const formRules = reactive({
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      });

      return {
          autoLoginRef,
          formState,
          formData,
          formRules,
      };
  },
};
</script>

<style lang="less" scoped>
//   @import '../../../design/index.less';

.login {
    position: relative;
    // height: 100vh;
    background: url(../../../assets/images/login/login-bg.png) no-repeat;
    background-size: 100% 100%;
    &-mask {
      display: none;
      height: 100%;
      background: url(../../../assets/images/login/login-in.png) no-repeat;
      background-position: 50% 30%;
      background-size: 80% 80%;

    //   .respond-to(xlarge, { display: block;});
    }

    &-form {
      width: 520px;
      background: #fff;
      border: 10px solid rgba(255, 255, 255, 0.5);
      border-width: 8px;
      border-radius: 4px;
      background-clip: padding-box;
    //   .respond-to(xlarge, { margin: 0 120px 0 50px});

      &-wrap {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 90%;
        justify-content: center;
        align-items: center;
        // .respond-to(large, {
        //   width: 600px;
        //   right: calc(50% - 300px);
        //   });
        // .respond-to(xlarge, { width: 600px; right:0});
      }

      &__content {
        width: 100%;
        height: 100%;
        border: 1px solid #999;
        border-radius: 2px;

        header {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            display: inline-block;
            width: 48px;
          }

          h1 {
            margin-bottom: 0;
            font-size: 24px;
            // color: @primary-color;
            text-align: center;
          }
        }

        form {
          width: 80%;
        }
      }
    }
  } 
</style>