import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import './style/index.css';
import Homepage from './components/Homepage';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

//create the redux store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
