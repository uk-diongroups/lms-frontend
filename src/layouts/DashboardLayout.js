import React from 'react';
import SideNav from 'components/SideNav';
import Header from 'components/Header';
import styled from 'styled-components';

const ParentContainer = styled.div`
	position: relative;
	background-color: #f9fafb;
`;

const ChildContainer = styled.div`
	height: calc(100vh - 84px);
	display: flex;
	box-sizing: border-box;

	@media (max-width: 1000px) {
		width: 100%;
	}
	& > div:nth-child(2) {
		background: white;
		width: calc(100vw - 275px);
		overflow-y: scroll;
		min-height: calc(100vh - 84px);
	}
`;

const DashboardLayout = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [left, setLeft] = React.useState(-230);
<<<<<<< HEAD

	return (
		<ParentContainer>
			<Header isOpen={isOpen} />
			<ChildContainer>
				<SideNav left={left} />
				<div>{children}</div>
=======
	const handleNavBar = () => {
		setLeft(isOpen ? -230 : 0);
		setIsOpen(!isOpen);
	};

	return (
		<ParentContainer>
			<Header handleNavBar={handleNavBar} isOpen={isOpen} />
			<ChildContainer>
				<SideNav left={left} />
				<div handleNavBar={handleNavBar}>{children}</div>
>>>>>>> origin/courseDetails
			</ChildContainer>
		</ParentContainer>
	);
};

export default DashboardLayout;
