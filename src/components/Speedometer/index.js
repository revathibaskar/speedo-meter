import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {
          speed: prevState.speed + 10,
        }
      }
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {
          speed: prevState.speed - 10,
        }
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-conntainer">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-style"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="btn-style1"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="btn-style2"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
