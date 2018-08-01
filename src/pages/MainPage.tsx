import * as React from 'react'
import { connect } from 'react-redux'
import { GetAllBreeds } from '@/api/Dogs'
import { RenderProps } from 'react-request'
import { Breed } from '@/models/dogs';

class MainPage extends React.Component<{}> {
  render () {
    return (
      <GetAllBreeds>
        {({ fetching, failed, data }: RenderProps<Breed[]>) => {
          if (fetching) return <div>Loading...</div>
          if (failed) return <div>Error</div>
          console.log(data)
          return <div>Hello world</div>
        }}
      </GetAllBreeds>
    )
  }
}

export default MainPage
