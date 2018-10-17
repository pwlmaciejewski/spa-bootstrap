import dogs, { State as DogsState } from './dogs'
import { combineReducers } from 'redux'
import { Reducer } from 'redux'

export * from './dogs'

export interface State {
  dogs: DogsState
}

export const reducer: Reducer<State> = combineReducers({
  dogs
})

export default reducer
