import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'mobx-react'
import RootStore from '@/stores'

ReactDOM.render(
  <BrowserRouter>
      <Provider {...new RootStore()}>
        <Routes />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
