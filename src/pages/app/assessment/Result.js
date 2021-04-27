import React from 'react';
import styled from 'styled-components';
import NotePad from 'assets/img/Saly-26.svg';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAssessment } from 'redux/actions/assessment.action';
import { Link } from 'react-router-dom';
import { getLoadingState } from 'utils/functions';
import { BlockLoader } from 'components/Loaders';

const Wrapper = styled.div`
	padding-left: 200px;
	padding-right: 200px;
	text-align: center;
	h3 {
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 44px;
		letter-spacing: 0.02em;
		color: #1b2056;
		margin: 24px 0px;
	}
	.score {
		width: 597px;
		left: 0px;
		top: 68px;
		display: flex;
		flex-wrap: wrap;
	}
	.status {
		width: 450px;
		background: #505ca4;
		border-radius: 24px 0 0px 24px;
		height: 180px;
		display: flex;
		p {
			font-style: normal;
			font-weight: normal;
			font-size: 15px;
			line-height: 32px;
			letter-spacing: 0.02em;
			color: #ffffff;
			text-align: justify;
			padding: 18px;
			margin-top: 25px;
		}
	}
	.percentage-box {
		width: 147px;
		height: 180px;
		// left: 450px;
		// top: -50px;
		background: #434d89;
		border-radius: 0px 0px 24px 0px;
		h2 {
			font-style: normal;
			font-weight: bold;
			font-size: 32px;
			line-height: 32px;
			letter-spacing: 0.02em;
			color: #ffffff;
			margin: 36px 0px;
		}
		small {
			font-weight: normal;
			font-size: 20px;
			line-height: 32px;
			letter-spacing: 0.02em;
			color: rgba(255, 255, 255, 0.6);
		}
	}
`;

const Message = styled.div`
	margin: auto;
	.btn-success,
	.btn {
		background: #0ba759;
		border-radius: 6px;
		padding: 16px 30px;
		border: 0;
		color: white;
		cursor: pointer;
		font-size: 16px;
	}

	.btn-empty {
		background: none;
		border: none;
		color: #333333;
	}

	p {
		font-style: normal;
		font-weight: normal;
		font-size: 17px;
		line-height: 32px;
		text-align: center;
		letter-spacing: 0.02em;
		color: #333333;
		margin: 24px 0px;
		width: 445px;
	}
`;

const Result = ({ assessment, match: { params } }) => {
	const { assessmentId } = params;
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getAssessment(assessmentId));
	}, []);

	const loading = useSelector(getLoadingState('getAssessment'));

	return (
		<Wrapper>
			{loading ? (
				<BlockLoader />
			) : (
				<>
					<h3>Bravo! You’ve made it</h3>
					<div className='score'>
						<div className='status'>
							<img src={NotePad} alt='' style={{ padding: '16px' }} />
							<p>You’ve successfully completed {assessment?.name}</p>
						</div>
						<div className='percentage-box'>
							<h2>{assessment?.score || 0}</h2>
							<small>Score</small>
						</div>

						<Message>
							<p>
								You can as well check other development courses we’ve specially tailored for our
								employees.
							</p>
							<div>
								<Link className='btn btn-success' to='/app/assessments'>
									Take other courses
								</Link>
							</div>
						</Message>
					</div>
				</>
			)}
		</Wrapper>
	);
};

export default connect(({ assessments: { assessment } }) => ({ assessment }), null)(Result);
