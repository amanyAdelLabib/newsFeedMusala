import {
  GET_NEWS_FEED_PENDING,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_FAIL,
} from '../Actions/types';

const initialState = {
  data: {},
  loading:false,
  errors: [],
};

export const getNewsFeedReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    // ************************ pending  *****************

    case GET_NEWS_FEED_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    // ************************ success *****************
    case GET_NEWS_FEED_SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        data: response,
        loading: false,
      };
    }

    // ************************ error *****************

    case GET_NEWS_FEED_FAIL: {
      const {error} = action.payload;
      return {
        ...state,
        errors: error,
        loading: false,
      };
    }
    // ************************ default  *****************

    default:
      return state;
  }
};
