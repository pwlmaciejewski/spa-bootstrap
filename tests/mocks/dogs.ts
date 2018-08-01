import { Breed } from '@/models/dogs'

export const createGetAllBreedsResponse = () => ({
  status: 'success',
  message: {
    foo: [
      'bar',
      'baz'
    ],
    abc: []
  }
})

export const createBreeds = (): Breed[] => [{
  name: 'foo',
  subBreeds: [{
    name: 'bar'
  }, {
    name: 'baz'
  }]
}, {
  name: 'abc',
  subBreeds: []
}]
