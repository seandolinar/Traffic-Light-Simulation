import ReactDOM from 'react-dom'
import React from 'react'
import PageT3 from './PageT3'
import { Provider } from 'react-redux'


import configureStore from '../../redux/store/store'
import reducer from '../../redux/reducers/reducer'
import middleware from '../../redux/middleware/middleware'

import INITIAL_STORE from '../../redux/store/initialStore'

// sets our initial store
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
