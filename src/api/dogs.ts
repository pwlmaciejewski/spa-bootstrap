import { Breed, SubBreed } from '@/models/dogs'

export interface Api {
  getAllBreeds (): Promise<Breed[]>
}

export default class implements Api {
  private BASE_URL = 'https://dog.ceo/api'

  getAllBreeds = async () => {
    const breeds = await fetch(this.url('/breeds/list/all'))
    const json = await breeds.json()
    return this.parseDogBreeds(json)
  }

  private url = (path: string) => this.BASE_URL + '/breeds/list/all'

  private parseDogBreeds = (data: any): Breed[] =>
    Object.entries(data.message).map(([name, subBreedsNames]: [string, string[]]): Breed => ({
      name,
      subBreeds: subBreedsNames.map((name: string): SubBreed => ({ name }))
    }))
}
