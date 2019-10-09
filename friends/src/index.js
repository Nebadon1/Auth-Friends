import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import index from './reducers'
const middleware = applyMiddleware(thunk)
const store = createStore(index, middleware)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));