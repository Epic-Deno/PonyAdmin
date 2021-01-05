<!--
 * @Description: login
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-12-30 23:25:25
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-05 23:29:52
-->
<template>
      <a-form
        class="mx-auto mt-10"
        :model="formData"
        :rules="formRules"
        :wrapper-col="wrapperCol"
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
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "login",
  setup() {
    const autoLoginRef = ref(false);
    const autoLogin = ref(false);

    const formData = reactive({
      account: "vben",
      password: "123456",
      // verify: undefined,
    });
    const wrapperCol = reactive({
      span: 24
    })

    const formState = reactive({
      loading: false,
    });

    const formRules = reactive({
      account: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    });

    return {
      autoLoginRef,
      autoLogin,
      formState,
      formData,
      formRules,
      wrapperCol,
    };
  },
};
</script>

<style lang="less" scoped>
  @import  '../../design/ant/index.less';


  form {
    width: 85%;
  }

</style>