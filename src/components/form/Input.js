import React from 'react';
import styled from 'styled-components';
import eyeIcon from 'assets/icons/eye-open.svg';
import eyeCloseIcon from 'assets/icons/eye-close.svg';

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 20px;
	width: 100%;
	label {
		margin-bottom: 7px;
		display: block;
		font-size: 0.9rem;
		color: #b0bac9;
	}
	& > div {
		position: relative;
	}
	img {
		position: absolute;
		right: 10px;
		bottom: 12px;
	}
	.icon {
		position: absolute;
		display: block;
		z-index: 2;
		left: 15px;
		height: 20px;
		& + input {
			padding-left: 40px !important;
		}
	}
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	min-width: 0;
	padding: 13px 16px;
	border: 1px solid #d0dae9;
	border-radius: 4px;
	color: #98a9bc;
	font-size: 0.875rem;
	line-height: 1.5715;
	background-color: #fff;
	background-image: none;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	display: inline-flex;
	box-sizing: border-box;
	&:focus {
		border: 1px solid #201a56;
		outline: none;
	}
	&:disabled {
		opacity: 0.5;
	}
`;

const InputField = ({
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
	icon,
	cid,
}) => {
	const [isVisible, setIsVisible] = React.useState(false);

	return (
		<InputWrapper id={cid}>
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
				{icon && <img src={icon} alt='icon' className='icon' />}
				<Input
					type={isVisible ? 'text' : type}
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

				{type === 'password' && (
					<img
						src={isVisible ? eyeIcon : eyeCloseIcon}
						alt=''
						onClick={() => setIsVisible((isVisible) => !isVisible)}
						width='15px'
					/>
				)}
			</div>

			{error ? <p className='error'>{error}</p> : ''}
		</InputWrapper>
	);
};

export default InputField;
