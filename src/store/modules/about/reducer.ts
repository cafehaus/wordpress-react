import { AnyAction } from 'redux'
import { AboutState } from '@/store/interface'
import produce from 'immer'

const aboutState: AboutState = {
  counter: 0,
  title: 'zhouxiaohei',
}

const about = (state: AboutState = aboutState, action: AnyAction) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'SET_COUNTER':
        draftState.counter = action.counter
        break
      default:
        return draftState
    }
  })

export default about
