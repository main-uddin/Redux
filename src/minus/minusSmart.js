import React, { Component } from 'react'
import { connect } from 'react-redux'
import { minAct } from './minusAction'
import Minus from './minus'

function mapDispatchToProps (dispatch) {
  return {
    minAction: () => {
      dispatch(minAct())
    }
  }
}

class minusSmart extends Component {
  handleClick = () => {
    this.props.minAction()
  }
  render () {
    return (
      <div>
        <Minus handleClick={this.handleClick} />
      </div>
    )
  }
}
export default connect(null, mapDispatchToProps)(minusSmart)
