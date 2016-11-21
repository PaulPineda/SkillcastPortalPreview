import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import promise from 'redux-promise';  << using own simple async middleware:
import async from './middleware/async';

import App from './components/connected/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(async)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
