import Request from '@/stores/request'
import 'jest'
import { observe } from 'mobx'
import { spy } from 'sinon'

describe('request store', () => {
  it('should transition pending and set success', async () => {
    const store = new Request()

    const pendingObserver = spy()
    observe(store, 'pending', change => pendingObserver(change.newValue))

    const result = await store.dispatch(() => Promise.resolve('foo'))

    expect(result).toEqual('foo')
    expect(store.success).toBe(true)
    expect(store.pending).toBe(false)
    expect(store.error).toBe(undefined)
    expect(pendingObserver.firstCall.args[0]).toBe(true)
  })

  it('should transition pending and set error on failure', async () => {
    const store = new Request()

    const pendingObserver = spy()
    observe(store, 'pending', change => pendingObserver(change.newValue))

    const error = new Error('some error')
    try {
      await store.dispatch(() => Promise.reject(error))
    } catch (e) {
      expect(e).toBe(error)
      expect(store.error).toBe(error)
      expect(store.success).toBe(false)
      expect(store.pending).toBe(false)
    }
    expect(pendingObserver.firstCall.args[0]).toBe(true)
  })
})
