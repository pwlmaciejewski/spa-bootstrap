import 'jest'
import { FetchDogsApi } from '@/api/dogs'
import { stub } from 'sinon'
import { createGetAllBreedsResponse, createBreeds } from '../mocks/dogs'

describe('search', () => {
  it('should parse breeds correctly', async () => {
    const resBody = createGetAllBreedsResponse()
    const fetch = stub().resolves(new Response(JSON.stringify(resBody)))
    const api = new FetchDogsApi(fetch)
    const res = await api.getAllBreeds()
    expect(res).toEqual(createBreeds())
  })
})
