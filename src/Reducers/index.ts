import {combineReducers} from 'redux';
import {getNewsFeedReducer} from './getNewsFeedReducer';

export const rootReducer = combineReducers({
  newsFeedReducer: getNewsFeedReducer,
});

// export default rootReducer;