import React from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
// import dropdown from 'assets/img/dropdown.svg';

const SelectWrapper = styled.div`
	position: relative;
	margin-bottom: 25px;
	label {
		margin-bottom: 7px;
		display: block;
		font-size: 0.9rem;
		color: #b0bac9;
	}
	img {
		position: absolute;
		right: 10px;
		bottom: 10px;
	}
`;

export const Select = styled.select`
	position: relative;
	display: inline-block;
	width: 100%;
	min-width: 0;
	padding: 13px 16px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 13px;
	line-height: 1.5715;
	background-color: #fff;
	background-image: none;
	border: 1px solid #e4e9f0;
	border-radius: 4px;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	display: -ms-inline-flexbox;
	display: inline-flex;
	// -moz-appearance: none;
	// -webkit-appearance: none;
	// appearance: none;
	// z-index: 2;
	// background: ${({ background }) => `url(${background}) no-repeat right`};
	// background-position: right 25px top 50%;
	&:focus {
		border: 1px solid #201a56;
		outline: none;
	}
`;

export const SelectContainer = styled.div`
	position: relative;
	background-color: #fff;
	// &:after {
	// 	content: '\\25BC';
	// 	color: #2b7339;
	// 	position: absolute;
	// 	right: 10%;
	// 	top: 15px;
	// 	font-size: 10px;
	// 	bottom: 22px;
	// }
`;

export default ({ label, required, options = [], onChange, disabled, error, name, placeholder, value }) => {
	return (
		<SelectWrapper>
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

			{/* <SelectContainer> */}
			<Select
				onChange={onChange}
				disabled={disabled}
				name={name}
				placeholder={placeholder}
				value={value}
				// background={dropdown}
			>
				<option value=''>{placeholder}</option>
				{options.map((option, i) => (
					<option value={option.value} key={i} disabled={option.disabled || false}>
						{option.name}
					</option>
				))}
			</Select>
			{/* <FiChevronDown /> */}
			{/* </SelectContainer> */}

			{error ? <p className='error'>{error}</p> : ''}
		</SelectWrapper>
	);
};
