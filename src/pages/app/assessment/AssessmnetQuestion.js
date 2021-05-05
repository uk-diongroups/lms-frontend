import { BlockLoader, ButtonLoader } from 'components/Loaders';
import useAssessment from 'hooks/assessment';
import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getAssessment, submitQuestions } from 'redux/actions/assessment.action';
import styled from 'styled-components';
import { getLoadingState } from 'utils/functions';
import { isEmpty } from 'lodash';
import Duration from './Duration';
import Questions from './Questions';

const Wrapper = styled.div`
	padding-top: 20px;
	padding-left: 25px;
	padding-right: 33px;
`;

const AssessmnetQuestion = ({ history, match: { params }, assessmentQuestions, assessment }) => {
	const { assessmentId } = params;

	const loadingAssessment = useSelector(getLoadingState('getAssessment'));

	const [duration, setDuration] = React.useState({});

	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getAssessment(assessmentId));
	}, []);

	React.useEffect(() => {
		if (!isEmpty(assessment)) {
			if (assessment?.durations) {
				const { durations } = assessment;
				setDuration({ ...durations });
			}
		}
	}, [assessment]);

	const submtQuestiononTimeCompleted = () => {};

	return (
		<Wrapper>
			<small>academy/2021assesment/april</small>
			{loadingAssessment ? (
				<BlockLoader />
			) : (
				<div className='questions__block'>
					<Duration duration={duration} />
					<Questions assessmentId={assessmentId} />
				</div>
			)}
		</Wrapper>
	);
};

export default connect(({ assessments: { assessment } }) => ({ assessment }), null)(AssessmnetQuestion);
