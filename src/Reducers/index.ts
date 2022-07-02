import {combineReducers} from 'redux';
import {getNewsFeedReducer} from './getNewsFeedReducer';
import {changeLanguageReducer} from './changeLanguageReducer';
import {changeModeReducer} from './changeModeReducer';


export const rootReducer = combineReducers({
  newsFeedReducer: getNewsFeedReducer,
  changeLanguageReducer:changeLanguageReducer,
  changeModeReducer:changeModeReducer,


});

