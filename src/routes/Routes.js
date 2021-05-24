import { PageLoader } from 'components/Loaders';
import Toast from 'components/Toast';
import AuthLayout from 'layouts/AuthLayout';
import DashboardLayout from 'layouts/DashboardLayout';
import RegisterLayout from 'layouts/RegisterLayout';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Error404 from '../components/Error404';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
// const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
// const VerifyEmail = lazy(() => import('../pages/auth/VerifyEmail'));
// const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'));

const Academy = lazy(() => import('../pages/app/home/Academy'));
const History = lazy(() => import('../pages/app/history/History'));
const Dashboard = lazy(() => import('../pages/app/dashboard/Dashboard'));
const Courses = lazy(() => import('../pages/app/courses/Courses'));
const CourseDetails = lazy(() => import('../pages/app/courses/CourseDetails'));
const Assessment = lazy(() => import('../pages/app/assessment/Assessment'));
const Result = lazy(() => import('../pages/app/assessment/Result'));
const CourseStart = lazy (() => import('../pages/app/courses/CourseStart'));
const AssessmnetQuestion = lazy(() => import('../pages/app/assessment/AssessmnetQuestion'));

const CourseEnrolled = lazy(() => import('../pages/app/courses/CourseEnrolled'));

const Routes = () => (
	<>
		<Router basename={process.env.PUBLIC_URL} history={history}>
			<Suspense fallback={<PageLoader />}>
				<Switch>
					<AuthRoute exact path='/' component={Login} layout={AuthLayout} />

					{/* Patient Routes */}
					<AuthRoute exact path='/auth/login' component={Login} layout={AuthLayout} />
					<AuthRoute exact path='/auth/register' component={Register} layout={AuthLayout} />
					{/* <AuthRoute exact path='/forgot-password' component={ForgotPassword} layout={AuthLayout} />
				<AuthRoute exact path='/reset-password' component={ResetPassword} layout={AuthLayout} />
				<AuthRoute exact path='/verify' component={VerifyEmail} layout={AuthLayout} /> */}

					<PrivateRoute exact path='/app/academy' component={Academy} layout={DashboardLayout} />
					<PrivateRoute exact path='/app/dashboard' component={Dashboard} layout={DashboardLayout} />
					<PrivateRoute exact path='/app/courses' component={Courses} layout={DashboardLayout} />
					<PrivateRoute exact path='/app/history' component={History} layout={DashboardLayout} />
					{/* <PrivateRoute exact path='/app/courses/details' component={CourseEnrolled} layout={DashboardLayout} /> */}
					<PrivateRoute
						exact
						path='/app/courses/details'
						component={CourseDetails}
						layout={DashboardLayout}
					/>
					<PrivateRoute exact path='/app/assessments' component={Assessment} layout={DashboardLayout} />
					<PrivateRoute
						exact
						path='/app/assessment/result/:assessmentId'
						component={Result}
						layout={DashboardLayout}
					/>
					<PrivateRoute
						exact
						path='/app/assessment/questions/:assessmentId'
						component={AssessmnetQuestion}
						layout={DashboardLayout}
					/>
					<PrivateRoute
						exact
						path='/app/course_start'
						component={CourseStart}
						layout={DashboardLayout}
					/>

					<Route component={Error404} />
				</Switch>
			</Suspense>
		</Router>
		<Toast />
	</>
);

export default Routes;
