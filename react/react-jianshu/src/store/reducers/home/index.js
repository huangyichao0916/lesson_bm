import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';

const defaultState = fromJS({
  homeList: ['hyc']
})

export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      const newHomeList = action.homeList;
      return state.set('homeList',newHomeList);
    default:
      return defaultState
  }
}