import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './modules'
import thunk from 'redux-thunk'
import api, { Api } from '@/api'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  }
}

export interface ExtraArgs {
  api: Api
}

const extraArgs: ExtraArgs = {
  api
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(extraArgs)))
)

export default store
