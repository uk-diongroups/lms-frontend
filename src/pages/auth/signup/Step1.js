import React from 'react';
import styled from 'styled-components';
import InputField from 'components/form/Input';
import { Button, CenterDiv } from 'components/Styles';

const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	background: #ffffff;
	border-radius: 4px;
	background: #ffffff;
	border-radius: 4px;
	max-width: 550px;
	width: 100%;
	padding: 48px 50px 46px;
	position: relative;
	box-sizing: border-box;
	border-radius: 4px;
	h2 {
		text-align: center;
		font-size: 1.875rem;
		color: #344563;
		font-weight: bold;
	}
	p {
		text-align: center;
		color: #344563;
		font-size: 14px;
		margin-bottom: 62px;
	}
`;
export default ({ onNav }) => {
	return (
		<Wrapper>
			<h2>Create a new account</h2>
			<p>Please enter your credentials to proceed.</p>
			<form>
				<InputField label='Full Name' />
				<InputField label='Email Address' />
				<InputField label='Password' />
				<CenterDiv>
					<Button onClick={() => onNav('add')} type='button'>
						Proceed to next step
					</Button>
				</CenterDiv>
			</form>
		</Wrapper>
	);
};
