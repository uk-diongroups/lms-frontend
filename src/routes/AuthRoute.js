import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from 'components/ErrorBoundary';
import Toast from 'components/Toast';

const AuthRoute = ({ component: Component, layout: Layout, location, isAuthenticated, path, ...rest }) => {
	return (
		<Route
			path={path}
			{...rest}
			render={(props) => {
				// if user is authenticated, redirect to homepage
				if (isAuthenticated) {
					return <Redirect to='/app' />;
				} else {
					return (
						<ErrorBoundary>
							<Layout location={location}>
								<Component {...props} />
							</Layout>
							<Toast />
						</ErrorBoundary>
					);
				}
			}}
		/>
	);
};

// AuthRoute.propTypes = {
// 	component: propTypes.object.isRequired,
// 	auth: propTypes.shape({
// 		isAuthenticated: propTypes.bool.isRequired,
// 	}),
// };

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(AuthRoute);
