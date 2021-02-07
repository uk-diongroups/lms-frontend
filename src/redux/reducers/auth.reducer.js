import * as t from 'redux/types/auth.type';
import { isEmpty } from 'lodash';

const initialState = {
	user: {},
	notifications: [],
	isAuthenticated: false,
};

/**
 * Auth reducer
 * @param {object} state
 * @param {object} action
 * @return {{state : object}}
 */

const auth = (state = initialState, action) => {
	switch (action.type) {
		case t.SET_USER:
			return {
				...state,
				user: action.payload,
				isAuthenticated: !isEmpty(action.payload),
			};
		case t.GET_NOTIFICATION:
			return {
				...state,
				notifications: action.payload,
			};
		default:
			return state;
	}
};

export default auth;
