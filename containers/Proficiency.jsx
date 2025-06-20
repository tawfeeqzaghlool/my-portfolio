import React, { useEffect, useRef } from 'react';
import { SkillBars } from '../portfolio';
import { motion } from 'framer-motion';
import GreetingLottie from '../components/DisplayLottie';

const AnimatedProgressBar = ({ stack, percentage, delay }) => {
	const barRef = useRef(null);
	const [inView, setInView] = React.useState(false);
	const [displayedPercent, setDisplayedPercent] = React.useState(0);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		if (barRef.current) {
			observer.observe(barRef.current);
		}
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		barRef.current && (barRef.current.style.width = '0%');
		if (inView) {
			setTimeout(() => {
				if (barRef.current) {
					barRef.current.style.transition = 'width 1.5s cubic-bezier(0.4,0,0.2,1)';
					barRef.current.style.width = percentage + '%';
				}
				// Animate the number
				let start = 0;
				const duration = 1500;
				const startTime = performance.now();
				function animateNumber(now) {
					const elapsed = now - startTime;
					const progress = Math.min(elapsed / duration, 1);
					const value = Math.round(progress * percentage);
					setDisplayedPercent(value);
					if (progress < 1) {
						requestAnimationFrame(animateNumber);
					}
				}
				requestAnimationFrame(animateNumber);
			}, delay);
		}
	}, [percentage, delay, inView]);

	return (
		<div className="progress-info flex flex-col gap-1">
			<div className="flex justify-between items-center mb-1">
				<h3 className="text-lg font-semibold text-gray-800">{stack}</h3>
				<span className="text-sm font-medium text-gray-500">{displayedPercent}%</span>
			</div>
			<div
				className="w-full bg-gray-200 rounded-full h-4 shadow-inner"
				role="progressbar"
				aria-label={stack + ' proficiency'}
				aria-valuenow={percentage}
				aria-valuemin="0"
				aria-valuemax="100"
			>
				<div
					ref={barRef}
					className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-700"
					style={{ width: '0%' }}
				></div>
			</div>
		</div>
	);
};

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Proficiency = () => {
	return (
		SkillBars && (
			<div id="proficiency" className="container section">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					variants={itemVariants}
				>
					<div className="row items-center">
						<div className="col lg:w-1/2">
							<motion.h1
								className="section-title text-center"
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, amount: 0.2 }}
								variants={itemVariants}
							>
								Proficiency
							</motion.h1>
							<motion.div
								className="space-y-6"
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, amount: 0.2 }}
							>
								{SkillBars.map((skill, index) => (
									<motion.div key={skill.Stack} variants={itemVariants}>
										<AnimatedProgressBar
											stack={skill.Stack}
											percentage={skill.progressPercentage}
											delay={index * 400}
										/>
									</motion.div>
								))}
							</motion.div>
						</div>
						<div className="col lg:w-1/2 flex justify-center items-center">
							<GreetingLottie animationPath="/lottie/build.json" />
						</div>
					</div>
				</motion.div>
			</div>
		)
	);
};

export default Proficiency;
