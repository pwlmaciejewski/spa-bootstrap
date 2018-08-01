import { actionCreatorFactory, AnyAction, isType } from 'typescript-fsa'
import { AsyncRequest } from '@/models/request'

const actionCreator = actionCreatorFactory('REQUEST')

export const request = actionCreator.async<string, any, Error>('REQUEST')

export const reset = actionCreator<string>('RESET')

export interface State {
  [key: string]: AsyncRequest
}

export const initialState = {}

export function reducer (state: State = initialState, action: AnyAction) {
  if (isType(action, request.started)) {
    const req: AsyncRequest = {
      pending: true,
      success: false
    }
    return {
      ...state,
      [action.payload]: req
    }
  }

  if (isType(action, request.failed)) {
    const req: AsyncRequest = {
      pending: false,
      success: false,
      error: action.payload.error
    }
    return {
      ...state,
      [action.payload.params]: req
    }
  }

  if (isType(action, request.done)) {
    const req: AsyncRequest = {
      pending: false,
      success: true,
      result: action.payload.result
    }
    return {
      ...state,
      [action.payload.params]: req
    }
  }

  if (isType(action, reset)) {
    return {
      ...state,
      [action.payload]: undefined
    }
  }

  return state
}

export default reducer
