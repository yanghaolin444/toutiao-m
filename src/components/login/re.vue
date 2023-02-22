<template>
  <div class="re">
    <van-form @submit="re">
      <van-field v-model="user.username" name="username" :rules="userFormRules.username" placeholder="请输入账号">
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field v-model="user.password" name="password" :rules="userFormRules.password" placeholder="请输入新密码">
        <i slot="left-icon" class="iconfont icon-suo"></i>
      </van-field>
      <van-field v-model="user.repassword" name="repassword" :rules="userFormRules.repassword" placeholder="请重新输入密码">
        <i slot="left-icon" class="iconfont icon-suo"></i>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
</div>
</template>

<script>
// import axios from 'axios'
import jquery from 'jquery'
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        repassword: ''
      },
      userFormRules: {
        username: [{
          required: true,
          message: '账号不能为空'
        }],
        password: [{
          required: true,
          message: '密码不能为空'
        }, {
          pattern: /^[\S]{6,12}$/,
          message: '密码必须6到12位，且不能出现空格'
        }],
        repassword: [{
          required: true,
          message: '密码不能为空'
        }, {
          pattern: /^[\S]{6,12}$/,
          message: '密码必须6到12位，且不能出现空格'
        }
          // ,{
          //   validator(val){
          //     if(this.password !== repassword){
          //       return false
          //     }else{
          //       return true
          //     }
          //   },
          //   message:"两次输入的密码必须一样"
          // }
        ]
      }
    }
  },
  methods: {
    re (val) {
      this.$toast.loading({
        message: '请稍等...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认 2000，0 表示持续展示不关闭
      })
      jquery.ajax({
        method: 'post',
        url: 'http://www.liulongbin.top:3007/api/reguser',
        data: {
          username: val.username,
          password: val.password
        }
      }).then(res => {
        console.log(res)
        if (res.status === 0) {
          return this.$toast.success('成功')
        }
        return this.$toast.success('失败')
      })
    }
  }
}
</script>

<style></style>
