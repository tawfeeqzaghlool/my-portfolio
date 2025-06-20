import React from 'react';
import { motion } from 'framer-motion';

const FeedbackCard = ({ data }) => (
	<motion.div
		className="card card-bordered shadow-lg mt-4 w-full max-w-md min-h-[180px] transition-all duration-200 hover:shadow-xl bg-gradient-to-br from-white via-blue-50 to-blue-100 backdrop-blur-md border border-blue-200 flex flex-col relative overflow-hidden"
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.2 }}
		transition={{ duration: 0.7, ease: 'easeOut' }}
	>
		<div className="card-body p-4">
			<span className="absolute top-4 left-4 text-blue-500 text-3xl opacity-10 select-none">“</span>
			<h5 className="text-lg font-bold text-blue-900 mb-2 z-10">
				{data.name}
				{data.projectName && (
					<>
						{' '}
						on <span className="font-semibold">{data.projectName}</span>
					</>
				)}
			</h5>
			<motion.p
				className="text-base text-blue-800 mt-2 text-justify font-italic z-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				{data.feedback}
			</motion.p>
		</div>
	</motion.div>
);

export default FeedbackCard;
