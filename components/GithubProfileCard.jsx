import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const GithubProfileCard = ({ prof }) => {
	return (
		<div className="bg-smooth w-full py-8">
			<motion.div
				className="card card-bordered shadow-lg mt-4 w-full border-0"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeIn}
			>
				<div className="container px-4 py-8 w-full">
					<div className="flex flex-row items-center mb-8 gap-4">
						<div className="text-left">
							<h2 className="section-title text-slate-900">Hit me Up!</h2>
						</div>
					</div>
					<div className="row w-full">
						<div className="col order-lg-2 lg:w-1/3 flex justify-center items-center">
							<Image
								src={prof.avatar_url}
								width={200}
								height={200}
								alt="Tawfeeq Zaghlool"
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4 mx-auto block"
								unoptimized={true}
								loading="lazy"
							/>
						</div>
						<div className="col lg:w-2/3 order-lg-1 flex flex-col justify-center">
							<p className="subtitle text-slate-900 mt-3 text-justify">
								Braintrust or brainstorm I&apos;m all in! 🧠 Got a project or just a friendly chat?
								Feel free to reach out! 📩
							</p>
							<p className="text-base text-slate-900 mt-3 text-justify">{prof.bio}</p>
							<div className="btn-wrapper mt-4">
								<a
									href={prof.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-on-blue flex items-center gap-2"
								>
									<span className="btn-inner--text">GitHub</span>
								</a>
								<a
									href={prof.blog || 'https://www.linkedin.com/in/tawfeeqzaghlool'}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-on-blue flex items-center gap-2"
								>
									<span className="btn-inner--text">LinkedIn</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default GithubProfileCard;
