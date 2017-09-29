import axios from 'axios';
import {GET_COOKIE} from "./types";

const URL = 'http://192.168.99.100:8080';

const GET_COOKIE_PATH = '/get_cookie';
const SET_COOKIE_PATH = '/set_cookie';

export const getCookie = () => async dispatch => {
  const res = await axios.get(URL+GET_COOKIE_PATH);
  console.log(res);
  dispatch({type: GET_COOKIE, payload: res});
};

export const setCookie = () => async dispatch => {
  const res = await axios.get(URL+SET_COOKIE_PATH);
  console.log('set_cookie', res);
};

