import 'jest'
import * as React from 'react'
import { mount } from 'enzyme'
import { _MainPage as MainPage } from '@/pages/MainPage'
import { spy } from 'sinon'
import { Action, ActionCreator } from 'typescript-fsa'

describe('<MainPage />', () => {
  it('should get all breeds on mount', () => {
    const getAllBreedsSpy = spy()
    const component = (
      <MainPage
        getAllBreeds={getAllBreedsSpy as any}
      />
    )
    mount(component)
    expect(getAllBreedsSpy.calledOnce).toBe(true)
  })
})
