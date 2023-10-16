import {
  GET_RESTAURANTS_FAILURE,
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_SINGLE_RESTAURANT_REQUEST,
  GET_SINGLE_RESTAURANT_SUCCESS,
  GET_SINGLE_RESTAURANT_FAILURE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  restaurants: [],
  totalPages: 0,
  restaurant: {},
};

// complete reducer function

export const reducer = (state = initialState, { type, payload }) => {
  console.log("payload", payload);
  switch (type) {
    case GET_RESTAURANTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurants: payload.data,
        totalPages: payload.totalPages,
      };
    case GET_RESTAURANTS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    
    case GET_SINGLE_RESTAURANT_SUCCESS:
      return { ...state, restaurant:payload };
    default:
      return state;
  }
};
