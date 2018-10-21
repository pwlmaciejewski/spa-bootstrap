import 'jest'
import { stub } from 'sinon'
import { createBreeds } from '../mocks/dogs'
import Dogs from '@/stores/dogs'
import { Api } from '@/api'

describe('dogs store', () => {
  describe('getAllBreeds', () => {
    it('should dispatch started and done actions on successful fetch', async () => {
      const result = createBreeds()
      const api: Api = {
        dogs: {
          getAllBreeds: stub().resolves(result)
        }
      }
      const store = new Dogs(api)
      await store.getAllBreeds()
      expect(store.breeds).toEqual(result)
    })
  })
})
