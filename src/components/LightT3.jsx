import React from 'react'
import { connect } from 'react-redux'

import LightLamp from './LightLamp'
import timer from '../utils/timer'
import lightChange from '../utils/lightChange'

import {addTest} from '../redux/actions/actions'

class LightT3 extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { lightArray: {red: true, yellow: false, green: false} , operation: true }
        console.log(props)
        let i = 0

        const t3Timer = async () => {
            let lightArray = this.state.lightArray

            await timer() // defaults to 1000 ms
            this.setState({lightArray: lightChange(lightArray, 'green')})

            await timer(2000)
            this.setState({lightArray: lightChange(lightArray, 'yellow')})


            await timer(this.props.time.yellow)
            this.setState({lightArray: lightChange(lightArray, 'red')})

            // temporary so it doesn't always loop
            i += 1
            i > 20 && this.setState({operation: false})
            
            // checks to see if this light should still operate
            // other-wise recursively calls the timer
            this.state.operation && t3Timer()
        }

        t3Timer()
    }

    handleClick () {
        console.log('testing')
    }

    render () {

        const lightArray = this.state.lightArray

        console.log(this.props)

        return <div className="light-box t3" onClick={this.props.onClick}>
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


export default connect(
    (state) => {
        const test = state.working
        return {
            working: test
    }},
    mapDispatchToProps
)(LightT3)

// export default LightT3