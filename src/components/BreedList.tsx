import * as React from 'react'
import { Item } from 'semantic-ui-react'
import { Breed } from '@/models/dogs'
import styled from 'styled-components'

const BreedName = styled.span`
  text-transform: capitalize;
  font-size: 1.2em;
`

const MoreBreeds = styled.span`
  margin-left: 1em;
  font-size: .85em;
  color: #777;
`

const SubBreeds = styled.ul`
  list-style-type: none;
  padding: 0 0 0 1.5em;
  margin: .8em 0 0 0;
`

const SubBreed = styled.li`
  text-transform: capitalize;
  color: #333;
  font-size: 1.1em;
  font-weight: 300;
  margin-bottom: .5em;

  &:last-child {
    margin-bottom: 0;
  }
`

export interface Props {
  breeds: Breed[]
  className?: string
}

export default (props: Props) => (
  <Item.Group divided className={props.className}>
    {props.breeds.map(breed => (
      <Item key={breed.name}>
        <Item.Content verticalAlign='middle'>
          <BreedName>{breed.name}</BreedName>
          {!!breed.subBreeds.length && (
            <>
              <MoreBreeds>
                +{breed.subBreeds.length} sub-breeds
              </MoreBreeds>
              <SubBreeds>
                {breed.subBreeds.map(b => (
                  <SubBreed key={b.name}>{b.name}</SubBreed>
                ))}
              </SubBreeds>
            </>
          )}
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)
