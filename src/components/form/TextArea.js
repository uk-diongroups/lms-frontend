import React from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.div`
	position: relative;
	margin-bottom: 35px;
	width: 100%;
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
`;

const TextArea = styled.textarea`
	position: relative;
	display: inline-block;
	width: 100%;
	min-width: 0;
	padding: 10px 14px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 13px;
	line-height: 1.5715;
	background-color: #fff;
	background-image: none;
	border: 1px solid rgba(104, 110, 121, 0.32);
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	display: -ms-inline-flexbox;
	display: inline-flex;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	border: 1px solid rgba(228, 228, 228, 0.6);
	border-radius: 5px;
	&:focus {
		border: 1px solid #201a56;
		outline: none;
	}
	&:disabled {
		opacity: 0.5;
	}
`;

const TextAreaField = ({
	label,
	required,
	name,
	onChange,
	value,
	error,
	placeholder = '',
	disabled,
	rows = 4,
	cols = 50,
	style,
}) => {
	return (
		<TextAreaWrapper style={style}>
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
				<TextArea
					placeholder={placeholder}
					name={name}
					onChange={onChange}
					value={value}
					data-test-id='input'
					disabled={disabled}
					rows={rows}
					cols={cols}
				/>
			</div>

			{error ? <p className='error'>{error}</p> : ''}
		</TextAreaWrapper>
	);
};

export default TextAreaField;
