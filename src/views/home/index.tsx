import { useEffect, useState } from 'react'
import logo from '@/assets/logo.png'
import './index.styl'
import HelloWorld from '@/components/hello-world'
import { Button } from 'antd'
import { user } from '@/api'

const Index: React.FC = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    console.log(11111)
    
    const getUserList  = async () => {
      const res: any = await user.getUserList({
        page: 1,
        size: 10
      })
      console.log(res)
  
      if (res.code === '200') {
        const data = res.data || {}
        const userList = data.list || []
        console.log(userList)
        
        setUserList(userList)
      }
    }
    getUserList()
  }, [])
  
  const [count, setCount] = useState(0)
  return (
    <div className="g-container">
      <HelloWorld />
      {userList.map((m: any) => {
        return <>
          <p>{m.userName}</p>
          <p>{m.roleName}</p>
          <p>{m.date}</p>
        </>
      })}
      <p>
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </Button>
      </p>
    </div>
  )
}

export default Index
