import React from 'react'
import ReactDOM from 'react-dom'

class LightLamp extends React.Component {

    render () {
        return <div className={'light-lamp ' + (this.props.color || 'black') + (this.props.lit ? ' on' : ' off') }>
            { this.props.arrow && <div class="arrow"><i class="material-icons">arrow_back</i></div> }
        </div> 
    }
}

export default LightLamp