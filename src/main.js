import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.less'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './api/dayjs'

import { Button, Toast, Form, Field, NavBar, Tabbar, TabbarItem, Grid, GridItem, Cell, Image, Dialog, Tab, Tabs, List, PullRefresh, Popup, Icon, Search } from 'vant'

Vue.use(Search)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(Cell)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
