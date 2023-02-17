import request from './request'
export const getCode = data => {
  return request({
    method: 'GET',
    url: '/',
    data
  })
}
