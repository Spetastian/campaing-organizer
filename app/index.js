import React from 'react'
import { render } from 'react-dom'
import App from './App'

import './static/index.html'
import 'material-design-icons'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
});

render(
  <App />,
  document.getElementById('app')
)