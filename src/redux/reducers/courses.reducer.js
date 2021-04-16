import * as t from 'redux/types/courses.type';
import { isEmpty } from 'lodash';

const initialState = {
	courses: [],
	course: {},
};

const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case t.GET_COURSES:
			return {
				...state,
				courses: payload.courses,
			};
		case t.GET_COURSE:
			return {
				...state,
				course: payload,
			};
		default:
			return state;
	}
};

export default auth;
