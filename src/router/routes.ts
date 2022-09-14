export interface routeType {
  path: string;
  component?: any;
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
    component: () => import('@/layout'),
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
