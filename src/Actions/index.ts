import {
  GET_NEWS_FEED_PENDING,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_FAIL,
  SEARCH_NEWS_PENDING,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_FAIL,
  RESET_SEARCH_NEWS,
  CHANGE_LANGUAGE
} from './types';
import {GetNewsFeed,SearchNews} from '../Services';
import {Category} from '../Constants';
import {translate,setI18nConfig } from '../Translation/TranslateConfig';

export const getNewsFeed = ( category: string = Category.business,pageSize: number = 5) =>(dispatch: Function) => {
    dispatch({type: GET_NEWS_FEED_PENDING});
    GetNewsFeed(category,pageSize)
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
        dispatch({type: GET_NEWS_FEED_FAIL,payload:{error:"cant load news"}});
      });
  };
export const searchNewsFeed = ( word: string = '') =>(dispatch: Function) => {
  dispatch({type: SEARCH_NEWS_PENDING});
  SearchNews(word)
    .then(res => {
      if (res.status == 200) {
        dispatch({
          type: SEARCH_NEWS_SUCCESS,
          payload: {response: res.data},
        });
      } else {
        dispatch({type: SEARCH_NEWS_FAIL,payload:{error:"cant load news"}});
      }
    })
    .catch(err => {
      dispatch({type: SEARCH_NEWS_FAIL,payload:{error:"cant load news"}});
    });
};
export const resetSearchNewsFeed = ( ) =>(dispatch: Function) => {
  dispatch({type: RESET_SEARCH_NEWS});
};

export const changeLanguage = ( code: string = 'en') =>(dispatch: Function) => {
  setI18nConfig(code);
  dispatch({type: CHANGE_LANGUAGE,payload: {response: code}});

};