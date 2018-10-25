import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'mobx-react'
import RootStore from '@/stores'
import GlobalStyle from './GlobalStyle'

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
        <Provider {...new RootStore()}>
          <Routes />
        </Provider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
