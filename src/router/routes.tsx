export interface routeType {
  path: string;
  element?: any;
  component?: any;
  children?: Array<routeType>;
  meta?: {
    title?: string;
    needLogin?: boolean;
  };
  redirect?: string;
}

// 公共布局组件不用懒加载，避免页面闪烁
import Layout from  '@/layout'
// import Error404 from '@/components/404'

const routes: Array<routeType> = [
  {
    path: '/',
    // element: () => import('@/layout'),
    element: <Layout />, 
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/cate',
        component: () => import('@/views/cate'),
        meta: {
          title: '分类',
        },
      },
      {
        path: '/cate/:id',
        component: () => import('@/views/cate'),
        meta: {
          title: '分类带路径参数',
        },
      },
      {
        path: '/about',
        component: () => import('@/views/about'),
        meta: {
          title: '关于',
        },
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/components/404'),
    meta: {
      title: '404',
    },
  },
]

export default routes
