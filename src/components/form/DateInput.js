import React from 'react';
import styled from 'styled-components';
import calendar from 'assets/icons/input_calendar.svg';

const InputWrapper = styled.div`
	position: relative;
	width: 270px;
	label {
		margin-bottom: 7px;
		display: block;
		font-size: 0.9rem;
	}
	& > div {
		position: relative;
	}
	img {
		position: absolute;
		right: 10px;
		bottom: 12px;
	}
	// input[type='date']::-webkit-calendar-picker-indicator {
	// 	background: none;
	// 	display: none;
	// }
`;

const Input = styled.input`
	position: relative;
	display: inline-block;
	width: 100%;
	min-width: 0;
	padding: 7px 14px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 13px;
	line-height: 1.5715;
	background: #f9f9fa;
	background-image: none;
	border: 1px solid transparent;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	display: -ms-inline-flexbox;
	display: inline-flex;
	box-sizing: border-box;
	border-radius: 3px;
	&:focus {
		border: 1px solid #201a56;
		outline: none;
	}
	&:disabled {
		opacity: 0.5;
	}
`;

export default ({
	label,
	type = 'text',
	required,
	name,
	onChange,
	value,
	error,
	placeholder = '',
	min,
	max,
	id,
	disabled,
}) => {
	return (
		<InputWrapper>
			{/* {topText && <InputHeader>{topText}</InputHeader>} */}
			{label && (
				<label>
					{label}
					{required && (
						<span className='error' style={{ marginLeft: '5px' }}>
							*
						</span>
					)}
				</label>
			)}

			<div>
				<Input
					type='date'
					placeholder={placeholder}
					name={name}
					onChange={onChange}
					value={value}
					data-test-id='input'
					min={min}
					max={max}
					id={id}
					disabled={disabled}
				/>

				{/* <img src={calendar} alt='calendar' width='15px' /> */}
			</div>

			{error ? <p className='error'>{error}</p> : ''}
		</InputWrapper>
	);
};
