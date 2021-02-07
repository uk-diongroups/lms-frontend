import React from 'react';
import styled from 'styled-components';
import logo from 'assets/img/logo.svg';
import authbg from 'assets/img/authbg.png';
const PageWrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 57% 43%;
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
	box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
	position: relative;
	background-position-x: 50%;
	background-repeat: no-repeat;

	&::after {
		content: '';
		background-color: rgba(39, 6, 123, 0.8);
		position: absolute;
		top: 0;
		height: 100vh;
		width: 100%;
	}

	& > div {
		box-sizing: border-box;
		max-width: 55%;
		margin: 0px auto;
		height: 100%;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 3;
		div:first-child {
			position: absolute;
			top: 40px;
		}
		img {
			// height: 50%;
			// width: 100%;
			// object-fit: cover;
		}
		h2 {
			color: white;
			font-size: 2.85rem;
			line-height: 1.4;
			font-weight: bold;
		}
		p {
			color: white;
			font-size: 1.2rem;
			line-height: 1.4;
			margin-top: 15px;
		}
	}

	@media (max-width: 960px) {
		display: none;
	}
`;

const AuthLayout = ({ children }) => {
	return (
		<PageWrapper>
			<AuthBanner>
				<div>
					<div>
						<img src={logo} />
					</div>

					<div>
						<h2>Shares Recovery Built on Trust</h2>
						<p>
							Your first digital solution; recover your outstanding dividends and shares. Have future
							dividends paid directly into your bank account.
						</p>
					</div>
				</div>
			</AuthBanner>
			<div>{children}</div>
		</PageWrapper>
	);
};

export default AuthLayout;
