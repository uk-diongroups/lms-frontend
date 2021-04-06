import React from 'react';
import styled from 'styled-components';
import logo from 'assets/img/logo.svg';
import authbg from 'assets/img/authbg.png';
import notification from 'assets/img/notification.svg';

const Wrapper = styled.div`
	position: relative;
	height: 70px;
	padding: 20px 33px;
	padding-right: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	margin-bottom: 14px;
	box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.04);
`;

const LeftWrapper = styled.div`
	display: flex;
	align-items: center;
	ul {
	}
	& > img {
		height: 38px;
		width: 38px;
		border-radius: 50%;
		margin-right: 21px;
	}
	p {
		color: #23286b;
		font-size: 1rem;
		font-family: 'Rubik', sans-serif;
		font-weight: 400;
	}
	div {
		position: relative;
		margin-right: 23px;
		img {
			height: 100%;
		}
		span {
			font-size: 0.625rem;
			position: absolute;
			font-family: 'Rubik', sans-serif;
			background: #6554c0;
			border: 1px solid transparent;
			border-radius: 50%;
			height: 14px;
			width: 14px;
			color: white;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: 2px;
			top: -3px;
			padding: 5px;
		}
	}
`;

const TopBar = styled.div``;

const Header = ({ children }) => {
	return (
		<Wrapper>
			<img src={logo} />
			<LeftWrapper>
				<div>
					<img src={notification} />
					<span>6</span>
				</div>
				<img src={authbg} />
				<p>Nimi Martins</p>
			</LeftWrapper>
		</Wrapper>
	);
};

export default Header;
