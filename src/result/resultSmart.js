import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './result'

let mapStateToProps = state => {
  return {
    result: state.minusReducer.result + state.plusReducer.result
  }
}

class resultSmart extends Component {
  render () {
    return (
      <div>
        <Result result={this.props.result} />
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(resultSmart)
