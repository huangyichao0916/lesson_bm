import {fromJS} from 'immutable';

const defaultState = fromJS({
    homeList:[],
})

export default function (state = defaultState , action){
    switch (action.type) {
        default:
            return state;
    }
}