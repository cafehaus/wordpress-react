import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'

const Index: React.FC = () => {
    const navigate = useNavigate()
    return <Result
        status="404"
        title="404"
        subTitle="骚瑞，页面不存在"
        extra={<Button type="primary" onClick={() => navigate('/')}>返回首页</Button>}
    />
}

export default Index