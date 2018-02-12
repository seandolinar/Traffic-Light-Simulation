import React from 'react'
import LightLamp from './LightLamp'
import timer from '../utils/timer'
import lightChange from '../utils/lightChange'

class LightT3 extends React.Component {
    constructor (props) {
        super(props)
        this.state = { lightArray: {red: true, yellow: false, green: false} , operation: true }

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

    render () {

        const lightArray = this.state.lightArray

        return <div className="light-box t3">
            <LightLamp color="red" lit={lightArray.red} />
            <LightLamp color="yellow" lit={lightArray.yellow} />
            <LightLamp color="green" lit={lightArray.green} />
        </div>
    }
}

export default LightT3