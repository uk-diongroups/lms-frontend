import notebook from 'assets/img/book.svg';
import classnames from 'classnames';
import Button from 'components/Button';
import { BlockLoader } from 'components/Loaders';
import useAssessment from 'hooks/assessment';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAssessments } from 'redux/actions/assessment.action';
import { getLoadingState } from 'utils/functions';

const Assessment = ({ assessments, history }) => {
	const dispatch = useDispatch();
	const { convertDurationToMins } = useAssessment();
	const [active, setActive] = React.useState(1);

	const loadingAssessment = useSelector(getLoadingState('getAssessments'));
	const [currentAssessments, setCurrentAssessments] = React.useState([]);

	React.useEffect(() => {
		dispatch(getAssessments());
	}, []);

	React.useEffect(() => {
		if (assessments?.length) {
			if (active === 1) {
				setCurrentAssessments([...assessments?.filter((assessment) => assessment?.completed_at === null)]);
			}

			if (active === 2) {
				setCurrentAssessments([...assessments?.filter((assessment) => assessment?.completed_at !== null)]);
			}
		}
	}, [assessments, active]);

	// console.log(currentAssessments);

	return (
		<div className='container container--slg mt-24'>
			<ul className='nav'>
				<li
					className={classnames('nav__list', {
						active: active === 1,
					})}
					onClick={() => {
						setActive(1);
					}}
				>
					Active
				</li>
				<li
					className={classnames('nav__list', {
						active: active === 2,
					})}
					onClick={() => {
						setActive(2);
					}}
				>
					Completed
				</li>
			</ul>

			{loadingAssessment ? (
				<BlockLoader />
			) : currentAssessments.length === 0 ? (
				<p>No assessments</p>
			) : (
				currentAssessments?.map((assessment) => (
					<div className='assessment-container'>
						<div className='assessment-container__img'>
							<img src={notebook} />
						</div>

						<p>{assessment?.assesments_id?.name}</p>
						<p>{convertDurationToMins(assessment?.assesments_id?.durations)} minutes</p>
						{active === 1 ? (
							<Button
								variant='primary'
								onClick={() => {
									history.push(`/app/assessment/questions/${assessment?.assesments_id?.id}`);
								}}
								disabled={assessment?.assesments_id?.questions?.length === 0}
							>
								Take Assessment
							</Button>
						) : (
							<p>{Number.isNaN(assessment?.score) ? 0 : assessment?.score}</p>
						)}
					</div>
				))
			)}
		</div>
	);
};

export default connect(({ assessments: { assessments } }) => ({ assessments }), null)(Assessment);
