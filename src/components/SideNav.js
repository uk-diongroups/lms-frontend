import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	max-width: 230px;
	width: 100%;
`;

const TopBar = styled.div`
	height: 100px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	background: #ffffff;
	box-shadow: 0px 8px 30px rgba(0, 5, 58, 0.05);
	border-radius: 15px;

	p {
		color: #68768b;
		font-size: 0.85rem;
	}
	span {
		display: block;
		color: #27067b;
		margin-top: 5px;
		font-size: 1.4rem;
		font-weight: bold;
	}
`;

const BottomBar = styled.div`
	background: #ffffff;
	height: 50vh;
	box-shadow: 0px 8px 30px rgba(0, 5, 58, 0.05);
	border-radius: 15px;
	margin-top: 20px;
	padding: 10px 20px;
	h5 {
		color: #68768b;
		font-size: 0.85rem;
	}
	h3 {
		color: #011632;
		margin-top: 3px;
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 35px;
	}
	.status {
		display: flex;
		border-bottom: 1px solid #d8d8d8;
		margin-bottom: 35px;
	}
`;

const SideNav = ({ children }) => {
	return (
		<Wrapper>
			<TopBar>
				<p>
					Signed in as
					<span>Joshua</span>
				</p>
			</TopBar>

			<BottomBar>
				<h5>Active product package</h5>
				<h3>Shares Recovery</h3>
				<div className='status'>
					<p>In Progress</p>
					<p>Completed</p>
				</div>
				<ul>
					<li>All Assets</li>
					<li>Shares Recovery</li>
					<li>Non Shares Recovery</li>
				</ul>
			</BottomBar>
		</Wrapper>
	);
};

export default SideNav;
