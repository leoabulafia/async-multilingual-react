import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/App';

import './index.css';
//required by material-ui
import 'typeface-roboto';

//redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
console.log('env is: ', process.env.NODE_ENV);
