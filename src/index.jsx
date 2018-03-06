import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';

ReactDom.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
  , document.querySelector('.container'),
);
