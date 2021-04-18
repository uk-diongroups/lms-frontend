import axios from 'axios';
import { URL } from './url';

const request = axios.create({
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

request.defaults.timeout = 5000;

request.interceptors.request.use(function (config) {
	const token = localStorage.getItem('_token');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});

export default request;
