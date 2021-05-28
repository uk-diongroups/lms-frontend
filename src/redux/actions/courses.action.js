import request from 'config/baseUrl';
import { endLoading, loading } from 'redux/loader.dispatcher';
import * as t from 'redux/types/courses.type';
import { errorHandler } from 'utils/errors';

export const getCourses = () => async (dispatch) => {
	loading('getCourses');
	try {
		const {
			data: { data },
		} = await request.get(`/course`);

		dispatch({
			type: t.GET_COURSES,
			payload: { courses: data.docs, totalCourses: data.totalDocs },
		});

		endLoading('getCourses');
		return Promise.resolve();
	} catch (err) {
		errorHandler(err);
	}
	endLoading('getCourses');
};

export const getCourse = (id) => async (dispatch) => {
	loading('getCourse');
	try {
		const {
			data: { data },
		} = await request.get(`/course/${id}`);

		console.log({ data });

		dispatch({
			type: t.GET_COURSE,
			payload: data[0],
		});

		endLoading('getCourse');
		return Promise.resolve();
	} catch (err) {
		errorHandler(err);
	}
	endLoading('getCourse');
};
