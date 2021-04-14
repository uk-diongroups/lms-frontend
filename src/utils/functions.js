import numeral from 'numeral';
import store from 'redux/store';
import * as message from 'redux/types/message.type';
import history from './history';

export const numberWithCommas = (x, money = false) => {
	// if (money) x = (x / 100).toFixed(2);
	return money ? numeral(x).format('0,0.00') : x % 1 !== 0 ? numeral(x).format('0,0.00') : numeral(x).format('0,0');
};

export const notification = (text, success = true) => {
	return store.dispatch({
		type: success ? message.GET_SUCCESS : message?.GET_ERRORS,
		payload: text,
	});
};

export const getLoadingState = (loadType) => (state) => {
	const loadTypes = state.loader.loadTypes;
	return loadTypes.includes(loadType);
};

export const stripText = (str, length = 120) => {
	return str?.length > length ? `${str.substring(0, length)}........` : str;
};

export const getQueryParam = () => {
	// console.log(history);
};
