import { FETCH_LANGUAGE, SWITCH_LANGUAGE } from '../actions/types';

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_LANGUAGE:
      return action.payload;
    case SWITCH_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
