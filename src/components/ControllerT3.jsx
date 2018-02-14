import React from 'react'
import { connect } from 'react-redux'

import {changeDirection, setTimer} from '../redux/actions/actions'



class ControllerT3 extends React.Component {
    // constructor (props) {
    //     super(props)
    // }

    render () {
        return <div className="controller-t3">
                <button className="signal-direction" onClick={this.props.onClick}>Signal Direction</button>
                <input type="number" onChange={this.props.onChange}></input>
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
      onChange: (e) => {
        
        dispatch(setTimer('RED', parseInt(e.target.value)))
      }
    }
  }


export default connect(
    // (state) => {
    //     const test = state.counter.working
    //     console.log(state)
    //     return {
    //         working: test,
    //         second: state.counterSecond.second
    // }},
    () => Object(),
    mapDispatchToProps
)(ControllerT3)