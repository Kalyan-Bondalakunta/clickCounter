import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  increaseCount = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {counter} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="counter-span">{counter}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button
          className="click-btn"
          type="button"
          onClick={this.increaseCount}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
