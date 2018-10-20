import * as classNames from 'classnames/bind'
import * as React from 'react'
import * as styles from './MainPage.styl'
import { connect } from 'react-redux'
import { State as StoreState, getAllBreeds } from '@/modules'
import { Loader } from 'semantic-ui-react';
import { BreedList } from '@/components';

const cx = classNames.bind(styles)

interface Props {
  getAllBreeds: typeof getAllBreeds
  breeds: StoreState['dogs']['breeds']
}

class MainPage extends React.Component<Props> {
  componentDidMount () {
    this.props.getAllBreeds()
  }

  render () {
    return (
      <div className={cx('main-page')}>
        <h1 className={cx('header')}>Dog breeds</h1>
        <div className={cx('breed-list-wrapper')}>
          {this.props.breeds.pending || !this.props.breeds.result ? (
            <Loader />
          ) : (
            <BreedList breeds={this.props.breeds.result} className={cx('breed-list')} />
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  (state: StoreState) => ({
    breeds: state.dogs.breeds
  }), {
    getAllBreeds
  }
)(MainPage)
