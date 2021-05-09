import * as t from 'redux/types/auth.type';
import { isEmpty } from 'lodash';

const initialState = {
	user: {},
	isAuthenticated: false,
	departments: [],
	branches: [],
};

const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case t.SET_USER:
			return {
				...state,
				user: payload,
				isAuthenticated: !isEmpty(payload),
			};
		case t.GET_DEPARTMENTS:
			return {
				...state,
				departments: payload,
			};
		case t.GET_BRANCHES:
			return {
				...state,
				branches: payload,
			};
		default:
			return state;
	}
};

export default auth;
