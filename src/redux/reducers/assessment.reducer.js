import * as t from 'redux/types/assessment.type';
import { isEmpty } from 'lodash';

const initialState = {
	assessment: {},
	assessments: [],
	questions: [],
	totalAssessments: 0,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case t.GET_ASSESSMENTS:
			return {
				...state,
				assessments: payload.assessments,
				assessment: {},
			};
		case t.GET_ASSESSMENT:
			return {
				...state,
				assessment: payload,
			};
		case t.GET_ASSESSMENT_QUESTIONS:
			return {
				...state,
				questions: payload.questions,
			};
		default:
			return state;
	}
};
