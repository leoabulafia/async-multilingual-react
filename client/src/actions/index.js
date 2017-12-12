import { FETCH_LANGUAGE, SWITCH_LANGUAGE } from './types';
import axios from 'axios';

const languages = arr => {
  let newArr = [];
  arr.map(key => newArr.push(key.lang));
  return newArr;
};

const langOpt = (arr, val, val2) => {
  return arr.filter(key => {
    if (val === -1) {
      return 'en';
    }
    return key.lang === val2;
  })[0];
};

export const fetchLanguage = () => dispatch => {
  axios.all([axios.get('/api/lang'), axios.get('/api/content')]).then(
    axios.spread((res1, res2) => {
      let validation = languages(res2.data).indexOf(res1.data);
      dispatch({
        type: FETCH_LANGUAGE,
        payload: langOpt(res2.data, validation, res1.data)
      });
    })
  );
};

export const switchLanguage = language => dispatch => {
  axios.get('/api/content').then(res => {
    dispatch({
      type: SWITCH_LANGUAGE,
      payload: res.data.filter(key => key.lang === language)[0]
    });
  });
};
