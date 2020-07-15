import {ACTION_SET_FROM,ACTION_SET_TO} from './actions';

export default {
    from(state = '北京',action){
        const {type , payload} = action;
        switch (type) {
            case ACTION_SET_FROM:
                return payload;
                break;
            
            default:
                return state;
                break;
        }
    },
    to(state='上海',action){
        const {type , payload} = action;
        switch (type) {
            case ACTION_SET_TO:
                return payload;
                break;
            
            default:
                return state;
                break;
        }
    }
}
