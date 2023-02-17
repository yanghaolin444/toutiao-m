<template>
  <div class="box">
            <van-form>
                <van-field v-model="user.mobile" name="username" placeholder="请输入账号">
                    <i slot="left-icon" class="iconfont icon-shouji"></i>
                </van-field>
                <van-field v-model="user.code" name="code" placeholder="请输入密码">
                    <i slot="left-icon" class="iconfont icon-suo"></i>
                </van-field>
                <div class="login-btn-wrap">
                    <van-button class="login-btn" block type="info" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
   </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  methods: {
    toRe () {
      this.$store.commit('changRe')
    }
  }
}
</script>

<style>

</style>
