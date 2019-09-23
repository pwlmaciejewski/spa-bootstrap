import 'jest'
import * as fetchMock from 'fetch-mock'

import resource from '../resource'
import {dogBreeds} from '../mocks'

describe('dogs api', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  describe('getAllBreeds', () => {
    it('should parse the results correctly', async () => {
      fetchMock.getOnce('https://dog.ceo/api/breeds/list/all', {
        status: 200,
        message: {
          foo: [
            'bar',
            'baz'
          ],
          abc: []
        }
      })
      const breeds = await resource.getAllBreeds()
      expect(breeds).toEqual(dogBreeds)
    })
  })
})
