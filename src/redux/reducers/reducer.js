import { combineReducers } from 'redux'
import { linearLightChange } from '../../utils/lightChange'
  
//state exists in store
//dispatch takes action and sends that to the reducer which then returns state that updates store

const direction = (state={}, action) => {
    switch (action.type) {
        case 'CHANGE_DIRECTION': {
            // console.log(state)
            return state === 'v' ? 'h' : 'v' //one way to update the state // not using an object just Number
        }
    }
    return state
}

const signalColor = (state={}, action) => {
    switch (action.type) {
        case 'CHANGE_SIGNAL_COLOR': {
            return state === 'yellow' ? 'black' : 'yellow' //one way to update the state // not using an object just Number
        }
    }
    return state
}

const timer = (state={}, action) => {
    switch (action.type) {
        case 'SET_TIMER': {
            state[action.light] = action.duration // change this so that the object ripples
            // console.log(action.duration)
            return state
        }
    }
    return state
}

const lightArray = (state={}, action) => {
    if (action.type == 'ADVANCE_LIGHT'){        
        return Object.assign({}, linearLightChange(state, action.lightId))
    }

    return state
}

const killLight = (state={}, action) => {
    if (action.type == 'KILL_LIGHT'){
        state = true
    }
    if (action.type == 'ADVANCE_LIGHT' && action.init) {
        state = false
    }
    return state
}


// this will return two different objects with the reducers as keys
// each reducer is "scoped" to it's own "state"
export default combineReducers({
    direction,
    timer,
    signalColor,
    lightArray,
    killLight
})