import React from 'react'
import { connect } from 'react-redux'

import LightLamp from './LightLamp'
import timer from '../utils/timer'
import { linearLightChange } from '../utils/lightChange'


class LightT3 extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        // console.log(this.props)
        const lightArray = this.props.lightArray

        return <div className={'size-med light-box t3 ' + this.props.direction + ' ' + this.props.signalColor} onClick={this.props.onClick}>
            <LightLamp color="red" lit={lightArray['RED']} />
            <LightLamp color="yellow" lit={lightArray['YELLOW']} />
            <LightLamp color="green" lit={lightArray['GREEN']} />
        </div>
    }
}

export default LightT3