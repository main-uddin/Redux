import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from './App'

import { minusReducer } from './minus/minusReducer'
import { plusReducer } from './plus/plusReducer'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const CombineReducers = combineReducers({ minusReducer, plusReducer })

let store = createStore(CombineReducers, {})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
