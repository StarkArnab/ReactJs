import axios from "axios";
import {
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  GET_SINGLE_RESTAURANT_REQUEST,
  GET_SINGLE_RESTAURANT_SUCCESS,
  GET_SINGLE_RESTAURANT_FAILURE,
} from "./actionTypes";

// complete below functions for api requests

export const getRestaurants = (currentPage) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANTS_REQUEST });
  try {
    const output = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${currentPage}&limit=9`
    );
      console.log( "output", output.data)
      dispatch({type:GET_RESTAURANTS_SUCCESS,payload:output.data})
  } catch (error) {
      dispatch({type:GET_RESTAURANTS_FAILURE})
  }
};

export const getSingleRestaurant = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_RESTAURANT_REQUEST });
  try {
    const output = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
    );
      console.log( "output", output.data.data)
      dispatch({type:GET_SINGLE_RESTAURANT_SUCCESS,payload:output.data.data})
  } catch (error) {
      dispatch({type:GET_SINGLE_RESTAURANT_FAILURE})
  }
};
