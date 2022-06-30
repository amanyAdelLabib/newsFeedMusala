import {
  GET_NEWS_FEED_PENDING,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_FAIL,
} from './types';
import {GetNewsFeed} from '../Services';
import {Category} from '../Constants';

export const getNewsFeed = ( category: String = Category.business) =>(dispatch: Function) => {
  console.log('getCurrenciesType');
    console.log('data in getNewsFeed');
    dispatch({type: GET_NEWS_FEED_PENDING});
    GetNewsFeed(category)
      .then(res => {
        if (res.status == 200) {
          dispatch({
            type: GET_NEWS_FEED_SUCCESS,
            payload: {response: res.data},
          });
        } else {
          dispatch({type: GET_NEWS_FEED_FAIL,payload:{error:"cant load news"}});
        }
      })
      .catch(err => {
        // Alert.alert('Warning', 'Check your connection!');
        console.log('in getNewsFeed catch');
        console.log(err);
        dispatch({type: GET_NEWS_FEED_FAIL,payload:{error:"cant load news"}});
      });
  };
