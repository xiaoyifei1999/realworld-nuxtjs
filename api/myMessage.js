import { request } from '@/plugins/request'

export const getMyMessage = data => {
  return request({
    method: 'GET',
    url: '/api/user',
    data
  })
}

export const updateMyMessage = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}