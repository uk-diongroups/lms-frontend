import React from 'react';
import styled from 'styled-components';
import logo from 'assets/img/logoinverse.svg';
import authbg from 'assets/img/authbg.png';

const Wrapper = styled.div`
	position: relative;
	height: 100px;
	padding: 30px 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	margin-bottom: 40px;
`;

const LeftWrapper = styled.div`
	display: flex;
	ul {
	}
	img {
		height: 60px;
		width: 60px;
		border-radius: 50%;
	}
`;

const TopBar = styled.div``;

const Header = ({ children }) => {
	return (
		<Wrapper>
			<img src={logo} />
			<LeftWrapper>
				<ul>
					<li className='active'>Dashboard</li>
					<li>Settings</li>
				</ul>
				<img src={authbg} />
			</LeftWrapper>
		</Wrapper>
	);
};

export default Header;
