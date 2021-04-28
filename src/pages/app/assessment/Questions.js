import { BlockLoader, ButtonLoader } from 'components/Loaders';
import useAssessment from 'hooks/assessment';
import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getAssessment, submitQuestions } from 'redux/actions/assessment.action';
import styled from 'styled-components';
import { convertToChar, getLoadingState } from 'utils/functions';
import classnames from 'classnames';

import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

const TimeRemain = styled.div`
	h4 {
		font-style: normal;
		font-weight: normal;
		font-size: 17px;
		line-height: 23px;
		text-align: center;
		letter-spacing: 0.02em;
		color: #f97319;
	}
	h2 {
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 44px;
		letter-spacing: 0.02em;
		color: #1b2056;
		opacity: 0.7;
	}

	.percent {
		text-align: left;
		margin-top: -2%;
		font-size: 13px;
		letter-spacing: 0.02em;
		color: #b3b3b3;
		font-style: italic;
		line-height: 32px;
	}
`;

const Direction = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	.left {
		text-align: left;
		.btn-left {
			width: 40px;
			height: 40px;
			left: 0.5px;
			top: 37.5px;
			background: #f2f4f8;
			border-radius: 8px;
			border: 0;
			cursor: pointer;
		}
	}
	.right {
		text-align: right;
		.btn-right {
			width: 40px;
			height: 40px;
			right: 0.5px;
			top: 37.5px;
			background: #f2f4f8;
			border-radius: 8px;
			border: 0;
			cursor: pointer;
		}
	}
	p {
		text-align: right;
		font-size: 13px;
		letter-spacing: 0.02em;
		color: #b3b3b3;
		line-height: 32px;
		margin-top: 12px;
	}
`;

const Progress = styled.div`
	margin: 0px auto 20px;
	padding: 0;
	width: 100%;
	height: 5px;
	overflow: hidden;
	background: #e5e5e5;
	border-radius: 6px;

	.bar {
		position: relative;
		float: left;
		min-width: 1%;
		height: 100%;
		background: #0ba759;
	}
`;
const Question = styled.div`
	display: grid;
	grid-template-columns: 5% auto 11%;
	width: 85%;
	margin: auto;
	.number {
		width: 30px;
		height: 30px;
		background: #f8f9fb;
		text-align: center;
		border-radius: 19px;
		font-weight: 500;
		font-size: 21px;
		line-height: 32px;
		letter-spacing: 0.02em;
		color: #1b2056;
	}
	p {
		font-size: 16px;
		line-height: 32px;
		letter-spacing: 0.02em;
		color: #333333;
		order: 1;
		margin: 0px 32px;
	}
`;

const Answer = styled.div`
	width: 70%;
	margin-top: 3%;
	margin-left: auto;
	margin-right: auto;
	option {
		width: fit-content;
		background-color: brown;
		padding: 15px;
		background: #ffffff;
		border: 1px solid #f2f4f8;
		box-shadow: 0px 8px 48px #f8f9fb;
		margin: 16px 0px;
		cursor: pointer;
		&.active {
			border: 1px solid #0ba759;
			transition: 0.5s all;
		}
	}
`;
const Btn = styled.div`
	width: 70%;
	margin: auto;
	button {
		background: #0ba759;
		width: 100%;
		margin: auto;
		color: white;
		border: 0;
		padding: 15px;
		border-radius: 3px;
		cursor: pointer;
	}
`;

const Questions = withRouter(({ history, assessmentId, assessment }) => {
	const { formatOptions, calculatePercentageCompleted } = useAssessment();

	// const loadingAssessment = useSelector(getLoadingState('getAssessments'));
	const loadingSubmit = useSelector(getLoadingState('submitQuestions'));

	const [questions, setQuestions] = React.useState([]);
	const [activeQuestion, setActiveQuestion] = React.useState(0);
	const [percentage, setPercentage] = React.useState(0);

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!isEmpty(assessment)) {
			setQuestions([...assessment?.questions?.map((question) => ({ ...question, answer: '' }))]);
		}
	}, [assessment]);

	React.useEffect(() => {
		let percentage = calculatePercentageCompleted(activeQuestion, questions.length);
		setPercentage(percentage);
	}, [activeQuestion]);

	const handleClick = (type) => {
		setActiveQuestion((activeQuestion) => {
			return type === 'next' ? ++activeQuestion : --activeQuestion;
		});
	};

	return (
		<>
			<TimeRemain>
				<div style={{ width: '90%', margin: 'auto' }}>
					<Direction>
						<div className='left'>
							<button
								className='btn-left'
								onClick={() => handleClick('back')}
								disabled={activeQuestion === 0}
							>
								&#60;
							</button>
						</div>
						<div className='right'>
							<button
								className='btn-right'
								onClick={() => handleClick('next')}
								disabled={
									activeQuestion === questions.length - 1 ||
									!Boolean(questions[activeQuestion]?.answer)
								}
							>
								&#62;
							</button>
						</div>
						<p></p>
						<p>
							{activeQuestion + 1}/{questions.length}
						</p>
					</Direction>
					<Progress className='progress'>
						<div className='bar' style={{ width: `${percentage}%` }}></div>
					</Progress>
					<p className='percent'>{percentage}% complete</p>
				</div>
			</TimeRemain>

			<div>
				<Question>
					<div className='number'>{activeQuestion + 1}</div>
					<p>{questions[activeQuestion]?.question}</p>
				</Question>
				<Answer>
					{formatOptions(questions[activeQuestion])?.map((option, i) => (
						<div className='a-i-c'>
							<span className='mr-8'>{convertToChar(i + 65)}.</span>
							<option
								value={option?.value}
								key={option?.value}
								onClick={(e) => {
									const { value } = e.target;
									questions[activeQuestion].answer = value;
									setQuestions([...questions]);
								}}
								className={classnames('', {
									active: option?.value === questions[activeQuestion].answer,
								})}
							>
								{option?.name}
							</option>
						</div>
					))}
				</Answer>

				<Btn>
					<button
						disabled={!Boolean(questions[activeQuestion]?.answer) || loadingSubmit}
						onClick={() => {
							if (activeQuestion === questions.length - 1) {
								dispatch(submitQuestions(assessmentId, questions)).then(() => {
									history.push(`/app/assessment/result/${assessmentId}`);
								});
							} else {
								handleClick('next');
							}
						}}
					>
						{loadingSubmit ? (
							<ButtonLoader />
						) : activeQuestion === questions.length - 1 ? (
							'Submit'
						) : (
							'Continue'
						)}
					</button>
				</Btn>
			</div>
		</>
	);
});

export default connect(
	({ assessments: { questions: assessmentQuestions, assessment } }) => ({ assessmentQuestions, assessment }),
	null,
)(Questions);
