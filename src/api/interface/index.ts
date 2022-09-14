// axios 返回格式
interface axiosTypes<T> {
  data: T;
  status: number;
  statusText: string;
}

// 接口响应数据格式
interface responseTypes<T> {
  code: string | number;
  message: string;
  data: T;
}
