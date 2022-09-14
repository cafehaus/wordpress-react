import { useEffect, useState } from 'react'
import logo from '@/assets/logo.png'
import './index.styl'
import HelloWorld from '@/components/hello-world'
import { Button } from 'antd'

function Index() {
  const [count, setCount] = useState(0)
  return (
    <div className="g-container">
      {/* <HelloWorld />
      <p>
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </Button>
      </p> */}
    </div>
  )
}

export default Index
