import { observable, action } from 'mobx'
import { Breed } from '@/models/dogs'
import Request from './request'
import { Api } from '@/api'

export interface DogsStore {
  request: Request
  breeds: Breed[]
  getAllBreeds: () => void
}

export default class implements DogsStore {
  api: Api

  request: Request = new Request()

  @observable breeds: Breed[] = []

  constructor (api: Api) {
    this.api = api
  }

  @action
  async getAllBreeds () {
    this.breeds = await this.request.dispatch(this.api.dogs.getAllBreeds)
  }
}
