import React, { Component } from 'react'
import Result from './result/resultSmart'
import Plus from './plus/plusSmart'
import Minus from './minus/minusSmart'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Plus />
        <Result />
        <Minus />
      </div>
    )
  }
}

export default App
