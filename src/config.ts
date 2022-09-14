
export const source = 4 // 请求来源：1-web 2-wxmp
export const isProd = process.env.NODE_ENV === 'production'

// 接口地址
export let api = '/api/'
let subdomain = location.hostname.split('.')[0]
switch (subdomain) {
  case '192':
  case 'localhost':
  case 'dev':
    api = '/api/'
    break
  case 'test':
    api = '/api-test/'
    break
}

// 兼容导出方式
export default {
  version,
  isProd,
  api,
}
