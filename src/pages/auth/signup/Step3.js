import React from 'react';
import styled from 'styled-components';
import { Button, CenterDiv } from 'components/Styles';
import regcomplete from 'assets/img/regcomplete.svg';

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
	height: 100%;
	h2 {
		text-align: center;
		font-size: 1.875rem;
		color: #344563;
		margin-bottom: 23px;
		font-weight: bold;
	}
	img {
		width: 100%;
	}
`;
export default ({ onNav, history }) => {
	return (
		<Wrapper className='auth_form-content'>
			<img src={regcomplete} />
			<h2>Registration Complete</h2>
			<CenterDiv>
				<Button onClick={() => history.push('/app/home')}>Go to Learnings</Button>
			</CenterDiv>
		</Wrapper>
	);
};
