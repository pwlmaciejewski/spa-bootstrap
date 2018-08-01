import 'isomorphic-fetch'
import { Breed, SubBreed } from '@/models/dogs'

export interface DogsApi {
  getAllBreeds: () => Promise<Breed[]>
}

export class FetchDogsApi implements DogsApi {
  private baseUrl = 'https://dog.ceo/api'

  private _fetch?: GlobalFetch['fetch']

  constructor (_fetch?: GlobalFetch['fetch']) {
    this._fetch = _fetch
  }

  getAllBreeds = async (): Promise<Breed[]> => {
    const url = this.baseUrl + '/breeds/list/all'
    const res = await (this._fetch || window.fetch)(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const json: any = await res.json()
    return this.parseBreeds(json.message)
  }

  private parseBreeds = (message: any): Breed[] =>
    Object.entries(message).map(([name, subBreedsNames]: [string, string[]]): Breed => ({
      name,
      subBreeds: subBreedsNames.map((name: string): SubBreed => ({ name }))
    }))
}
