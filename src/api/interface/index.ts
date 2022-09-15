// axios 返回格式
export interface axiosTypes<T> {
  data: T;
  status: number;
  statusText: string;
}

// 接口响应数据格式
export interface responseTypes<T> {
  code: string | number;
  message: string;
  data: T;
}
