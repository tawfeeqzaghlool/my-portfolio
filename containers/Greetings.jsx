import React, { useEffect } from 'react';
import { greetings } from '../portfolio';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import GreetingLottie from '../components/DisplayLottie';
import AnimatedText from '../components/AnimatedText';

const fadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
};

const Greetings = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	}, []);

	return (
		<main>
			<div className="position-relative">
				<section id="greetings" className="section section-shaped py-8 md:py-12">
					<div className="bg-smooth w-full py-8 md:py-12">
						<div className="container py-lg-md">
							<div className="flex flex-col-reverse lg:flex-row items-center gap-8">
								<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
									<motion.div
										initial="hidden"
										animate="visible"
										variants={fadeIn}
										transition={{ delay: 0.3, duration: 1 }}
									>
										<AnimatedText
											text="Welcome! I'm Tawfeeq (Tio). Explore my digital world—where ideas, code, and creativity connect. Enjoy the journey! 🚀"
											className="text-slate-800 text-lg sm:text-xl md:text-2xl text-center lg:text-left font-inter mt-2 mb-2 max-w-xl"
										/>
									</motion.div>
									<div className="h-8" />
									<motion.div
										className="fade-in"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2 }}
									>
										<div className="flex flex-col w-full">
											<SocialLinks />
											<div className="btn-wrapper my-4">
												<a
													className="btn btn-on-blue flex items-center gap-2 mb-3 ml-1"
													href={greetings.resumeLink}
													target="_blank"
													rel="noopener noreferrer"
												>
													<span className="btn-inner--icon">
														<i className="fa fa-file" />
													</span>
													<span className="btn-inner--text">View My Resume</span>
												</a>
											</div>
										</div>
									</motion.div>
								</div>
								<div className="w-full lg:w-1/2 flex justify-center">
									<motion.div
										className="w-full max-w-xs sm:max-w-md max-h-[220px] sm:max-h-[320px] overflow-hidden"
										initial="hidden"
										animate="visible"
										variants={fadeIn}
										transition={{ delay: 0.2, duration: 1 }}
									>
										<GreetingLottie animationPath="/lottie/greeting.json" />
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Greetings;
