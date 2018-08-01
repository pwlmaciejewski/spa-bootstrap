import 'jest'
import { request, reset, reducer, State } from '@/modules/requests'

describe('request module', () => {
  const state: State = {
    foo: {
      pending: true,
      success: false
    }
  }

  it('should setup request when started', () => {
    const newState = reducer(state, request.started('bar'))
    expect(newState).toEqual({
      ...state,
      bar: {
        pending: true,
        success: false
      }
    })
  })

  it('should mark as success on done', () => {
    const newState = reducer(state, request.done({ params: 'bar' }))
    expect(newState).toEqual({
      ...state,
      bar: {
        pending: false,
        success: true
      }
    })
  })

  it('should save the error on failed', () => {
    const error = new Error('some error')
    const newState = reducer(state, request.failed({
      error,
      params: 'bar'
    }))
    expect(newState).toEqual({
      ...state,
      bar: {
        pending: false,
        success: false,
        error
      }
    })
  })

  it('should reset request', () => {
    const newState = reducer(state, reset('foo'))
    expect(newState).toEqual({})
  })
})
