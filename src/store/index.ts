import { configureStore, combineReducers } from '@reduxjs/toolkit'
import * as modules from './modules'

// 持久化存储 state
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({ // 合并多个reducer
  ...modules
})

const persistConfig = {
  key: 'root',
  storage,
}
const persistReducerConfig = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistReducerConfig,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // redux 是将数据序列化后存储的，@reduxjs/toolkit里面会默认检查是否序列化，不关闭序列化检查会报错
    })
})
let persistor = persistStore(store)

export { persistor }
export default store