import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skillsSection } from '../portfolio';

const fadeInLeft = {
	hidden: { opacity: 0, x: -40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const fadeInRight = {
	hidden: { opacity: 0, x: 40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Skills = () => {
	return (
		skillsSection && (
			<div id="skills" className="container text-center section section-lg">
				<motion.h1
					className="section-title mb-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeInLeft}
				>
					{skillsSection.title}
				</motion.h1>
				<motion.div
					className="subtitle mb-6 flex flex-col items-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={fadeInLeft}
				>
					{skillsSection.subTitle}
				</motion.div>
				{skillsSection.data.map((section, index) => {
					return (
						<div className="row my-5" key={index}>
							<div className="col lg:w-1/2 order-2 order-lg-1">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									variants={fadeInLeft}
								>
									<Image
										src={section.illustrationFile}
										alt={section.title + ' illustration'}
										width={300}
										height={200}
										className="w-3/4 max-w-xs h-auto object-contain mx-auto"
										loading="lazy"
									/>
								</motion.div>
							</div>
							<div className="col lg:w-1/2 order-1 order-lg-2">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									variants={fadeInRight}
								>
									<div className="flex flex-col items-center text-center mb-4">
										<h2 className="subtitle mb-2">{section.title}</h2>
										<p className="text-base text-gray-700 mb-4">{section.description}</p>
									</div>
									<div className="flex flex-wrap gap-2 mb-4 justify-center">
										{section.softwareSkills.map((skill, i) => {
											return (
												<Fragment key={i}>
													<motion.div
														initial="hidden"
														whileInView="visible"
														viewport={{ once: true, amount: 0.2 }}
														variants={fadeInLeft}
													>
														<div
															className="icon icon-lg icon-shape shadow-sm rounded-full skill-icon-animated flex items-center justify-center bg-white"
															id={skill.skillName.replace(/\s/g, '')}
															title={skill.skillName}
														>
															<Icon icon={skill.fontAwesomeClassname} data-inline="false" />
														</div>
													</motion.div>
												</Fragment>
											);
										})}
									</div>
									<div className="space-y-2 text-left">
										{section.skills.map((skill, i) => {
											return (
												<div
													key={i}
													className="text-base md:text-lg font-medium font-inter text-slate-700 flex items-center gap-2 pl-2 py-1 rounded-lg bg-white/60 shadow-sm"
													style={{
														fontWeight: 500,
														fontFamily: 'Nunito Sans, Inter, Segoe UI, Roboto, Arial, sans-serif'
													}}
												>
													<span>{skill}</span>
												</div>
											);
										})}
									</div>
								</motion.div>
							</div>
						</div>
					);
				})}
			</div>
		)
	);
};

export default Skills;
