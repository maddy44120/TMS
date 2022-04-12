import {
    CAR_LIST_REQUEST,
    CAR_LIST_SUCCESS,
    CAR_LIST_FAIL,
    CAR_LIST_RESET,
    
 } from "../Constants/CarConstants";
  
    export const CarListReducer = (state = {}, action) => {
      switch (action.type) {
        case CAR_LIST_REQUEST:
          return { loading: true };
        case CAR_LIST_SUCCESS:
          return { loading: false, response: action.payload };
        case CAR_LIST_FAIL:
          return { loading: false, error: action.payload };
        case CAR_LIST_RESET:
          return {};
        default:
          return state;
      }
    };

    
    