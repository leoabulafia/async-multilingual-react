import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/App';

import './index.css';
//required by material-ui
import 'typeface-roboto';
//Create history
const history = createHistory();
const reactReduxRouterMiddleware = routerMiddleware(history);

//redux store
export const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk, logger, reactReduxRouterMiddleware)
);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
console.log('env is: ', process.env.NODE_ENV);
