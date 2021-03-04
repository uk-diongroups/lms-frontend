import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import AuthHeader from 'components/AuthHeader';
// import Toast from 'components/Toast';

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<ErrorBoundary>
						<div className='app'>
							<section className='main__parent--container'>
								<Component {...props} />
								{/* <Toast /> */}
							</section>
						</div>
					</ErrorBoundary>
				);
			}}
		/>
	);
};

export default PublicRoute;
