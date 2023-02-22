<template>
  <div class="box">
    <van-form @submit="toRe">
      <van-field v-model="user.username" name="username" placeholder="请输入账号">
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field v-model="user.password" name="password" placeholder="请输入密码">
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
import jquery from 'jquery'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    toRe (val) {
      console.log(val)
      jquery.ajax({
        method: 'post',
        url: 'http://www.liulongbin.top:3007/api/login',
        data: {
          username: val.username,
          password: val.password
        }
      }).then(res => {
        if (res.status !== 0) {
          return this.$toast.success('失败')
        }
        console.log(res.token)
        window.localStorage.setItem('token', res.token)
        this.$toast.success('成功')
        return this.$router.push({
          name: 'home'
        })
      })
    }
  }
}
</script>

<style>
.van-field__control {
  color: #aab2bd !important;
  /* placeholder字体大小 */
  font-size: 30px !important;
}
</style>
