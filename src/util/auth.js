import jwt_decode from 'jwt-decode';
import store from 'redux/store';
import * as t from 'redux/types/message.type';

/**
 * Check Expired Token
 * @type {Object}
 * @property {string} bridgMe : true || false
 * @property {string} password
 */

export const checkExpiredToken = () => {
	const current_time = Date.now() / 1000;
	// Check for token
	const token = localStorage.getItem('_token');

	if (token) {
		const decoded = jwt_decode(token);

		if (decoded.exp < current_time) {
			store.dispatch({
				type: t.GET_ERRORS,
				payload: 'Your session has expired, kindly login again',
			});

			return false;
		}
		return true;
	}
	return false;
};
