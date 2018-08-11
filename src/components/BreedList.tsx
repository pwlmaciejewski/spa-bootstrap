import * as React from 'react'
import { Item } from 'semantic-ui-react'
import { Breed } from '@/models/dogs'

export interface Props {
  breeds: Breed[]
  className?: string
}

export default (props: Props) => (
  <Item.Group divided className={props.className}>
    {props.breeds.map(breed => (
      <Item key={breed.name}>
        <Item.Content verticalAlign='middle'>{breed.name}</Item.Content>
      </Item>
    ))}
  </Item.Group>
)
