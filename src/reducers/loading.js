import { SET_IS_LOADING } from '../actions/loading';

export default function loading(state = true, action) {
    switch(action.type) {
        case SET_IS_LOADING :
            return action.loading;
        default :
            return state;
    }
}