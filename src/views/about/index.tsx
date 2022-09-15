import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCounter } from '@/store/modules/about/action'
import { Button, InputNumber } from 'antd'

const Index: React.FC<{}> = () => {
    const navigate = useNavigate()
    const handleNavigate = (num: number) => {
        // -1 返回 0 刷新 1 前进
        navigate(num)
    }

    const navigateEle = <div style={{ marginBottom: '16px' }}>
        <Button type="primary" style={{ marginRight: '8px' }} onClick={() => handleNavigate(-1)}>返回</Button>
        <Button type="primary" style={{ marginRight: '8px' }} onClick={() => navigate('/cate')}>跳转分类页</Button>
    </div>

    // useDispatch 派发事件
    const dispatch = useDispatch()
    // 取 store 中的值
    const { counter } = useSelector((store: any) => store.about)
    const [value, setValue] = useState(counter)

    useEffect(() => {
        // 监听 counter 变化
        console.log(counter)
    }, [counter])

    return <div className="g-container">
        {navigateEle}
        <div>
            <InputNumber value={value} onChange={value => setValue(value)} />
            <Button onClick={() => dispatch(setCounter(value))}>立即保存</Button>
        </div>
    </div>
}

export default Index