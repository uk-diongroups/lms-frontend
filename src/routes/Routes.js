import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import DashboardLayout from 'layouts/DashboardLayout';
import AuthLayout from 'layouts/AuthLayout';
import RegisterLayout from 'layouts/RegisterLayout';
import Error404 from '../components/Error404';
import ErrorBoundary from '../components/ErrorBoundary';
import history from 'utils/history';
import { PageLoader } from 'components/Loaders';

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/signup/SignUp'));
// const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
// const VerifyEmail = lazy(() => import('../pages/auth/VerifyEmail'));
// const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'));

const Home = lazy(() => import('../pages/app/home/Home'));
const Dashboard = lazy(() => import('../pages/app/dashboard/Dashboard'));
const Courses = lazy(() => import('../pages/app/courses/Courses'));
const CourseDetails = lazy(() => import('../pages/app/courses/CourseDetails'));
const CourseEnrolled = lazy(() => import('../pages/app/courses/CourseEnrolled'));

const Routes = () => (
	<Router basename={process.env.PUBLIC_URL} history={history}>
		<Suspense fallback={<PageLoader />}>
			<Switch>
				<AuthRoute exact path='/' component={Login} layout={AuthLayout} />

				{/* Patient Routes */}
				<AuthRoute exact path='/auth/login' component={Login} layout={AuthLayout} />
				<AuthRoute exact path='/auth/register' component={Register} layout={RegisterLayout} />
				{/* <AuthRoute exact path='/forgot-password' component={ForgotPassword} layout={AuthLayout} />
				<AuthRoute exact path='/reset-password' component={ResetPassword} layout={AuthLayout} />
				<AuthRoute exact path='/verify' component={VerifyEmail} layout={AuthLayout} /> */}

				<PrivateRoute exact path='/app/home' component={Home} layout={DashboardLayout} />
				<PrivateRoute exact path='/app/dashboard' component={Dashboard} layout={DashboardLayout} />
				<PrivateRoute exact path='/app/courses' component={Courses} layout={DashboardLayout} />
				<PrivateRoute exact path='/app/courses/details' component={CourseEnrolled} layout={DashboardLayout} />
				{/* <PrivateRoute exact path='/app/courses/details' component={CourseDetails} layout={DashboardLayout} /> */}
				<Route component={Error404} />
			</Switch>
		</Suspense>
	</Router>
);

export default Routes;
