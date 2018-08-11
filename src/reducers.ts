import { Resources } from 'redux-fsa-resource'
import { combineReducers } from 'redux'
import { breeds } from './resources'
import { Breed } from '@/models/dogs'

export interface StoreState {
  breeds: Resources<Breed[]>
}

export default combineReducers({
  breeds: breeds.reducer
})
