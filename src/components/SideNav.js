import React from 'react';
import generateID from 'uuid/v4';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import icons from 'assets/icons/icon-collections.svg';

const sideMenus = [
	{
		menuName: 'Home',
		iconName: 'home',
		path: '/app/home',
	},
	{
		menuName: 'Dashboard',
		iconName: 'dashboard',
		path: '/app/dashboard/',
	},
	{
		menuName: 'My Courses',
		iconName: 'courses',
		path: '/app/courses',
	},
	{
		menuName: 'Assessments',
		iconName: 'assessments',
		path: '/app/assessments',
	},

	{
		menuName: 'Settings',
		iconName: 'settings',
		path: '/app/settings',
	},
];
const Wrapper = styled.div`
	position: relative;
	padding-left: 17px;
	padding-right: 9px;
	width: 275px;

	ul {
		margin-top: 34px;
		li {
			width: 100%;

			a {
				color: #4f5d74;
				display: block;
				border-radius: 0px 100px 100px 0px;
				padding: 13px 0px;
				padding-left: 22px;
				display: flex;
				align-items: center;
				font-size: 1rem;
				font-family: 'Rubik', sans-serif;
				&.active {
					background: rgba(134, 147, 201, 0.08);
					span {
						font-weight: 600;
					}
				}
				svg {
					height: 16px;
					width: 16px;
					margin-right: 12px;
				}
			}
		}
	}
`;

const SideNav = ({ state, setState }) => {
	return (
		<Wrapper>
			<ul className={state}>
				{sideMenus.map(({ path, menuName, iconName }) => (
					<li key={generateID()}>
						<NavLink to={path}>
							<svg>
								<use xlinkHref={`${icons}#${iconName}`} />
							</svg>
							<span>{menuName}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</Wrapper>
	);
};

export default SideNav;
