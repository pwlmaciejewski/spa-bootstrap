import { withProps, InferableComponentEnhancerWithProps, mapProps } from 'recompose'
import { FetchProps, Fetch } from 'react-request'
import { Breed, SubBreed } from '@/models/dogs'

const baseUrl = 'https://dog.ceo/api'

export const GetAllBreeds =
  mapProps<FetchProps<Breed[]>, {}>(() => ({
    url: baseUrl + '/breeds/list/all',
    transformData: (data: any): Breed[] =>
      Object.entries(data.message).map(([name, subBreedsNames]: [string, string[]]): Breed => ({
        name,
        subBreeds: subBreedsNames.map((name: string): SubBreed => ({ name }))
      }))
  }))(Fetch)
