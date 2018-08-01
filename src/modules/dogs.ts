import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory('DOGS')

export const getAllBreeds = actionCreator('GET_ALL_BREEDS')
