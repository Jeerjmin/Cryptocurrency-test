import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'


import { upData, selectSubreddit, fetchPosts } from './actions'
import { reducers } from './reducers'
import { App } from './containers/app'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const loggerMiddleware = createLogger()

const store = createStore(reducers,composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware) ) );

  store.dispatch(fetchPosts())

render(

  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('app')
);
