import './index.styl'
import logoImg from '@/assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { Input } from 'antd'
const { Search } = Input

const LayoutHeader = () => {
  // 跳转
  const navigate = useNavigate()
  const handleNavigate = (path: any) => {
    navigate(path)
  }

  const location = useLocation()
  const { pathname } = location

  // 搜索
  const onSearch = (value: string) => console.log(value)

  return (
    <div className='layout-header'>
      <div className='content'>
        <div className='nav'>
          <img src={logoImg} className='logo' />
          <div className='menu'>
            <span className={pathname === '/home' ? 'menu-item-active menu-item' : 'menu-item'} onClick={() => handleNavigate('/home')}>
              首页
            </span>
            <span  className={pathname === '/cate' ? 'menu-item-active menu-item' : 'menu-item'} onClick={() => handleNavigate('/cate')}>
              分类
            </span>
            <span
              className={pathname === '/about' ? 'menu-item-active menu-item' : 'menu-item'}
              onClick={() => handleNavigate('/about')}
            >
              关于
            </span>
          </div>
        </div>
        <div className='search'>
          <Search
            placeholder='input search text'
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </div>
    </div>
  )
}

export default LayoutHeader
