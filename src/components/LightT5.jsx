import React from 'react'
import { connect } from 'react-redux'

import LightLamp from './LightLamp'
import timer from '../utils/timer'
import { linearLightChange } from '../utils/lightChange'


class LightT5 extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        // console.log(this.props)
        const lightArray = this.props.lightArray

        return <div className={'size-med light-box t5 ' + this.props.direction + ' ' + this.props.signalColor} onClick={this.props.onClick}>
            
            <div className="top-red">
                <LightLamp color="red" lit={lightArray['RED']} />
            </div>
            <div className="bottom-yellow-green">
                <div className="left-arrow">
                    <LightLamp color="yellow" arrow={true} lit={lightArray['YELLOW']} />
                    <LightLamp color="green" arrow={true} lit={lightArray['GREEN']} />
                </div>
                <div className="right-full">
                    <LightLamp color="yellow" lit={lightArray['YELLOW']} />
                    <LightLamp color="green" lit={lightArray['GREEN']} />
                </div>
            </div>
        </div>
    }
}

export default LightT5