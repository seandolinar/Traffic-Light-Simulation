import React from 'react'
import { connect } from 'react-redux'

import ControllerT3 from '../ControllerT3'
import LightT3 from '../LightT3'

import {addTest} from '../../redux/actions/actions'

import '../../utils/actuateClap'

class PageT3 extends React.Component {
    constructor (props) {
        super(props)
        
    }

    handleClick () {
    }

    render () {
        return <div className="page t3">
            <ControllerT3 />
            <LightT3 timer={this.props.timer}/>
        </div>
    }
}




//dispatch sends action to reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        // dispatch(addTest(1))
      }
    }
  }


export default connect(
    (state) => {
        // const test = state.counter.working
        // console.log(state)
        return {
            // working: test,
            // second: state.counterSecond.second
            timer: state.timer
    }},
    mapDispatchToProps
)(PageT3)

// export default LightT3