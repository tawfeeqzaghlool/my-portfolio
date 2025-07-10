import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
	{ id: 'greetings', label: 'About' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'proficiency', label: 'Proficiency' },
	{ id: 'education', label: 'Education' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'feedbacks', label: 'Feedbacks' }
];

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('greetings');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			let current = 'greetings';
			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 80) {
						current = section.id;
					}
				}
			}
			setActiveSection(current);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = (id) => {
		setIsOpen(false);
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	if (!mounted) {
		return null;
	}

	return (
		<nav className="navbar navbar-main glass-navbar fixed w-full top-0 left-0 z-50 backdrop-blur bg-white/85 border-b border-gray-200">
			<div className="container flex justify-between items-center py-4">
				<a
					href="#greetings"
					className="navbar-brand font-bold text-xl text-info"
					onClick={() => handleNavClick('greetings')}
				>
					Tawfeeq Zaghlool
				</a>
				<button
					className="navbar-toggler ml-auto lg:hidden"
					aria-label="Toggle navigation"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X className="w-6 h-6 text-info" /> : <Menu className="w-6 h-6 text-info" />}
				</button>
				<div
					className={`navbar-collapse flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:static lg:bg-transparent lg:shadow-none lg:border-0 transition-all duration-300 px-4 py-2 ${
						isOpen ? 'flex' : 'hidden lg:flex'
					}`}
				>
					{sections.map((section) => (
						<button
							key={section.id}
							className={`nav-link text-left w-full lg:w-auto px-4 py-2 text-lg font-medium transition-colors duration-200 ${
								activeSection === section.id ? 'nav-link-active' : 'text-gray-700'
							}`}
							onClick={() => handleNavClick(section.id)}
						>
							{section.label}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
