import { AnyAction } from 'redux'
import { AppState } from '@/store/interface'
import produce from 'immer'

const appState: AppState = {
  token: '',
  userInfo: '',
}

const app = (state: AppState = appState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'SET_TOKEN':
        draftState.token = action.token
        break
      case 'SET_USERINFO':
        draftState.userInfo = action.userInfo
        break
      default:
        return draftState
    }
  })

export default app
