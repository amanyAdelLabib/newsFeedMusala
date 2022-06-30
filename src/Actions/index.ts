import {
  GET_NEWS_FEED_PENDING,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_FAIL,
} from './types';
import {GetNewsFeed} from '../Services';

export const getNewsFeed = () => {
  console.log('getCurrenciesType');
  return dispatch => {
    console.log('data in getNewsFeed');
    dispatch({type: GET_NEWS_FEED_PENDING});
    GetNewsFeed()
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
};
