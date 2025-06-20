import React from 'react';
import Image from 'next/image';

const ExperienceCard = ({ data }) => {
	return (
		<div className="card card-bordered shadow mt-4 w-full max-w-md flex flex-col">
			<div className="card-body">
				<div className="flex flex-col items-center">
					<Image
						src={data.companylogo}
						alt={data.company}
						width={80}
						height={80}
						style={{ width: 80, height: 80 }}
						className="shadow mb-3 rounded-full mx-auto"
						loading="lazy"
					/>
					<h4 className="card-title text-lg font-bold text-blue-900 mb-2 text-center mt-2">
						{data.company}
					</h4>
					<h5 className="text-md font-semibold text-blue-700 mb-2 text-center">{data.role}</h5>
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
