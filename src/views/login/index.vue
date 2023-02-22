<template>
    <div>
        <div class="nav">
            <span>登录</span>
        </div>
        <keep-alive>
            <component :is="ComName"></component>
        </keep-alive>
        <span class="span" @click="re">{{ value }}</span>
    </div>
</template>

<script>
// import { getCode } from '@/api/login.js'
// import axios from 'axios'
import user from '@/components/login/user.vue'
import re from '@/components/login/re.vue'

export default {
  data () {
    return {
      value: '点击注册',
      ComName: 'user'
    }
  },
  components: {
    user,
    re
  },
  methods: {

    re () {
      if (this.ComName === 'user') {
        this.ComName = 're'
        this.value = '点击登录'
      } else {
        this.ComName = 'user'
        this.value = '点击注册'
      }
    }
  }

}
</script>

<style lang="less">
.nav {
    width: 100%;
    height: 100px;
    background-color: #338CEB;

    span {
        width: 120px;
        display: block;
        margin: 0 auto;
        color: #ffff;
        text-align: center;
        padding-top: 15px;
    }
}

.box {
    margin: 0 auto;
    padding: 10px 20px 10px 20px;
    background-color: #fff;

    .span {
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;

        a {
            color: #6db4fb !important;
        }
    }

    .toutiao {
        font-size: 37px;
    }

    .send-sms-btn {
        width: 202px;
        height: 60px;
        line-height: 46px;
        background-color: #ededed;
        font-size: 10px;
        color: #666;

        span {
            font-size: 10px;
        }
    }

    .login-btn-wrap {
        padding: 53px 33px;

        .login-btn {
            background-color: #6db4fb;
            border: none;
        }
    }

    .van-form {
        font-size: 10px;
    }
}

.re {
    margin: 0 auto;
    padding: 10px 20px 10px 20px;
    background-color: #fff;

    .toutiao {
        font-size: 37px;
    }

    .send-sms-btn {
        width: 202px;
        height: 60px;
        line-height: 46px;
        background-color: #ededed;
        font-size: 10px;
        color: #666;

        span {
            font-size: 10px;
        }
    }

    .login-btn-wrap {
        padding: 53px 33px;

        .login-btn {
            background-color: #6db4fb;
            border: none;
        }
    }

    .van-form {
        font-size: 10px;
    }
}

.van-cell {
    display: block;
}

.span {
    display: flex;
    justify-content: flex-end;
    padding-right: 60px;
    padding-bottom: 10px;
    color: #6db4fb !important;
    cursor: pointer;
    background-color: #fff;
    font-size: 30px;
}

.van-field__control {
    color: #aab2bd !important;
    /* placeholder字体大小 */
    font-size: 30px !important;
}

i {
    display: block;
}
</style>
