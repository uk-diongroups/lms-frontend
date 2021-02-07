import * as t from 'redux/types/auth.type';
import * as message from 'redux/types/message.type';
import { URL } from 'config/url';
import axios from 'axios';
import { loading, endLoading } from 'redux/loader.dispatcher';
import { errorHandler } from 'util/error';
import request from 'config/baseUrl';

export const clearMessage = () => (dispatch) => {
	dispatch({ type: message.CLEAR_MESSAGES });
};

export const register = (userData) => async (dispatch) => {
	loading('register');

	try {
		const {
			data: { data },
		} = await axios.post(`${URL}/v1/onboarding`, userData);

		// dispatch({ type: t.SIGNUP, payload: data });
		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Sign up was successful. Check your email to continue',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('register');
};

export const setCurrentUser = (user) => (dispatch) => {
	dispatch({ type: t.SET_USER, payload: user });
};

export const login = (userData) => async (dispatch) => {
	loading('login');

	try {
		const {
			data: { data },
		} = await axios.post(`${URL}/v1/auth`, userData);

		console.log(data);

		localStorage.setItem('_token', data.token);
		localStorage.setItem('user', JSON.stringify({ ...data, token: undefined }));
		dispatch({
			type: message.GET_SUCCESS,
			payload: '',
		});
		dispatch(setCurrentUser({ ...data, token: undefined }));
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('login');
};

export const getUser = (userType) => async (dispatch) => {
	loading('getUser');
	try {
		const {
			data: { data },
		} = await request.get(`/${userType}/profile`);

		localStorage.setItem('freemind_user', JSON.stringify(data));

		dispatch(setCurrentUser(data));
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('getUser');
};

export const getNotification = (userType) => async (dispatch) => {
	loading('getNotification');
	try {
		const {
			data: { data },
		} = await request.get(`${userType}/profile/notification`);

		// dispatch({
		// 	type: t.GET_NOTIFICATION,
		// 	payload: data,
		// });
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('getNotification');
};

export const notificationSettings = (notification) => async (dispatch) => {
	loading('notificationSettings');
	try {
		await request.put(`customer/profile`, { notification });

		let data = JSON.parse(localStorage.freemind_user || {});
		localStorage.setItem(
			'freemind_user',
			JSON.stringify({
				...data,
				notification,
			}),
		);

		dispatch(setCurrentUser({ ...data, notification }));
		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Notification settings was updated successfully.',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('notificationSettings');
};

export const updateProfile = (userData, userType) => async (dispatch) => {
	loading('updateProfile');
	try {
		const formData = new FormData();
		for (const prop in userData) {
			if (prop !== 'email' && userData[prop] !== undefined) {
				formData.append(prop, userData[prop]);
			}
		}

		const {
			data: { data },
		} = await request.put(`/${userType}/profile`, formData);

		// let data = JSON.parse(localStorage.freemind_user || {});

		localStorage.setItem(
			'freemind_user',
			JSON.stringify({
				...data,
			}),
		);

		dispatch(setCurrentUser({ ...data }));

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'User details was updated successfully.',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('updateProfile');
};

export const resendToken = (email, userType) => async (dispatch) => {
	loading('resendToken');
	try {
		await axios.get(`${URL}/${userType}/auth/resend-verification/${email}`);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Token has been resent successfully',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}

	endLoading('resendToken');
};

export const verifyEmail = (value, userType) => async (dispatch) => {
	loading('verifyEmail');
	try {
		const {
			data: { data },
		} = await axios.post(`${URL}/${userType}/auth/verify-email`, value);

		localStorage.setItem('freemind_token', data?.token);
		localStorage.setItem('freemind_user', JSON.stringify(userType === 'worker' ? data?.worker : data?.customer));
		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Account verified successfully',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}

	endLoading('verifyEmail');
};

export const updatePassword = (userPassword, userType) => async (dispatch) => {
	loading('updatePassword');
	try {
		await request.post(`/${userType}/auth/update-password`, userPassword);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Your password was updated successfully',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('updatePassword');
};

export const forgetPassword = (email, userType) => async (dispatch) => {
	loading('forgetPassword');
	try {
		await axios.post(`${URL}/${userType}/auth/forgot-password`, email);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Check your email to continue',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('forgetPassword');
};

export const resetPassword = (data, userType) => async (dispatch) => {
	loading('resetPassword');
	try {
		await axios.post(`${URL}/${userType}/auth/reset-password`, data);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Password reset was successful',
		});
	} catch (err) {
		errorHandler(err, dispatch);
	}
	endLoading('resetPassword');
};

export const logoutUser = () => (dispatch) => {
	// remove token from local storage
	localStorage.removeItem('_token');
	localStorage.removeItem('user');
	dispatch(setCurrentUser({}));
};
