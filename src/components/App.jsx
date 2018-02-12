import ReactDOM from 'react-dom'
import React from 'react'
import LightT3 from './LightT3'

class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = { timer: {red: true, yellow: 200, green: false}  }

        this.handleClick = this.handleClick.bind(this)

        window.addEventListener('click', this.handleClick)
    }

    handleClick() {
        // alert()
        let timer = this.state.timer
        timer.yellow = 2000
        this.setState({timer})
        // setTimeout(() => {
          
        // }, 10000)
    }

    render () {
        let timer = this.state.timer
        // timer.yellow = 200
        return <LightT3 time={timer}/>
    }
}

ReactDOM.render( <App />, document.getElementById('test-light'))
