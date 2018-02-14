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

const counterSecond = (state={}, action) => {
    switch (action.type) {
        case 'TeST': {
            // console.log(state)
            return Object.assign({}, state, { second: ((state.second || 0) + action.number)}) //one way to update the state
        }
    }
    return state
}

const direction = (state={}, action) => {
    switch (action.type) {
        case 'CHANGE_DIRECTION': {
            // console.log(state)
            return state === 'v' ? 'h' : 'v' //one way to update the state // not using an object just Number
        }
    }
    return state
}


const timer = (state={}, action) => {
    switch (action.type) {
        case 'SET_TIMER': {
            state[action.light] = action.duration
            // console.log(action.duration)
            return state
        }
    }
    return state
}


// this will return two different objects with the reducers as keys
// each reducer is "scoped" to it's own "state"
export default combineReducers({
    counter,
    counterSecond,
    direction,
    timer
})