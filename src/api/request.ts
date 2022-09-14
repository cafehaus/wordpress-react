import { axiosTypes, responseTypes } from '@/api/interface'
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { message } from 'antd'
import { store } from '@/store'
import config from '@/config'

// 请求基础URL
let baseURL = config.api

// 默认请求超时时间
const timeout = 30000

// 创建axios实例
const service = axios.create({
  timeout,
  baseURL,
  withCredentials: true // 跨域时候允许携带凭证
})

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token: string = store.getState().app.token
    // 自定义请求头
    let customHeaders: AxiosRequestHeaders = {
      token
    }
    config.headers = customHeaders
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

const requestHandler = <T>(method: 'get' | 'post' | 'put' | 'delete', url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  let response: Promise<axiosTypes<responseTypes<T>>>;
  switch(method){
    case 'get':
      response = service.get(url, {params: { ...params }, ...config});
      break
    case 'post':
      response = service.post(url, {...params}, {...config});
      break
    case 'put':
      response = service.put(url, {...params}, {...config});
      break
    case 'delete':
      response = service.delete(url, {params: { ...params }, ...config});
      break
  }

  return new Promise<T>((resolve, reject) => {
    response.then(res => {
      const data = res.data
      if (data.code !== '200'){
        // 特定状态码处理
        // if (data.code == 100004){
        //   store.dispatch(setToken(''))
        //   message.warn('请重新登录...')
        // }

        let e = JSON.stringify(data)
        message.warn(`请求错误：${e}`)
        console.log(`请求错误：${e}`)
        reject(data)
      }else{
        // resolve 结果
        resolve(data.data)
      }

    }).catch(error => {
      let e = JSON.stringify(error)
      message.warn(`网络错误：${e}`)
      console.log(`网络错误：${e}`)
      reject(error)
    })
  })
}

export default {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('get', url, params, config),
  post: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('post', url, params, config),
  put: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('put', url, params, config),
  delete: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('delete', url, params, config)
}