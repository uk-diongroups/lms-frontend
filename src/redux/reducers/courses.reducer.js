import * as t from 'redux/types/courses.type';
import { isEmpty } from 'lodash';

const initialState = {
	courses: [],
	totalCourses: 0,
	course: {},
};

const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case t.GET_COURSES:
			return {
				...state,
				courses: payload.courses,
				totalCourses: payload.totalCourses,
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
