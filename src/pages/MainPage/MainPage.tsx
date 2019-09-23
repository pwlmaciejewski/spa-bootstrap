import * as React from 'react'
import { Loader } from 'semantic-ui-react';
import { BreedList } from '@/components';
import { observer, inject } from 'mobx-react'
import { DogsStore } from '@/stores/dogs'
import { RootStore } from '@/stores'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  position: relative;
  padding: 5rem;
  z-index: 1;
`

const Header = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 4rem;
  font-family: 'Playfair Display';
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .5rem;
`

const ListWrapper = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  font-size: 1rem;
  position: relative;
`

interface Props {
  dogs: DogsStore
}

@inject((rootStore: RootStore) => ({
  dogs: rootStore.dogs
}))
@observer
export default class extends React.Component<Props> {
  componentDidMount () {
    this.props.dogs.getAllBreeds()
  }

  render () {
    return (
      <Wrapper>
        <Header>Dog breeds</Header>
        <ListWrapper>
          {this.props.dogs.request.pending || !this.props.dogs.breeds.length ? (
            <Loader active={true} />
          ) : (
            <BreedList breeds={this.props.dogs.breeds} />
          )}
        </ListWrapper>
      </Wrapper>
    )
  }
}
