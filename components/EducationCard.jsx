import React from 'react';

const EducationCard = ({ education }) => (
	<div className="card card-bordered shadow-lg mt-4 w-full max-w-md transition-all duration-200 hover:shadow-xl bg-gradient-to-br from-white via-blue-50 to-blue-100 backdrop-blur-md border border-blue-200">
		<div className="card-body p-4 gap-2">
			<h3 className="card-title text-lg font-bold text-blue-900 mb-1">{education.schoolName}</h3>
			<h4 className="font-semibold text-blue-700 mb-2 text-md">{education.subHeader}</h4>
			<div className="badge badge-info mb-2 px-4 py-2 text-base font-medium self-start">
				{education.duration}
			</div>
			<p className="text-blue-800 mt-2 leading-relaxed text-base">{education.desc}</p>
		</div>
	</div>
);

export default EducationCard;
