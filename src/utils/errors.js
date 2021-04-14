import store from 'redux/store';
import { logoutUser } from 'redux/actions/auth.action';

export const errorHandler = (err) => {
	let customErrors = {};
	if (err && err.response) {
		customErrors[err.response.status] = err.response.data.message || err.response.data.error;
	}
	if (err.response != null) {
		if (err.response.status != null) {
			if (err.response.status === 404) {
				return store.dispatch({
					type: 'GET_ERRORS',
					payload: customErrors[404] || 'Not found',
				});
			}
			if (err.response.status === 400) {
				if (customErrors[400] === 'Invalid token' || customErrors[400] === 'Invalid authorization token') {
					return store.dispatch(logoutUser());
				}
				return store.dispatch({
					type: 'GET_ERRORS',
					payload: customErrors[400] || 'Request not sent',
				});
			}
			if (err.response.status === 401) {
				return store.dispatch({
					type: 'GET_ERRORS',
					payload: customErrors[401] || 'Not authorized',
				});
			}
			if (err.response.status === 403) {
				return store.dispatch({
					type: 'GET_ERRORS',
					payload: customErrors[403] || 'Unauthorized User',
				});
			}

			if (err.response.status === 409) {
				return store.dispatch({
					type: 'GET_ERRORS',
					payload: customErrors[409] || 'Data already exist',
				});
			}

			if (err.response.status === 500) {
				return store.dispatch({
					type: 'GET_ERRORS',
					payload: customErrors[500] || 'Oops! something went wrong ',
				});
			}
		}
	}
	return store.dispatch({
		type: 'GET_ERRORS',
		payload: 'No server response',
	});
};
