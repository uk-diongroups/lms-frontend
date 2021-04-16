import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from 'components/ErrorBoundary';
// import Toast from 'components/Toast';
const PrivateRoute = ({ user, isAuthenticated, layout: Layout, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated) {
					return (
						<ErrorBoundary>
							<Layout>
								<Component {...props} />
							</Layout>
							{/* <Toast /> */}
						</ErrorBoundary>
					);
				} else {
					return <Redirect to='/auth/login' />;
				}
			}}
		/>
	);
};

const map_state_to_props = ({ auth, loader }) => ({
	isAuthenticated: auth.isAuthenticated,
	user: auth.user,
	loading: loader.loading,
});

export default connect(map_state_to_props, null)(PrivateRoute);
