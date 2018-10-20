import 'jest'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ExtraArgs } from '@/store'
import { stub } from 'sinon'
import { createBreeds } from '../mocks/dogs'
import { getAllBreeds, getAllBreedsRequest } from '@/modules/dogs'

describe('dogs module', () => {
  describe('getAllBreeds', () => {
    it('should dispatch started and done actions on successful fetch', async () => {
      const result = createBreeds()
      const extraArgs: ExtraArgs = {
        api: {
          dogs: {
            getAllBreeds: stub().resolves(result)
          }
        }
      }
      const store = createMockStore([thunk.withExtraArgument(extraArgs)])()
      await store.dispatch<any>(getAllBreeds())
      const actions = store.getActions()
      expect(actions[0]).toEqual(getAllBreedsRequest.started())
      expect(actions[1]).toEqual(getAllBreedsRequest.done({ result }))
    })

    it('should dispatch started and failed actions on error', async () => {
      const error = new Error('some error')
      const extraArgs: ExtraArgs = {
        api: {
          dogs: {
            getAllBreeds: stub().rejects(error)
          }
        }
      }
      const store = createMockStore([thunk.withExtraArgument(extraArgs)])()
      await store.dispatch<any>(getAllBreeds())
      const actions = store.getActions()
      expect(actions[0]).toEqual(getAllBreedsRequest.started())
      expect(actions[1]).toEqual(getAllBreedsRequest.failed({ error }))
    })
  })
})
