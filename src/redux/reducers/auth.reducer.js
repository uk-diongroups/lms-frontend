import * as t from 'redux/types/auth.type';
import { isEmpty } from 'lodash';

const initialState = {
  user: {},
  isAuthenticated: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.SET_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: !isEmpty(payload),
      };
    default:
      return state;
  }
};

export default auth;
