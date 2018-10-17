import createRequest, { Request } from 'ducks-request'
import { ThunkDispatch } from 'redux-thunk'
import { ExtraArgs } from '@/store'
import { Breed } from '@/models/dogs'
import { combineReducers, Reducer } from 'redux'

export const getAllBreedsRequest = createRequest<void, Breed[], Error>('get_all_breeds', true)

export const getAllBreeds = () => async (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any,
  extraArgs: ExtraArgs
) => {
  const { dogs: api } = extraArgs.api
  dispatch(getAllBreedsRequest.started())
  try {
    const res = await api.getAllBreeds()
    dispatch(getAllBreedsRequest.done({ result: res }))
  } catch (error) {
    dispatch(getAllBreedsRequest.failed({ error }))
  }
}

export interface State {
  breeds: Request<Breed[], Error>
}

export const reducer: Reducer<State> = combineReducers({
  breeds: getAllBreedsRequest.reducer
})

export default reducer
