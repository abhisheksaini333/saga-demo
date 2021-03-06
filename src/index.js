import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
