import createResource from 'redux-fsa-resource'
import { Breed } from '@/models/dogs'

export const breeds = createResource<Breed[]>('breeds')
