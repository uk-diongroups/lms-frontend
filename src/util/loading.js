import store from 'redux/store';
import { CONTINUE_LOADING } from 'redux/types/message.type';

/**
 * @function
 * @param {string} loadType - Defines the loadType , as functions are uniques , load types are unique
 * @returns - Returns if the loadType is in the loadTypes array
 */

export const isLoading = (loadType) => {
	const loadTypes = store.getState().loader.loadTypes;
	//Dispatch if array is not empty so as to enable component rerender
	if (loadTypes.length) store.dispatch({ type: CONTINUE_LOADING });

	return loadTypes.includes(loadType);
};
