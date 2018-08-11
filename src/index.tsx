import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
