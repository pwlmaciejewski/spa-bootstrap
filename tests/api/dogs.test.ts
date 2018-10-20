import 'jest'
import * as fetchMock from 'fetch-mock'
import { createGetAllBreedsResponse, createBreeds } from '../mocks/dogs'
import DogsApi from '@/api/dogs'

describe('dogs api', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  describe('getAllBreeds', () => {
    it('should parse the results correctly', async () => {
      fetchMock
        .getOnce('https://dog.ceo/api/breeds/list/all', createGetAllBreedsResponse())
      const breeds = await new DogsApi().getAllBreeds()
      expect(breeds).toEqual(createBreeds())
    })
  })
})
