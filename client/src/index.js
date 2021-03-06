import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './containers/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);