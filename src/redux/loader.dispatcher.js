import * as t from 'redux/types/load.type';
import store from 'redux/store';

/**
 * Dont overthink about this function. As functions are unique so are lodtypes
 * @param {string} loadType
 */

export const loading = (loadType) => {
  return store.dispatch({ type: t.LOADING, payload: loadType });
};

export const endLoading = (loadType) => {
  return store.dispatch({ type: t.END_LOADING, payload: loadType });
};
