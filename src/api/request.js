import axios from 'axios'

const request = axios.create({
  baseURL: 'https://toutiao.itheima.net/v1_0/sms/codes/'
})
export default request
