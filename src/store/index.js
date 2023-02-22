import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: true,
    username: '',
    photo: '',
    list: [],
    myChannels: [],
    active: []
  },
  mutations: {
    putusername (state, data) {
      if (state.user) {
        state.username = data.username
        state.photo = data.user_pic
      }
    },
    setlist (state, data) {
      state.list = data
    }
  },
  actions: {
    getusername (context) {
      $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3007/my/userinfo',
        headers: {
          Authorization: window.localStorage.getItem('token') || ''
        }

        // complete:function(res){
        //   if(res.responseJSON.status === 1&&res.responseJSON.message ==="身份认证失败！"){
        //     localStorage.removeItem("token")
        //     this.$router.push({name:"login"})
        //   }
        // }
      }).then(function (res) {
        if (res.status !== 0) {
          context.state.user = false
          return this.$toast.success('获取用户信息失败！')
        }
        context.state.user = true
        context.commit('putusername', res.data)
      })
    },
    getlist (context) {
      $.ajax({
        method: 'get',
        url: 'http://localhost:3000/'
      }).then(res => {
        res.forEach((item, index) => {
          context.state.list[index] = item
        })
      })
    }
  },
  modules: {
  }
})
