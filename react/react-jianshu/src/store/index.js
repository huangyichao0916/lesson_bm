/**
 * redux-immutable的combineReducers与redux的combineReducers有略微不同，
 * redux-immutable的combineReducers可以将state的最外层也转化成immutable
 */
import {combineReducers} from 'redux-immutable';
import {createStore,applyMiddleware} from 'redux';
import HomeReducer from './reducers/home';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    home:HomeReducer
})

export default createStore(rootReducer,applyMiddleware(thunk));