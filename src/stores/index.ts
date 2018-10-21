import api from '@/api'
import Dogs, { DogsStore } from './dogs'

export interface RootStore {
  dogs: DogsStore
}

export default class implements RootStore {
  dogs = new Dogs(api)
}
