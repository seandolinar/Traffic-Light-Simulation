const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
const SET_TIMER = 'SET_TIMER'
const CHANGE_SIGNAL_COLOR = 'CHANGE_SIGNAL_COLOR'
const ADVANCE_LIGHT = 'ADVANCE_LIGHT'
const KILL_LIGHT = 'KILL_LIGHT'
const RUN_LIGHT = 'RUN_LIGHT'




export function changeDirection() {
    return {
      type: CHANGE_DIRECTION
    }
}

export function changeSignalColor() {
  return {
    type: CHANGE_SIGNAL_COLOR
  }
}

export function setTimer(light, duration) {
  return {
    type: SET_TIMER,
    light,
    duration
  }
}

export function advanceLight(lightId, init=false) {
  return {
    type: ADVANCE_LIGHT,
    lightId,
    init
  }
}

export function runLight() {
  return {
    type: RUN_LIGHT,
  }
}

export function killLight() {
  return {
    type: KILL_LIGHT,
  }
}