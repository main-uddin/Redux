import React, { Component } from 'react'
import { connect } from 'react-redux'
import { plusAct } from './plusAction'

import Plus from './plus'

const mapDispatchToProps = dispatch => {
  return {
    plusAction: () => {
      dispatch(plusAct())
    }
  }
}

class plusSmart extends Component {
  handleClick = () => {
    this.props.plusAction()
  }
  render () {
    return (
      <div>
        <Plus handleClick={this.handleClick} />
      </div>
    )
  }
}
export default connect(null, mapDispatchToProps)(plusSmart)
