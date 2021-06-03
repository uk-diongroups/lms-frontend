import classnames from 'classnames';
import Icon from 'components/Icons';
import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { connect } from 'react-redux';

const Syllabus = ({ course, courseId }) => {
	return (
		<>
			<Accordion allowZeroExpanded={true}>
				{course?.syllabus?.map((syllabus, i) => (
					<AccordionItem key={i} uuid={i} className='permission-option d-blk bg-blue mb-5 rounded-md'>
						<AccordionItemButton className='text'>
							<div className='dropdown_itemBtn capitalize pb-3 dark flex justify-between items-center'>
								<p className='font-avenir dark-blue text-lg'>{syllabus?.title}</p>
								<Icon id='drop-icon' width='24' height='25' />
							</div>
						</AccordionItemButton>

						{syllabus.lectures?.map((lecture, i) => (
							<AccordionItemPanel
								key={i}
								className={classnames('pt-3', {
									'border-t-blue pt-5': i == 0,
								})}
							>
								<p className='dark-blue text-lg'>{lecture?.title}</p>
							</AccordionItemPanel>
						))}
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default connect(
	({ courses: { course } }) => ({
		course,
	}),
	null,
)(Syllabus);
