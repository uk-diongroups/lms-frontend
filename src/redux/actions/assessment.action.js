import request from 'config/baseUrl';
import * as t from 'redux/types/assessment.type';
import { endLoading, loading } from 'redux/loader.dispatcher';
import { errorHandler } from 'utils/errors';

export const getAssessments = () => async (dispatch) => {
	loading('getAssessments');
	try {
		const {
			data: { data },
		} = await request.get(`/assesment`);

		// let assessments = data.splice(data.length - 10, 10);

		dispatch({
			type: t.GET_ASSESSMENTS,
			payload: { assessments: data },
		});
	} catch (err) {
		errorHandler(err);
	}
	endLoading('getAssessments');
};

export const getAssessment = (assessmentId) => async (dispatch) => {
	loading('getAssessments');
	try {
		const {
			data: { data },
		} = await request.get(`/assesment/${assessmentId}`);

		console.log(data);

		dispatch({
			type: t.GET_ASSESSMENT,
			payload: data,
		});
	} catch (err) {
		errorHandler(err);
	}
	endLoading('getAssessments');
};

export const getQuestionsByAssessmentId = (assessmentId) => async (dispatch) => {
	loading('getQuestionsByAssessmentId');
	try {
		const {
			data: { data },
		} = await request.get(`/question/assesment/${assessmentId}`);

		dispatch({
			type: t.GET_ASSESSMENT_QUESTIONS,
			payload: { questions: data },
		});
	} catch (err) {
		errorHandler(err);
	}
	endLoading('getQuestionsByAssessmentId');
};

export const submitQuestions = (assessmentId, questions) => async (dispatch) => {
	loading('submitQuestions');
	try {
		const formattedQuestions = questions.map((question) => ({
			question: question.id,
			answer: question.answer,
		}));

		const {
			data: { data },
		} = await request.patch(`/assesment/submit-assesment/${assessmentId}`, { data: formattedQuestions });

		console.log(data);
		dispatch({
			type: t.GET_ASSESSMENT_QUESTIONS,
			payload: data,
		});
		// endLoading('submitQuestions');
	} catch (err) {
		errorHandler(err);
	}
	endLoading('submitQuestions');
};
