const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
const SET_TIMER = 'SET_TIMER'



export function changeDirection() {
    return {
      type: CHANGE_DIRECTION
    }
  }

  export function setTimer(light, duration) {
    return {
      type: SET_TIMER,
      light,
      duration
    }
  }


export function addTest(number) {
    return {
      type: 'TeST',
      number
    }
  }