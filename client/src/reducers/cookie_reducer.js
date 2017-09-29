import {GET_COOKIE, SET_COOKIE} from "../actions/types";

const initialState = {quote: 'You deserve a cookie'};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COOKIE:
      return {...state, quote: action.payload};
    case SET_COOKIE:
      return state;
    default:
      return state;
  }
}