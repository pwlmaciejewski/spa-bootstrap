import {DogBreed} from '@/resources/DogBreed'

export const GET_ALL_BREEDS_SUCCESS = 'GET_ALL_BREEDS_SUCCESS'

export interface GetAllBreedsSuccess {
  type: typeof GET_ALL_BREEDS_SUCCESS,
  payload: DogBreed[]
}

export type DogBreedsActions = GetAllBreedsSuccess

export function reducer (state = [], action: DogBreedsActions) {
  switch (action.type) {
    case GET_ALL_BREEDS_SUCCESS:
      return action.payload
    default:
        return state
  }
}
