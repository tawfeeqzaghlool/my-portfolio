import { Icon } from '@iconify/react';
import React, { Fragment, useState } from 'react';
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
	// State to track which tooltip is open (for mobile click)
	const [activeTooltip, setActiveTooltip] = useState(null);

	// Helper to handle click/tap for mobile
	const handleIconClick = (index) => {
		setActiveTooltip(activeTooltip === index ? null : index);
	};

	// Helper to close tooltip on outside click (mobile)
	React.useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest('.skill-icon-tooltip-container')) {
				setActiveTooltip(null);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [activeTooltip]);

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
						<div className="row my-5 flex flex-col-reverse lg:flex-row" key={index}>
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
											const tooltipId = `${section.title.replace(/\s/g, '')}-${skill.skillName.replace(/\s/g, '')}`;
											return (
												<Fragment key={i}>
													<motion.div
														initial="hidden"
														whileInView="visible"
														viewport={{ once: true, amount: 0.2 }}
														variants={fadeInLeft}
													>
														<div
															className="skill-icon-tooltip-container relative flex flex-col items-center"
															// For accessibility: tabIndex and aria-label
															tabIndex={0}
															aria-label={skill.skillName}
															onClick={() => handleIconClick(`${index}-${i}`)}
														>
															<div
																className="icon icon-lg icon-shape shadow-sm rounded-full skill-icon-animated flex items-center justify-center bg-white cursor-pointer hover:bg-blue-100 transition-colors duration-200"
																id={skill.skillName.replace(/\s/g, '')}
																title={skill.skillName}
															>
																<Icon
																	icon={skill.fontAwesomeClassname}
																	data-inline="false"
																	className="text-2xl text-blue-700"
																/>
															</div>
															{/* Tooltip */}
															<span
																className={`z-20 pointer-events-none select-none absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md shadow-lg text-sm font-semibold bg-blue-800 text-white whitespace-nowrap transition-opacity duration-200 ${activeTooltip === `${index}-${i}` ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
																style={{
																	minWidth: 'max-content',
																	pointerEvents: 'none'
																}}
																role="tooltip"
																id={tooltipId}
															>
																{skill.skillName}
															</span>
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
