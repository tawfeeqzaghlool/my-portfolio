import React from 'react';
import { experience } from '../portfolio';
import ExperienceCard from '../components/ExperienceCard';
import { Briefcase } from 'lucide-react';

const Experience = () => {
	return (
		experience && (
			<section id="experience" className="section">
				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-row items-center mb-8 md:mb-12 gap-4 md:gap-6">
						<div className="icon icon-lg icon-shape bg-white shadow rounded-full text-blue-600 flex items-center justify-center border-4 border-white ring-4 ring-blue-300">
							<Briefcase
								className="w-8 h-8 md:w-10 md:h-10 text-blue-600"
								aria-label="Experience icon"
							/>
						</div>
						<div className="text-left">
							<h2 className="section-title">Experience</h2>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
						{experience.map((data, i) => (
							<ExperienceCard key={i} data={data} />
						))}
					</div>
				</div>
			</section>
		)
	);
};

export default Experience;
