import * as t from 'redux/types/courses.type';
import * as message from 'redux/types/message.type';
import { URL } from 'config/url';
import axios from 'axios';
import { loading, endLoading } from 'redux/loader.dispatcher';
import { errorHandler } from 'utils/errors';
import request from 'config/baseUrl';

export const getCourses = (userData) => async (dispatch) => {
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
			payload: data,
		});

		endLoading('getCourse');
		return Promise.resolve();
	} catch (err) {
		errorHandler(err);
	}
	endLoading('getCourse');
};
