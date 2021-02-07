import * as t from 'redux/types/message.type';
import { logoutUser } from 'redux/actions/auth.action';

export const errorHandler = (err, dispatch) => {
	let customErrors = {};
	if (err && err.response) {
		customErrors[err.response.status] = err.response.data.message || err.response.data.error;
	}
	if (err.response != null) {
		if (err.response.status != null) {
			if (err.response.status === 404) {
				return dispatch({
					type: t.GET_ERRORS,
					payload: customErrors[404] || 'Not found',
				});
			}
			if (err.response.status === 400) {
				if (customErrors[400] === 'Invalid token') {
					dispatch(logoutUser());
					return;
				}
				return dispatch({
					type: t.GET_ERRORS,
					payload: customErrors[400] || 'Request not sent',
				});
			}
			if (err.response.status === 401) {
				if (customErrors[401] === 'Invalid token') {
					dispatch(logoutUser());
					return;
				}
				return dispatch({
					type: t.GET_ERRORS,
					payload: customErrors[401] || 'Not authorized',
				});
			}
			if (err.response.status === 403) {
				return dispatch({
					type: t.GET_ERRORS,
					payload: customErrors[403] || 'Unauthorized User',
				});
			}

			if (err.response.status === 409) {
				return dispatch({
					type: t.GET_ERRORS,
					payload: customErrors[409] || 'Data already exist',
				});
			}

			if (err.response.status === 500) {
				return dispatch({
					type: t.GET_ERRORS,
					payload: customErrors[500] || 'Oops! something went wrong ',
				});
			}
		}
	}
	return dispatch({
		type: t.GET_ERRORS,
		payload: 'We had an issue processing your request. Please try later',
	});
};
