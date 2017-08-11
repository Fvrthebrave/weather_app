import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
            // Creates a new array that contains the old and new item.
            return state.concat([action.payload.data]);
            
            //The following line also works in redux
            /* return [ action.payload.data, ...state ]; */
    }
    return state;
}
