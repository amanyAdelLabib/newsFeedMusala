import {
    CHANGE_MODE
  } from '../Actions/types';
  
  const initialState = {
     mode: 'light',

  };
  
  export const changeModeReducer = (
    state = initialState,
    action: {type: String; payload: any},
  ) => {
    switch (action.type) {

      case CHANGE_MODE: {
        const {response} = action.payload;
        return {
          ...state,
            mode:response
        };
      }
  
      default:
        return state;
    }
  };
