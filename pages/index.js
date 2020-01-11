import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../shared/components/header'

class Home extends Component {
  render() {
    const { counter, increment, incrementBy, incrementAsync, resetApp } = this.props

    return (
      <div>
        <Header />
        <h1> Counter </h1>
        <h3>The count is {counter}</h3>
        <p>
          <button onClick={increment}>increment</button>
          <button onClick={() => increment(1)}>
            increment (using dispatch function)
          </button>
          <button onClick={incrementBy(5)}>increment by 5</button>
          <button onClick={incrementAsync}>incrementAsync</button>
        </p>
        <br />
        <button onClick={resetApp}>Reset App</button>
      </div>
    )
  }
}

const mapState = state => ({
  counter: state.counter,
})

const mapDispatch = ({ counter: { increment, incrementAsync, resetApp } }) => ({
  increment: () => increment(1),
  incrementBy: amount => () => increment(amount),
  incrementAsync: () => incrementAsync(1),
  resetApp,
})

export default connect(mapState, mapDispatch)(Home)
