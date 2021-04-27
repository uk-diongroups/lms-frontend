import React from 'react';
import { Link } from 'react-router-dom';
import { getAssessments } from 'redux/actions/assessment.action';
import styled from 'styled-components';
import Doodle from '../../../assets/img/doodle.svg';
import Sally from '../../../assets/img/Saly-16.svg';
import { useDispatch, connect, useSelector } from 'react-redux';
import { H1, DashboardNav, ButtonSmall } from 'components/Styles';
import classnames from 'classnames';
import { getLoadingState } from 'utils/functions';
import { BlockLoader } from 'components/Loaders';
import notebook from 'assets/img/book.svg';
import useAssessment from 'hooks/assessment';

const Wrapper = styled.div`
	padding: 30px 60px 33px;
`;

export const Monthly = styled.div`
	display: grid;
	grid-template-columns: 52% auto;
	text-align: justify;
	h4 {
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 44px;
		letter-spacing: 0.02em;
		color: #1b2056;
		width: 486px;
	}
	p {
		font-style: normal;
		width: 414px;
		font-weight: normal;
		font-size: 13px;
		line-height: 32px;
		letter-spacing: 0.02em;
		color: #333333;
	}
	.btn-default {
		padding: 16px 59px;
		background: #dcdeed;
		border-radius: 6px;
		border: 0px;
		cursor: pointer;
	}
	.btn-success {
		background: #0ba759;
		border-radius: 6px;
		padding: 16px 59px;
		border: 0;
		color: white;
		cursor: pointer;
		a {
			color: white;
		}
	}
`;

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
				setCurrentAssessments([...assessments?.filter((assessment) => assessment?.status !== null)]);
			}
		}
	}, [assessments, active]);

	console.log(currentAssessments);

	return (
		<>
			<Wrapper>
				<DashboardNav>
					<li
						className={classnames('', {
							active: active === 1,
						})}
						onClick={() => {
							setActive(1);
						}}
					>
						Active
					</li>
					<li
						className={classnames('', {
							active: active === 2,
						})}
						onClick={() => {
							setActive(2);
						}}
					>
						Completed
					</li>
					{/* <li
						className={classnames('', {
							active: active === 3,
						})}
						onClick={() => setActive(3)}
					>
						Missed
					</li> */}
				</DashboardNav>

				{loadingAssessment ? (
					<BlockLoader />
				) : (
					currentAssessments?.map((assessment) => (
						<div className='assessment-container'>
							<div className='assessment-container__img'>
								<img src={notebook} />
							</div>

							<p>{assessment.name}</p>
							<p>{convertDurationToMins(assessment?.durations)} minutes</p>
							{active === 1 ? (
								<ButtonSmall
									onClick={() => {
										history.push(`/app/assessment/questions/${assessment?.id}`);
									}}
									disabled={assessment.questions.length === 0}
								>
									Take Assessment
								</ButtonSmall>
							) : (
								<p>{Number.isNaN(assessment?.score) ? 0 : assessment?.score}</p>
							)}
						</div>
					))
				)}
			</Wrapper>
		</>
	);
};

export default connect(({ assessments: { assessments } }) => ({ assessments }), null)(Assessment);

{
	/* <Monthly>
					<div>
						<h4>Monthly Employee Assesment</h4>
						<p>
							This monthly assesment is strictly meant for all UK-DION group staff. Be careful to answer
							the questions corretly as your score might be part of your performance appraisal.
						</p>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7%' }}>
							<button className='btn btn-success'>
								<Link to='/app/questions'>PROCEED TO ASSESSMENT</Link>
							</button>
						</div>
					</div>

					<div>
						<img src={Doodle} alt='' />
						<img src={Sally} alt='' style={{ width: 'auto', height: 'auto' }} />
					</div>
				</Monthly> */
}
