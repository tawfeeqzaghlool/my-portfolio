import React from 'react';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
	return (
		<div className="btn-wrapper flex flex-col md:flex-row w-full gap-3 md:gap-4 items-center justify-start md:justify-start mt-6">
			{socialLinks.github && (
				<a
					className="btn btn-on-blue flex items-center gap-2 ml-1"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
					role="button"
				>
					<i className="fa fa-github" />
					<span className="btn-inner--text">GitHub</span>
				</a>
			)}
			{socialLinks.linkedin && (
				<a
					className="btn btn-on-blue flex items-center gap-2 ml-1"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
					role="button"
				>
					<i className="fa fa-linkedin" />
					<span className="btn-inner--text">LinkedIn</span>
				</a>
			)}
		</div>
	);
};

export default SocialLinks;
