import React from 'react'
import ReactDOM from 'react-dom'

class LightLamp extends React.Component {
    // constructor (props) {
    //     super(props)
    // }

    render () {
        return <div className={'light-lamp ' + (this.props.color || 'black') + (this.props.lit ? ' on' : ' off') }></div> 
    }
}

export default LightLamp