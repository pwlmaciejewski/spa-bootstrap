import * as classNames from 'classnames/bind'
import * as React from 'react'
import * as styles from './MainPage.styl'
import { Loader } from 'semantic-ui-react';
import { BreedList } from '@/components';
import { observer, inject } from 'mobx-react'
import { DogsStore } from '@/stores/dogs'
import { RootStore } from '@/stores'

const cx = classNames.bind(styles)

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
      <div className={cx('main-page')}>
        <h1 className={cx('header')}>Dog breeds</h1>
        <div className={cx('breed-list-wrapper')}>
          {this.props.dogs.request.pending || !this.props.dogs.breeds.length ? (
            <Loader active={true} />
          ) : (
            <BreedList breeds={this.props.dogs.breeds} className={cx('breed-list')} />
          )}
        </div>
      </div>
    )
  }
}
