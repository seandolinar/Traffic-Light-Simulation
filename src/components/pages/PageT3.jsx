import React from 'react'
import { connect } from 'react-redux'

import ControllerT3 from '../ControllerT3'
import LightT3 from '../LightT3'

import '../../utils/actuateClap'

class PageT3 extends React.Component {
    constructor (props) {
        super(props) 
    }

    handleClick () {
    }

    render () {
        return <div className="page t3">
            <LightT3 timer={this.props.timer} direction={this.props.direction} signalColor={this.props.signalColor} lightArray={this.props.lightArray}/>
            <ControllerT3 />
        </div>
    }
}




//dispatch sends action to reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
      }
    }
  }


export default connect(
    (state) => {
        return {
            timer: state.timer,
            direction: state.direction,
            signalColor: state.signalColor,
            lightArray: state.lightArray
    }},
    mapDispatchToProps
)(PageT3)

