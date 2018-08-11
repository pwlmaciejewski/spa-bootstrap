import { Breed, SubBreed } from '@/models/dogs'

const baseUrl = 'https://dog.ceo/api'

const parseDogBreeds = (data: any): Breed[] =>
  Object.entries(data.message).map(([name, subBreedsNames]: [string, string[]]): Breed => ({
    name,
    subBreeds: subBreedsNames.map((name: string): SubBreed => ({ name }))
  }))

export const getAllBreeds = async () => {
  const breeds = await fetch(baseUrl + '/breeds/list/all')
  const json = await breeds.json()
  return parseDogBreeds(json)
}
