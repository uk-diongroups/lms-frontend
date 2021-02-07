import React from 'react';
import logo from 'assets/img/logo.svg';
import Input from 'components/form/Input';
import styled from 'styled-components';
import { Button, CenterDiv } from 'components/Styles';
import { ButtonLoader } from 'components/Loaders';
import { connect, useSelector } from 'react-redux';
import { register } from 'redux/actions/auth.action';
import { useFormik } from 'formik';
import { signUpSchema } from 'util/validation';
import { Link } from 'react-router-dom';
import person from 'assets/img/name.svg';
import message from 'assets/img/message.svg';
import padlock from 'assets/img/padlock.svg';
import { getLoadingState } from 'util/functions';

const Wrapper = styled.div`
	padding: 30px 70px;
	@media (max-width: 960px) {
		padding: 30px;
	}
	& > img {
		margin-bottom: 15px;
	}
	h3 {
		font-size: 1.4rem;
		margin-bottom: 5px;
		font-weight: 500;
		color: #293340;
	}
	p.top {
		margin-bottom: 40px;
		color: rgba(39, 6, 123, 0.95);
		font-size: 1rem;
		max-width: 300px;
		line-height: 1.7;
	}

	p.terms {
		font-size: 0.95rem;
		span {
			color: #8865db;
		}
		input {
			margin-right: 10px;
		}
	}

	button {
		margin-top: 50px;
	}
`;

const Text = styled.p`
	text-align: center;
	margin: 10px auto;
	color: #293340;
	a {
		color: #8865db;
	}
`;

const Register = ({ register, match, success, history }) => {
	const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			termsOfService: false,
		},
		validationSchema: signUpSchema,
		onSubmit(values) {
			register({ ...values, termsOfService: undefined });
		},
	});

	React.useEffect(() => {
		if (success) {
			history.push('/login');
		}
	}, [success]);

	const loading = useSelector(getLoadingState('register'));

	return (
		<Wrapper>
			{/* <img src={logo} width='90px' /> */}
			<h3>Welcome to Keytrust Capital </h3>
			<p className='top'>Please continue to Login to your account.</p>
			<form onSubmit={handleSubmit}>
				<Input
					icon={person}
					name='first_name'
					onChange={handleChange}
					error={errors?.first_name}
					value={values?.first_name}
					placeholder='first name'
				/>

				<Input
					icon={person}
					placeholder='last name'
					name='last_name'
					onChange={handleChange}
					error={errors?.last_name}
					value={values?.last_name}
				/>

				<Input
					icon={message}
					placeholder='email'
					name='email'
					onChange={handleChange}
					error={errors?.email}
					value={values?.email}
				/>

				<Input
					icon={padlock}
					name='password'
					type='password'
					onChange={handleChange}
					error={errors?.password}
					value={values?.password}
				/>
				<p className='terms'>
					<span className='check'>
						<input
							type='checkbox'
							onChange={(e) => {
								const { checked } = e.target;
								setFieldValue('termsOfService', checked);
							}}
							value={values.termsOfService}
						/>
					</span>
					I agree to all statments include <span>in Terms of Use</span>
				</p>
				<p className='error'>{errors.termsOfService}</p>
				<CenterDiv>
					<Button type='submit' disabled={loading}>
						{loading ? <ButtonLoader /> : 'Sign Up'}
					</Button>
				</CenterDiv>
			</form>

			{match?.path === '/register' ? (
				<Text className='mt-50'>
					Already have an account? <Link to='/login'>Login</Link>
				</Text>
			) : (
				<Text>
					Don't have an account? <Link to='/register'>Register</Link>
				</Text>
			)}
			<Text>
				Forgot your password? <Link to='/register'>Register</Link>
			</Text>
		</Wrapper>
	);
};

export default connect(
	({ loader, message, auth }) => ({
		success: message.success,
		user: auth.user,
		error: message.error,
		message: message.message,
	}),
	{ register },
)(Register);
