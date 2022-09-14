import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import LayoutHeader from './Header'
import LayoutFooter from './Footer'
import './index.styl'

function LayoutIndex() {
  const { Content, Header, Footer } = Layout

  return (
    <div className="g-layout">
        <Layout>
          <LayoutHeader></LayoutHeader>
          <Content className="g-content">
              <Outlet></Outlet>
          </Content>
          <LayoutFooter></LayoutFooter>
        </Layout>
    </div>
  )
}

export default LayoutIndex