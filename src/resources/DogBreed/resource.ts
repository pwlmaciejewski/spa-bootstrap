import {DogBreed, SubBreed} from './types'

const BASE_URL = 'https://dog.ceo/api'

const url = (path: string) => BASE_URL + path

export const getAllBreeds = async (): Promise<DogBreed[]> => {
    const breeds = await fetch(url('/breeds/list/all'))
    const json = await breeds.json()
    return parseDogBreeds(json)
}

const parseDogBreeds = (data: any): DogBreed[] => {
    return Object.entries(data.message).map(([name, subBreedsNames]: [string, string[]]): DogBreed => ({
        name,
        subBreeds: subBreedsNames.map((name: string): SubBreed => ({ name }))
    }))
}

export default {
    getAllBreeds
}
