export interface routeType {
  path: string;
  element?: any;
  children?: Array<routeType>;
  meta?: {
    title?: string;
    needLogin?: boolean;
  };
  redirect?: string;
}

const routes: Array<routeType> = [
  {
    path: '/',
    element: () => import('@/layout'),
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        element: () => import('@/views/home'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/cate',
        element: () => import('@/views/cate'),
        meta: {
          title: '分类',
        },
      },
      {
        path: '/cate/:id',
        element: () => import('@/views/cate'),
        meta: {
          title: '分类带路径参数',
        },
      },
      {
        path: '/about',
        element: () => import('@/views/about'),
        meta: {
          title: '关于',
        },
      },
    ],
  },
  {
    path: '*',
    element: () => import('@/components/404'),
    meta: {
      title: '404',
    },
  },
]

export default routes
