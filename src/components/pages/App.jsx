import ReactDOM from 'react-dom'
import React from 'react'
import LightT3 from '../LightT3'
import { Provider } from 'react-redux'


import configureStore from '../../redux/store/store'
import reducer from '../../redux/reducers/reducer'

const INITIAL_STORE = {
    working: false
}


const store = configureStore(reducer({}, {}))



class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = { timer: {red: true, yellow: 200, green: false}  }
    }

 

    render () {
        let timer = this.state.timer
        return <LightT3 time={timer}/>
    }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                , document.getElementById('test-light'))
