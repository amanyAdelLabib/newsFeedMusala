import {
    CHANGE_LANGUAGE
  } from '../Actions/types';
  
  const initialState = {
    languageCode: '',

  };
  
  export const changeLanguageReducer = (
    state = initialState,
    action: {type: String; payload: any},
  ) => {
    switch (action.type) {

      // ************************ get news feed success *****************
      case CHANGE_LANGUAGE: {
        const {response} = action.payload;
        return {
            languageCode:response
        };
      }
  
      default:
        return state;
    }
  };
