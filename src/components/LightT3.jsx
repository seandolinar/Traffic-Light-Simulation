import React from 'react'
import { connect } from 'react-redux'

import LightLamp from './LightLamp'
import timer from '../utils/timer'
import lightChange from '../utils/lightChange'
import ActuateClap from '../utils/actuateClap'

import {addTest} from '../redux/actions/actions'

class LightT3 extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { lightArray: {red: true, yellow: false, green: false} , operation: true }
        
        let i = 0

        const timerObj = props.timer
        // console.log(props)

        const t3Timer = async () => {
            let lightArray = this.state.lightArray

            await timer(timerObj['RED']) // defaults to 1000 ms
            this.setState({lightArray: lightChange(lightArray, 'green')})

            await timer(timerObj['GREEN'])
            this.setState({lightArray: lightChange(lightArray, 'yellow')})


            await timer(timerObj['YELLOW'])
            this.setState({lightArray: lightChange(lightArray, 'red')})

            // temporary so it doesn't always loop
            i += 1
            i > 20 && this.setState({operation: false})
            
            // checks to see if this light should still operate
            // other-wise recursively calls the timer
            this.state.operation && t3Timer()
        }

        t3Timer()

        let act = new ActuateClap()
        act.setActuate(() => { this.setState({lightArray: lightChange(this.state.lightArray, 'green')})  })
        act.start()
    }

    componentWillReceiveProps(nextProps) {
        // console.log('prop')
        // console.log(nextProps)
    }

    handleClick () {
    }

    render () {

        const lightArray = this.state.lightArray


        // console.log(this.props)

        return <div className={'light-box t3 ' + this.props.direction} onClick={this.props.onClick}>
            <LightLamp color="red" lit={lightArray.red} />
            <LightLamp color="yellow" lit={lightArray.yellow} />
            <LightLamp color="green" lit={lightArray.green} />
        </div>
    }
}

// export default LightT3


//dispatch sends action to reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(addTest(1))
      }
    }
  }




export default LightT3