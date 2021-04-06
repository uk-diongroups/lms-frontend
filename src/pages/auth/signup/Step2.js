import React from 'react';
import styled from 'styled-components';
import InputField from 'components/form/Input';
import { ButtonSmall, GridEqual } from 'components/Styles';
import Select from 'components/form/Select';

const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	background: #ffffff;
	border-radius: 4px;
	background: #ffffff;
	border-radius: 4px;
	max-width: 550px;
	width: 100%;
	padding: 48px 50px 46px;
	position: relative;
	box-sizing: border-box;
	border-radius: 4px;
	h2 {
		text-align: center;
		font-size: 1.875rem;
		color: #344563;
		font-weight: bold;
	}
	p {
		text-align: center;
		color: #344563;
		font-size: 14px;
		margin-bottom: 62px;
	}
`;

const Grey = styled(ButtonSmall)`
	background: #f9f9f9;
	color: #344563;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`;
export default ({ onNav }) => {
	return (
		<Wrapper className='auth_form-content'>
			<h2>Personal Details</h2>
			<p>Please enter your personal details, your most recent data.</p>
			<form>
				<InputField label='Home Address' placeholder='Enter your home address' />
				<GridEqual count={2} gap={'27px'}>
					<Select
						label='State'
						options={[{ name: 'Lagos', value: 'lagos' }]}
						placeholder='Select your state'
					></Select>
					<Select
						label='City'
						options={[{ name: 'Lagos', value: 'lagos' }]}
						placeholder='Select your city'
					></Select>
				</GridEqual>

				<InputField label='Phone Number' placeholder='Enter your phone number' />

				<Flex>
					<Grey onClick={() => onNav('sub')} type='button'>
						Go Back
					</Grey>
					<ButtonSmall onClick={() => onNav('add')} type='button'>
						Next
					</ButtonSmall>
				</Flex>
			</form>
		</Wrapper>
	);
};
