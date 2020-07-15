import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(reducers);
const initialState = {
    start : '北京',
    end : '上海',
}
export default createStore(rootReducer,initialState,applyMiddleware(thunk));