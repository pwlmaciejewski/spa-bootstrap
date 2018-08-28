import * as classNames from 'classnames/bind'
import * as React from 'react'
import * as styles from './MainPage.styl'
import { connect } from 'react-redux'
import { StoreState } from '@/reducers'
import { getAllBreeds } from '@/actionCreators/dogs'
import { Resource, defaultResource } from 'redux-fsa-resource/lib';
import { Breed } from '@/models/dogs'
import { breeds } from '@/resources'

const cx = classNames.bind(styles)

interface Props {
  getAllBreeds: typeof getAllBreeds
  breeds: Resource<Breed[]>
}

class MainPage extends React.Component<Props> {
  componentDidMount () {
    this.props.getAllBreeds()
  }

  render () {
    return (
      <div>bla</div>
      // <GetAllBreeds>
      //   {({ fetching, failed, data }: RenderProps<Breed[]>) => {
      //     if (fetching) return <div>Loading...</div>
      //     if (failed) return <div>Error</div>
      //     if (!data) return null
      //     return <BreedList breeds={data} className={cx('breeds')} />
      //   }}
      // </GetAllBreeds>
    )
  }
}

export default connect(
  (state: StoreState) => ({
    breeds: state.breeds['all'] || breeds.create('all')
  }), {
    getAllBreeds
  }
)(MainPage)
