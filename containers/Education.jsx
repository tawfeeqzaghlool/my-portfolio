import React from 'react';
import EducationCard from '../components/EducationCard';
import { educationInfo } from '../portfolio';
import { GraduationCap } from 'lucide-react';

const Education = () => (
	<section
		id="education"
		className="section pb-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500"
	>
		<div className="container mx-auto px-4 py-8">
			<div className="flex flex-row items-center mb-8 md:mb-12 gap-4 md:gap-6">
				<div className="icon icon-lg icon-shape bg-white shadow rounded-full text-blue-600 flex items-center justify-center border-4 border-white ring-4 ring-blue-300">
					<GraduationCap
						className="w-8 h-8 md:w-10 md:h-10 text-blue-600"
						aria-label="Education icon"
					/>
				</div>
				<div className="text-left">
					<h1 className="section-title text-white">Education & Certificates</h1>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
				{educationInfo.map((info, index) => (
					<EducationCard education={info} key={index} />
				))}
			</div>
		</div>
	</section>
);

export default Education;
