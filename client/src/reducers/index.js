import {combineReducers} from 'redux'
import cookie_reducer from "./cookie_reducer";

export default combineReducers({
  cookie:cookie_reducer
});