import ReactDOM from 'react-dom'
import React from 'react'
import PageT3 from './PageT3'
import { Provider } from 'react-redux'


import configureStore from '../../redux/store/store'
import reducer from '../../redux/reducers/reducer'

//
const INITIAL_STORE = {
    direction: 'v',
    timer: {'RED': 5000, 'YELLOW': 600, 'GREEN': 1800} //eventually build this out to populate up from the components?
}


const store = configureStore(reducer(INITIAL_STORE, {}))



class App extends React.Component {

    constructor (props) {
        super(props)
    }

 

    render () {
        
        return <PageT3 />
    }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                , document.getElementById('test-light'))
