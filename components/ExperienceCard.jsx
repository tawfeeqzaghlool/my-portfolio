import React from 'react';
import Image from 'next/image';

const ExperienceCard = ({ data }) => {
	return (
		<div className="card card-bordered shadow mt-4 w-full max-w-md flex flex-col">
			<div className="card-body">
				<div className="flex flex-col items-center">
					<div className="w-20 h-20 flex items-center justify-center mb-3 rounded-full bg-white shadow overflow-hidden relative">
						<Image
							src={data.companylogo}
							alt={data.company}
							fill
							loading="lazy"
							className="object-contain"
							sizes="80px"
						/>
					</div>
					<h3 className="card-title text-lg font-bold text-blue-900 mb-2 text-center mt-2">
						{data.company}
					</h3>
					<h4 className="text-md font-semibold text-blue-700 mb-2 text-center">{data.role}</h4>
					<p className="text-base text-blue-800 mb-3 text-center">{data.date}</p>
					<div className="description my-3 text-justify flex-1">
						<ul className="list-disc list-inside space-y-1">
							{data.desc.map((point, index) => (
								<li key={index} className="text-blue-800">
									{point}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
