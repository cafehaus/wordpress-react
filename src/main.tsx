import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import{ default as ConfigRoutes} from '@/router'

import { PersistGate } from "redux-persist/integration/react"
import { Provider } from 'react-redux'
import store, { persistor } from '@/store'

import '@/styles/main.styl'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ConfigRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
