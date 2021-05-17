import { BlockLoader, ButtonLoader, OverlayLoader } from 'components/Loaders';
import useAssessment from 'hooks/assessment';
import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getAssessment, submitQuestions } from 'redux/actions/assessment.action';
import styled from 'styled-components';
import { convertToChar, getLoadingState } from 'utils/functions';
import classnames from 'classnames';

import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';
import Button from 'components/Button';

const Questions = withRouter(({ history, assessmentId, assessment, finishModal }) => {
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

	React.useEffect(() => {
		if (finishModal) {
			dispatch(submitQuestions(assessmentId, questions)).then(() => {
				history.push(`/app/assessment/result/${assessmentId}`);
			});
		}
	}, [finishModal]);

	const handleClick = (type) => {
		setActiveQuestion((activeQuestion) => {
			return type === 'next' ? ++activeQuestion : --activeQuestion;
		});
	};

	return (
		<>
			<div className='questions__header'>
				{/* <div style={{ width: '90%', margin: 'auto' }}> */}
				<div className='questions__direction'>
					<div className='questions__direction-left'>
						<button
							className='btn-left'
							onClick={() => handleClick('back')}
							disabled={activeQuestion === 0 || finishModal}
						>
							&#60;
						</button>
					</div>
					<div className='questions__direction-right'>
						<button
							className='btn-right'
							onClick={() => handleClick('next')}
							disabled={
								activeQuestion === questions.length - 1 ||
								!Boolean(questions[activeQuestion]?.answer || finishModal)
							}
						>
							&#62;
						</button>
					</div>
					{/* <p></p> */}
					<p>
						{activeQuestion + 1}/{questions.length}
					</p>
				</div>
				<div className='questions__progress'>
					<div className='bar' style={{ width: `${percentage}%` }}></div>
				</div>
				<p className='questions__percent'>{percentage}% complete</p>
				{/* </div> */}
			</div>

			<div>
				<div className='questions__question'>
					<div className='number'>{activeQuestion + 1}</div>
					<p>{questions[activeQuestion]?.question}</p>
				</div>
				<div className='questions__answer'>
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
				</div>

				<div>
					<Button
						disabled={!Boolean(questions[activeQuestion]?.answer) || loadingSubmit || finishModal}
						onClick={() => {
							if (activeQuestion === questions.length - 1) {
								dispatch(submitQuestions(assessmentId, questions)).then(() => {
									history.push(`/app/assessment/result/${assessmentId}`);
								});
							} else {
								handleClick('next');
							}
						}}
						block
						variant='primary'
					>
						{loadingSubmit ? (
							<ButtonLoader />
						) : activeQuestion === questions.length - 1 ? (
							'Submit'
						) : (
							'Continue'
						)}
					</Button>
				</div>
			</div>
			{finishModal && loadingSubmit && <OverlayLoader text='Time is up... Submitting' />}
		</>
	);
});

export default connect(
	({ assessments: { questions: assessmentQuestions, assessment } }) => ({ assessmentQuestions, assessment }),
	null,
)(Questions);
