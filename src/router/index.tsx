import React from 'react'
import { useRoutes, useNavigate, Navigate } from 'react-router-dom'
import routes, { routeType } from './routes'
import { Spin } from 'antd'

export default function Router() {
  const element = useRoutes(renderRoutes(routes))
  return element
}

function renderRoutes(routes: Array<routeType>) {
  return routes.map((item: routeType) => {
    interface resType extends routeType {
      element?: any
    }

    let res: resType = { ...item }
    // if (!item?.path) return // 不返回 res, ts 会类型报错，方法返回值为 undefined 了
    if (!item?.path) return res

    // component
    // 路由表里设置的 element 的直接加载，设置 component 的用懒加载
    if (item?.component) {
      // 懒加载会导致每个页面第一次加载的时候出现页面闪烁，为了避免闪烁只在子路由里懒加载
      const Component = React.lazy(item.component)
      res.element = (
        <React.Suspense
          fallback={
            <Spin
              size='large'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
              }}
            />
          }
        >
          <BeforeEach route={item}>
            <Component />
          </BeforeEach>
        </React.Suspense>
      )
    }

    if (item?.children) {
      res.children = renderRoutes(item.children)
    }

    // 重定向
    if (item?.redirect) {
      res.element = <Navigate to={item.redirect} replace />
    }

    return res
  })
}

function BeforeEach(props: { route: routeType; children: any }) {
  if (props?.route?.meta?.title) {
    document.title = props.route.meta.title
  }

  if (props?.route?.meta?.needLogin) {
    // 是否需要登录
    // const navigate = useNavigate()
    // navigate('/login')
  }

  return <div>{props.children}</div>
}
