import React from 'react';
import { InputHeader } from 'styled/commons';
import { FileLoader } from 'components/Loaders';
import styled from 'styled-components';

const InputFileContainer = styled.div`
	width: 100%;
	position: relative;
	padding: 10px 20px;
	width: 100%;
	border: 1px solid #e8e4eb;
	border-radius: 5px;
	outline: none;
	font-size: 0.9rem;
	&:focus-within {
		border: 1px solid #29033e;
	}
	span {
		color: #7a8088;
	}
	input {
		position: absolute;
		top: 0;
		width: 100%;
		opacity: 0;
		z-index: 2999;
	}
	button {
		margin-right: 10px;
	}
	.close {
		position: absolute;
		right: 12px;
		font-size: 1.6rem;
		z-index: 4999999999;
		cursor: pointer;
	}
`;
const InputFile = ({
	label,
	required,
	name,
	handleChange,
	value,
	error,
	placeholder,
	loading,
	topText,
	handleRemove,
}) => {
	return (
		<div>
			<InputHeader>{topText || ''}</InputHeader>
			<label>
				{label}
				{required && (
					<span className='error' style={{ marginLeft: '5px' }}>
						*
					</span>
				)}
			</label>
			<InputFileContainer>
				<input
					type='file'
					placeholder={placeholder}
					name={name}
					onChange={handleChange}
					disabled={loading || value}
					data-testid='file'
					accept='image/* , .pdf ,.doc ,.docx'
				/>
				<button className='button button__purple'>Choose File</button>
				<span>{value ? value : 'No File Chosen'}</span>
				<span
					className='close'
					onClick={() => {
						value && handleRemove();
					}}
				>
					{loading ? <FileLoader /> : value ? '×' : ''}
				</span>
			</InputFileContainer>

			<p className='error'>{error}</p>
		</div>
	);
};

export default InputFile;
