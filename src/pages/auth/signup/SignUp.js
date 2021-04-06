import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import logo from 'assets/img/logo.svg';

const Wrapper = styled.div`
	position: relative;
	position: relative;
	display: flex;
	flex-direction: column;
	font: Poppinsmeduim;
	& > img {
		height: 24px;
		margin-bottom: 58px;
		margin-top: 39px;
	}
	& > div:nth-child(2) {
		height: 570px;
		margin-bottom: 20px;
	}
`;

const Steps = styled.div`
	margin: 0 auto;
	width: 303px;
	p {
		text-align: center;
	}
	& > div {
		display: flex;
		align-items: center;
		.box {
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background: #e8ecef;
		}
		.line {
			height: 4px;
			width: 137px;
			background: #e8ecef;
		}
		.blue {
			background: #242582;
		}
	}
`;

export default ({ history }) => {
	const [step, setStep] = React.useState(0);
	const components = [Step1, Step2, Step3];
	const transitions = useTransition(step, (component) => component, {
		from: { position: 'absolute', opacity: 0, width: '100%' },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	const onNav = (type) => {
		setStep((step) => {
			return type === 'add' ? step + 1 : step - 1;
		});
	};

	return (
		<Wrapper>
			<img src={logo} />

			<div>
				{transitions.map(({ item, props, key }) => {
					const Component = components[item];
					return (
						<animated.div style={props} key={key}>
							<Component onNav={onNav} history={history} />
						</animated.div>
					);
				})}
			</div>

			<Steps>
				<p>{step + 1}/3</p>
				<div>
					<div className='box blue'></div>
					<div className={`line ${step >= 1 && 'blue'}`}></div>
					<div className={`box ${step >= 1 && 'blue'}`}></div>
					<div className={`line ${step >= 2 && 'blue'}`}></div>
					<div className={`box ${step >= 2 && 'blue'}`}></div>
				</div>
			</Steps>
		</Wrapper>
	);
};
