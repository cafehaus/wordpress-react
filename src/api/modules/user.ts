import http from '@/api/request'

/**
 * @name 用户模块
 */

// 获取用户列表
export const getUserList = (params: { page: number, size: number }) =>  http.get('/users', params)

// 登录
export const login = (params: { userName: string, password: string }) =>  http.post('/login', params)
