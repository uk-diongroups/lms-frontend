import React from 'react';
import styled from 'styled-components';
import logo from 'assets/img/logo.svg';
import authbg from 'assets/img/authbg.png';
const PageWrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 50% 50%;
	align-items: center;
	position: relative;
	width: 100%;
	@media (max-width: 960px) {
		display: block;
	}
`;

const AuthBanner = styled.div`
	height: 100%;
	background-image: url(${authbg});
	background-size: cover;
	position: relative;
	background-repeat: no-repeat;

	@media (max-width: 960px) {
		display: none;
	}
`;

const AuthLayout = ({ children }) => {
	return (
		<PageWrapper>
			<AuthBanner></AuthBanner>
			<div>{children}</div>
		</PageWrapper>
	);
};

export default AuthLayout;
