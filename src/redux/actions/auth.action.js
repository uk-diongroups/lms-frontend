import * as t from 'redux/types/auth.type';
import * as message from 'redux/types/message.type';
import { URL } from 'config/url';
import axios from 'axios';
import { loading, endLoading } from 'redux/loader.dispatcher';
import { errorHandler } from 'utils/errors';
import request from 'config/baseUrl';

export const setCurrentUser = (user) => (dispatch) => {
	dispatch({ type: t.SET_USER, payload: user });
};

export const register = (userData) => async (dispatch) => {
	loading('register');
	try {
		const {
			data: {
				data: { merchant, token },
			},
		} = await axios.post(`${URL}/auth/register`, userData);

		localStorage.setItem('merchant', JSON.stringify(merchant));
		localStorage.setItem('merchant_token', token);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Sign up was successful.',
		});
	} catch (err) {
		return Promise.reject(errorHandler(err));
	}
	endLoading('register');
};

export const fetchDepartments = (value) => async (dispatch) => {
	loading('fetchDepartments');
	try {
		const {
			data: { data },
		} = await axios.get(`${URL}/users/all/departments`, value);

		dispatch({
			type: t.GET_DEPARTMENTS,
			payload: data,
		});
	} catch (err) {
		errorHandler(err);
	}
	endLoading('fetchDepartments');
};

export const fetchBranches = (value) => async (dispatch) => {
	loading('fetchBranches');
	try {
		const {
			data: { data },
		} = await axios.get(`${URL}/users/all/branches`, value);

		dispatch({
			type: t.GET_BRANCHES,
			payload: data,
		});
	} catch (err) {
		errorHandler(err);
	}
	endLoading('fetchBranches');
};

export const login = (userData) => async (dispatch) => {
	loading('login');
	try {
		const {
			data: {
				data: { access_token: token, employee },
			},
		} = await axios.post(`${URL}/auth/login`, userData);

		localStorage.setItem('_token', token);
		localStorage.setItem('ukdion_employee', JSON.stringify(employee));
		dispatch(setCurrentUser(employee));
	} catch (err) {
		endLoading('login');
		return Promise.reject(errorHandler(err));
	}
	endLoading('login');
};

export const forgetPassword = (value) => async (dispatch) => {
	loading('forgetPassword');
	try {
		await axios.post(`${URL}/auth/forgot-password`, value);

		dispatch({
			type: message.GET_SUCCESS,
			payload: '',
		});
	} catch (err) {
		errorHandler(err);
	}
	endLoading('forgetPassword');
};

export const resetPassword = (value) => async (dispatch) => {
	loading('resetPassword');
	try {
		await axios.post(`${URL}/auth/reset-password`, value);

		dispatch({
			type: message.GET_SUCCESS,
			payload: 'Password reset was successful',
		});
	} catch (err) {
		let customError = {};
		if (err && err.response) {
			customError[err.response.status] = err.response.data.message || err.response.data.error;
		}

		errorHandler(err, dispatch, customError);
	}
	endLoading('resetPassword');
};

export const logoutUser = () => (dispatch) => {
	// remove token from local storage
	localStorage.removeItem('_token');
	localStorage.removeItem('ukdion_employee');
	dispatch(setCurrentUser({}));
};
