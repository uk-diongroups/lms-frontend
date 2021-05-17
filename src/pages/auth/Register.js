import Button from 'components/Button';
import { Input, Select } from 'components/form';
import { BlockLoader, ButtonLoader } from 'components/Loaders';
import { useFormik } from 'formik';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBranches, fetchDepartments, register } from 'redux/actions/auth.action';
import { getLoadingState } from 'utils/functions';
import { signUpSchema } from 'utils/validation';

const Register = ({ history, departments, branches }) => {
	const dispatch = useDispatch();
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			branch: '',
			department: '',
			password: '',
			confirm_password: '',
		},
		validationSchema: signUpSchema,
		onSubmit(values) {
			delete values.confirm_password;
			dispatch(register(values)).then(() => {
				history.push('/auth/login');
			});
		},
	});

	React.useEffect(() => {
		dispatch(fetchDepartments());
		dispatch(fetchBranches());
	}, []);

	const loading = useSelector(getLoadingState('register'));
	const loadingBrancehs = useSelector(getLoadingState('fetchBranches'));
	const loadingDepartments = useSelector(getLoadingState('fetchDepartments'));

	return loadingBrancehs || loadingDepartments ? (
		<BlockLoader />
	) : (
		<div className='auth__container'>
			<h3 className='auth__title'>Register</h3>
			<p className='auth__sub-title'>Please enter your credentials to proceed.</p>
			<form onSubmit={handleSubmit}>
				<Input
					name='first_name'
					label='First name'
					onChange={handleChange}
					error={errors?.first_name}
					value={values.first_name}
				/>

				<Input name='last_name' label='Last Name' onChange={handleChange} error={errors?.last_name} />

				<Input name='email' label='Email Address' onChange={handleChange} error={errors?.email} />

				<Select
					label='Select Branch'
					name='branch'
					options={branches.map((branch) => ({ value: branch.id, name: branch.title }))}
					onChange={handleChange}
					placeholder='Select Branch'
					error={errors?.branch}
					value={values.branch}
				/>

				<Select
					label='Select Department'
					name='department'
					options={departments.map((department) => ({
						value: department.id,
						name: department.title,
					}))}
					placeholder='Select Department'
					onChange={handleChange}
					error={errors?.department}
					value={values.department}
				/>

				<Input
					name='password'
					type='password'
					label='Password'
					onChange={handleChange}
					error={errors?.password}
					value={values.password}
				/>

				<Input
					name='confirmPassword'
					type='password'
					label='Confirm Password'
					onChange={handleChange}
					error={errors?.confirmPassword}
					value={values.confirmPassword}
				/>

				<Button type='submit' disabled={loading} variant='primary' block>
					{loading ? <ButtonLoader /> : 'Register'}
				</Button>
			</form>
			<p className='auth__bottom'>
				Already have an account ? <Link to='/auth/login'>Sign In</Link>
			</p>
		</div>
	);
};

export default connect(({ auth: { departments, branches } }) => ({ departments, branches }), null)(Register);
