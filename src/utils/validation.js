import * as yup from 'yup';
export const dateRegex = RegExp(`\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*`);

export const signUpSchema = yup.object({
	first_name: yup.string().required('Firstname is required'),
	last_name: yup.string().required('Lastname is required'),
	email: yup.string().email('Must be a valid email').required('Email is required'),
	password: yup.string().required('Password is required'),
	termsOfService: yup
		.boolean()
		.required('The terms and conditions must be accepted.')
		.oneOf([true], 'The terms and conditions must be accepted.'),
});

export const loginSchema = yup.object({
	email: yup.string().email('Must be a valid email').required('Email is required'),
	password: yup.string().required('Password is required'),
});

export const forgetPasswordSchema = yup.object({
	email: yup.string().email('Must be a valid email').required('Email is required'),
});
