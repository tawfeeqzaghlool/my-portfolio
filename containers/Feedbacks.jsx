import React from 'react';
import FeedbackCard from '../components/FeedbackCard';
import { motion } from 'framer-motion';
import { feedbacks } from '../portfolio';
import { Star } from 'lucide-react';

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Feedbacks = () => {
	return (
		feedbacks && (
			<section id="feedbacks" className="section">
				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-row items-center mb-8 md:mb-12 gap-4 md:gap-6">
						<div className="icon icon-lg icon-shape bg-white shadow rounded-full text-blue-600 flex items-center justify-center border-4 border-white ring-4 ring-blue-300">
							<Star className="w-8 h-8 md:w-10 md:h-10 text-blue-600" aria-label="Feedback icon" />
						</div>
						<div className="text-left">
							<h1 className="section-title">My Projects Reviews</h1>
						</div>
					</div>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
					>
						{feedbacks.map((data, index) => (
							<motion.div key={index} variants={itemVariants}>
								<FeedbackCard data={data} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
		)
	);
};

export default Feedbacks;
