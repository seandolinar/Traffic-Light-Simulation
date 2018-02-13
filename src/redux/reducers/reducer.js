import { combineReducers } from 'redux'
import { entities } from 'redux-entity'




//state exists in store
//dispatch takes action and sends that to the reducer which then returns state that updates store

const counter = (state={}, action) => {
    switch (action.type) {
        case 'TeST': {
            console.log(state)
            return Object.assign({}, state, { working: ((state.working || 0) + action.number)}) //one way to update the state
        }
    }
    return state
}




export default combineReducers({
    counter
})