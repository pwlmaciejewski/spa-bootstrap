import * as React from 'react'
import { Item } from 'semantic-ui-react'
import { Breed } from '@/models/dogs'
import * as classNames from 'classnames/bind'
import * as styles from './BreedList.styl'

const cx = classNames.bind(styles)

export interface Props {
  breeds: Breed[]
  className?: string
}

export default (props: Props) => (
  <Item.Group divided className={props.className}>
    {props.breeds.map(breed => (
      <Item key={breed.name}>
        <Item.Content verticalAlign='middle'>
          <span className={cx('breed-name')}>{breed.name}</span>
          {!!breed.subBreeds.length && (
            <>
              <span className={cx('more-breeds-info')}>
                +{breed.subBreeds.length} sub-breeds
              </span>
              <ul className={cx('sub-breeds')}>
                {breed.subBreeds.map(b => (
                  <li key={b.name} className={cx('sub-breed')}>{b.name}</li>
                ))}
              </ul>
            </>
          )}
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)
