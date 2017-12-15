import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  language: languageReducer,
  router: routerReducer
});
