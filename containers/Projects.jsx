import React from 'react';
import { projects } from '../portfolio';
import ProjectsCard from '../components/ProjectsCard';
import { Laptop } from 'lucide-react';

const Projects = () => {
	return (
		projects && (
			<section id="projects" className="section">
				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-row items-center mb-8 md:mb-12 gap-4 md:gap-6">
						<div className="icon icon-lg icon-shape bg-white shadow rounded-full text-blue-600 flex items-center justify-center border-4 border-white ring-4 ring-blue-300">
							<Laptop
								className="w-8 h-8 md:w-10 md:h-10 text-blue-600"
								aria-label="Projects icon"
							/>
						</div>
						<div className="text-left">
							<h1 className="section-title">Projects</h1>
							<p className="subtitle mt-2">Dive into my projects.</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
						{projects.map((data, i) => (
							<ProjectsCard key={i} data={data} />
						))}
					</div>
				</div>
			</section>
		)
	);
};

export default Projects;
