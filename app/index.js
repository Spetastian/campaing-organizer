import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import configureStore, { history }  from './configure-store'

import './static/index.html'
//import 'material-design-icons'
import WebFont from 'webfontloader'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
WebFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
})

const store = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)