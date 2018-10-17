import * as classNames from 'classnames/bind'
import * as React from 'react'
import * as styles from './MainPage.styl'
import { connect } from 'react-redux'
import { State as StoreState, getAllBreeds } from '@/modules'

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
    breeds: state.dogs.breeds
  }), {
    getAllBreeds
  }
)(MainPage)
