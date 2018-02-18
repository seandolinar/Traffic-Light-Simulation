import { advanceLight } from '../actions/actions'
import timer from '../../utils/timer'

const timerT3 = store => next => action => {
    // console.log(action)
    // console.log(store.getState())

    if (action.type == 'RUN_LIGHT'){
        // const initTimer = async () => {
        //     await store.dispatch({type: 'INIT_LIGHT'})
        //     // console.log(store.getState())

        //     await store.dispatch(advanceLight('GREEN'))
        // }
        // initTimer()
        // // next()
    }

    if (action.type == 'ADVANCE_LIGHT'){
        
        const t3Timer = async () => {
            // console.log(action)
            const nextLight = {
                'GREEN': 'YELLOW',
                'YELLOW': 'RED',
                'RED': 'GREEN'
            }
                        
            await timer(store.getState().timer[action.lightId])             // defaults to 1000 ms
            store.dispatch(advanceLight(nextLight[action.lightId]))

        }
        // console.log('unfired')
        // breaks if we fired the start button a ton of times
        if  ( (!store.getState().killLight && !action.init) ||  (store.getState().killLight && action.init) ) {

            t3Timer()      
        }
    }
    else if (true) {}
    
    next(action);
  }

export default timerT3