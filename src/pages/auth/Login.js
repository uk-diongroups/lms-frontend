import message from 'assets/img/message.svg';
import padlock from 'assets/img/padlock.svg';
import Button from 'components/Button';
import Input from 'components/form/Input';
import { ButtonLoader } from 'components/Loaders';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/actions/auth.action';
import { getLoadingState } from 'utils/functions';
import { loginSchema } from 'utils/validation';
import { Link } from 'react-router-dom';

export default ({ history, match }) => {
	const dispatch = useDispatch();
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginSchema,
		onSubmit(values) {
			dispatch(login(values)).then(() => {
				history.push('/app/assessments');
			});
		},
	});

	const loading = useSelector(getLoadingState('login'));

	return (
		<div className='auth__container mt-50'>
			<h3 className='auth__title '>Sign In</h3>
			<p className='auth__sub-title'>Please enter your credentials to proceed.</p>
			<form onSubmit={handleSubmit}>
				<Input
					icon={message}
					name='email'
					label='Email Address'
					onChange={handleChange}
					error={errors?.email}
					value={values.email}
				/>

				<Input
					icon={padlock}
					name='password'
					type='password'
					label='Password'
					value={values.password}
					onChange={handleChange}
					error={errors?.password}
				/>

				<Button type='submit' disabled={loading} variant='primary' block>
					{loading ? <ButtonLoader /> : 'Login'}
				</Button>
			</form>
			<p className='auth__bottom'>
				Don't have an account? <Link to='/auth/register'>Register</Link>
			</p>
		</div>
	);
};
