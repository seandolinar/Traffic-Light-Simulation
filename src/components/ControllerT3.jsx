import React from 'react'
import { connect } from 'react-redux'

import {
  changeDirection, 
  setTimer, 
  changeSignalColor, 
  advanceLight,
  runLight,
  killLight
} from '../redux/actions/actions'



class ControllerT3 extends React.Component {
    constructor (props) {
      super(props)
      this.onChange = props.onChange.bind(this)
    }

    componentDidMount() {
      this.props.go()
    }

    render () {
        return <div className="controller controller-t3">
                <div className="controller-t3-display">
                  <button className="signal-direction" onClick={this.props.onClick}>{'Turn Signal ' + (this.props.direction == 'v' ? 'Horizontal' : 'Vertical') }</button>
                  <button className="signal-color" onClick={this.props.onClickSignalColor}>Change Enclosure Color</button>
                  {/* <button onClick={this.props.go}>Tester</button> */}
                  <button onClick={this.props.kill}>Kill Tester</button>

                </div>
                <div className="controller-t3-timing">
                <div>
                  <label>R</label>
                  <input type="number" onChange={this.props.onChange} data-light-id="RED" placeholder={this.props.timer['RED']}></input>
                </div>
                <div>
                  <label>Y</label>
                  <input type="number" onChange={this.props.onChange} data-light-id="YELLOW" placeholder={this.props.timer['YELLOW']}></input>
                </div>
                <div>
                  <label>G</label>
                  <input type="number" onChange={this.props.onChange} data-light-id="GREEN" placeholder={this.props.timer['GREEN']}></input>
                </div>
                </div>
                
            </div>
    }
}

// export default ControllerT3


//dispatch sends action to reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(changeDirection())
      },
      onClickSignalColor: () => {
        dispatch(changeSignalColor())
      },
      onChange: (e) => { 
        setTimeout(dispatch(setTimer(e.target.dataset.lightId, parseInt(e.target.value))), 100)
      },
      go: () => {
        // dispatch(runLight())
        dispatch(advanceLight('GREEN', true)) //initializes green
      },
      kill: () => {
        dispatch(killLight())
      }
    }
  }


export default connect(
    (state) => { 
      return { 
        direction: state.direction ,
        timer: state.timer,
        killLight: state.killLight
      } 
  },
    mapDispatchToProps
)(ControllerT3)