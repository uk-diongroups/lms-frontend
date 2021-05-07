import React from 'react';
import generateID from 'uuid/v4';
import logo from 'assets/img/logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import icons from 'assets/icons/icon-collections.svg';
import { logoutUser } from 'redux/actions/auth.action';
import { useDispatch } from 'react-redux';

const sideMenus = [
	{
		menuName: 'Dashboard',
		iconName: 'dashboard',
		path: '/app/dashboard/',
	},
	{
		menuName: 'Academy',
		iconName: 'home',
		path: '/app/academy',
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
	{
		menuName: 'Logout',
		iconName: 'settings',
		path: '/logout',
	},
];

const SideNav = withRouter(({ history, state }) => {
	const dispatch = useDispatch();
	return (
		<div className='sidenav'>
			<div className='sidenav__logo'>
				<img src={logo} alt='logo' />
			</div>
			<ul className={`sidenav__list ${state}`}>
				{sideMenus.map(({ path, menuName, iconName }) => (
					<li key={generateID()}>
						<NavLink
							to={path}
							onClick={(e) => {
								e.preventDefault();
								console.log(e, menuName);
								if (menuName === 'Logout') {
									dispatch(logoutUser());
								} else {
									history.push(path);
								}
							}}
						>
							<svg>
								<use xlinkHref={`${icons}#${iconName}`} />
							</svg>
							<span>{menuName}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
});

export default SideNav;
