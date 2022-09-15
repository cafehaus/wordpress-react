
export const source = 1 // 请求来源：1-web 2-wxmp
export const isProd = import.meta.env.PROD

// 接口地址
export let api = '/api/'
let subdomain = location.hostname.split('.')[0]
switch (subdomain) {
  case '192':
  case '127':
  case 'localhost':
  case 'dev':
    api = '/api-dev/'
    break
  case 'test':
    api = '/api-test/'
    break
}

// 兼容导出方式
export default {
  source,
  isProd,
  api,
}
