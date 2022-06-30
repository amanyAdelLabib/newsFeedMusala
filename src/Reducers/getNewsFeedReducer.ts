import {
  GET_NEWS_FEED_PENDING,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_FAIL,
  SEARCH_NEWS_PENDING,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_FAIL,
  RESET_SEARCH_NEWS
} from '../Actions/types';

const initialState = {
  data: [],
  allNewsFeedLoading: false,
  searchedNews:[],
  errors: [],
};

export const getNewsFeedReducer = (
  state = initialState,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    // ************************ pending  *****************

    case GET_NEWS_FEED_PENDING:
    case SEARCH_NEWS_PENDING: {
      return {
        ...state,
        allNewsFeedLoading: true,
      };
    }

    // ************************ get news feed success *****************
    case GET_NEWS_FEED_SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        data: response.articles,
        allNewsFeedLoading: false,
      };
    }

    // ************************ search news feed success *****************
    case SEARCH_NEWS_SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        searchedNews: response.articles,
        allNewsFeedLoading: false,
      };
    }

      // ************************ reset search news feed  *****************
      case RESET_SEARCH_NEWS: {
        const {response} = action.payload;
        return {
          ...state,
          searchedNews: []
        };
      }
  

    // ************************ error *****************

    case GET_NEWS_FEED_FAIL:
    case SEARCH_NEWS_FAIL: {
      const {error} = action.payload;
      return {
        ...state,
        errors: error,
        allNewsFeedLoading: false,
      };
    }
    // ************************ default  *****************

    default:
      return state;
  }
};
