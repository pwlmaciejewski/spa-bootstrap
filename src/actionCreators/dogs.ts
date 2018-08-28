import { actionCreatorFactory } from 'typescript-fsa'
import { ThunkDispatch } from 'redux-thunk'
import { breeds } from '@/resources'
import * as api from '@/api/dogs'

const actionCreator = actionCreatorFactory('DOGS')

export const getAllBreeds = () => async (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(breeds.get.started('all'))
  try {
    const res = await api.getAllBreeds()
    dispatch(breeds.get.done({
      params: 'all',
      result: res
    }))
  } catch (error) {
    dispatch(breeds.get.failed({
      error,
      params: 'all'
    }))
  }
}
