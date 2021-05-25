import { BlockLoader } from 'components/Loaders';
import { isEmpty } from 'lodash';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAssessment } from 'redux/actions/assessment.action';
import { getLoadingState } from 'utils/functions';
import Duration from './Duration';
import Questions from './Questions';

const AssessmnetQuestion = ({ history, match: { params }, assessmentQuestions, assessment }) => {
	const { assessmentId } = params;

	const dispatch = useDispatch();

	const loadingAssessment = useSelector(getLoadingState('getAssessment'));

	const [duration, setDuration] = React.useState({});
	const [finishModal, setFinishModal] = React.useState(false);

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

	return (
		<div className='container container--lg'>
			{/* <small>academy/2021assesment/april</small> */}
			{loadingAssessment ? (
				<BlockLoader />
			) : (
				<div className='questions__block'>
					<Duration duration={duration} setFinishModal={setFinishModal} />
					<Questions assessmentId={assessmentId} finishModal={finishModal} />
				</div>
			)}
		</div>
	);
};

export default connect(({ assessments: { assessment } }) => ({ assessment }), null)(AssessmnetQuestion);
