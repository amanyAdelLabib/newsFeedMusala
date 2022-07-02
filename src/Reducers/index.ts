import {combineReducers} from 'redux';
import {getNewsFeedReducer} from './getNewsFeedReducer';
import {changeLanguageReducer} from './changeLanguageReducer';


export const rootReducer = combineReducers({
  newsFeedReducer: getNewsFeedReducer,
  changeLanguageReducer:changeLanguageReducer,

});

// export default rootReducer;