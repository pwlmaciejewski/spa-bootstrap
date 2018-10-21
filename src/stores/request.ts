import { observable, runInAction } from 'mobx'

export interface Request {
  pending: boolean
  success: boolean
  error?: Error
  dispatch: <T>(fn: () => Promise<T>) => Promise<T>
}

export default class implements Request {
  @observable pending = false

  @observable success = false

  @observable error = undefined

  async dispatch<T> (fn: () => Promise<T>) {
    this.pending = true
    this.success = false
    try {
      const result = await fn()
      runInAction(() => {
        this.pending = false
        this.success = true
      })
      return result
    } catch (error) {
      runInAction(() => {
        this.error = error
        this.success = false
        this.pending = false
      })
      throw error
    }
  }
}
