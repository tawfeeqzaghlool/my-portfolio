// Greeting Section
export const greetings = {
	name: 'Tawfeeq Zaghlool',
	description:
		"Hey! 👋 I'm Tawfeeq — or Tio 😉 A Full-Stack Web & IoT Developer and proud Founder of DevTio — a creative hub for cutting-edge digital products and connected experiences. With 6+ years in development and 9+ in project management, I build scalable apps across web, mobile, IoT, and blockchain. I'm driven by innovation, clean engineering, and the joy of solving real-world problems with tech. Let's bring bold ideas to life! 🚀",
	resumeLink:
		'https://drive.google.com/file/d/1MGEMZ6ZpzrB9K0bQZVu_5BrDMOdQO5Yf/view?usp=drive_link'
};

export const openSource = {
	githubUserName: 'tawfeeqzaghlool'
};

export const socialLinks = {
	github: 'https://github.com/tawfeeqzaghlool',
	linkedin: 'https://www.linkedin.com/in/tawfeeqzaghlool'
};

// Updated Skill Section
export const skillsSection = {
	title: 'Skillset Spotlight',
	subTitle: (
		<>
			A Full Stack Developer weaving digital worlds from server to sensor, <br />
			blending modern code and circuits to power smart applications.
		</>
	),
	data: [
		{
			title: 'IoT Development',
			description: 'From edge to cloud: crafting intelligent, connected systems.',
			illustrationFile: '/skills/iot.svg',
			skills: [
				'💡 Developed 11+ IoT projects using Tinkercad, Wokwi, and real-world microcontrollers',
				'💡 Programmed embedded systems in C++ and MicroPython (ESP32, Arduino, Raspberry Pi Pico)',
				'💡 Built device-to-cloud systems using MQTT, HTTP, and REST APIs',
				'💡 Optimized edge device performance and memory for real-time applications'
			],
			softwareSkills: [
				{ skillName: 'Arduino', fontAwesomeClassname: 'vscode-icons:file-type-arduino' },
				{ skillName: 'Raspberry Pi', fontAwesomeClassname: 'logos:raspberry-pi' },
				{ skillName: 'ESP32', fontAwesomeClassname: 'simple-icons:espressif' },
				{ skillName: 'CPP', fontAwesomeClassname: 'logos:c-plusplus' },
				{ skillName: 'MicroPython', fontAwesomeClassname: 'simple-icons:micropython' },
				{ skillName: 'MQTT', fontAwesomeClassname: 'simple-icons:mosquitto' }
			]
		},
		{
			title: 'Full Stack Development',
			description: 'From frontend polish to backend power — full-stack excellence.',
			illustrationFile: '/skills/coding.svg',
			skills: [
				'💻 Built apps with React, Vue, Next.js, Nuxt, SvelteKit, and Flutter',
				'💻 Developed REST/GraphQL APIs using Node.js, Django, Flask, and Laravel',
				'💻 Deployed scalable systems using Docker and AWS EC2',
				'💻 Delivered apps with 100% Lighthouse scores in SEO, performance, and accessibility'
			],
			softwareSkills: [
				{ skillName: 'Reactjs', fontAwesomeClassname: 'vscode-icons:file-type-reactjs' },
				{ skillName: 'Vuejs', fontAwesomeClassname: 'vscode-icons:file-type-vue' },
				{ skillName: 'Nextjs', fontAwesomeClassname: 'vscode-icons:file-type-light-next' },
				{ skillName: 'Nuxt', fontAwesomeClassname: 'logos:nuxt-icon' },
				{ skillName: 'SvelteKit', fontAwesomeClassname: 'logos:svelte-icon' },
				{ skillName: 'Tailwind', fontAwesomeClassname: 'vscode-icons:file-type-tailwind' },
				{ skillName: 'Flutter', fontAwesomeClassname: 'logos:flutter' },
				{ skillName: 'Node.js', fontAwesomeClassname: 'logos:nodejs-icon' },
				{ skillName: 'Django', fontAwesomeClassname: 'vscode-icons:file-type-django' },
				{ skillName: 'Flask', fontAwesomeClassname: 'logos:flask' },
				{ skillName: 'Laravel', fontAwesomeClassname: 'logos:laravel' },
				{ skillName: 'NestJS', fontAwesomeClassname: 'simple-icons:nestjs' }
			]
		},
		{
			title: 'Cloud Infra-Architecture',
			description: 'From code to cloud: build, ship, and scale with confidence.',
			illustrationFile: '/skills/cloud.svg',
			skills: [
				'☁️ Experience with AWS, Azure, and Google Cloud Platform (GCP)',
				'☁️ Containerized deployments using Docker and Kubernetes',
				'☁️ CI/CD automation with GitHub Actions',
				'☁️ Cloud-hosted databases: PostgreSQL, MongoDB, MySQL'
			],
			softwareSkills: [
				{ skillName: 'AWS', fontAwesomeClassname: 'logos:aws' },
				{ skillName: 'Azure', fontAwesomeClassname: 'logos:microsoft-azure' },
				{ skillName: 'GCP', fontAwesomeClassname: 'logos:google-cloud' },
				{ skillName: 'Docker', fontAwesomeClassname: 'logos:docker-icon' },
				{ skillName: 'Kubernetes', fontAwesomeClassname: 'logos:kubernetes' },
				{ skillName: 'PostgreSQL', fontAwesomeClassname: 'logos:postgresql' },
				{ skillName: 'MongoDB', fontAwesomeClassname: 'logos:mongodb' },
				{ skillName: 'MySQL', fontAwesomeClassname: 'logos:mysql' },
				{ skillName: 'GitHub Actions', fontAwesomeClassname: 'logos:github-actions' },
				{ skillName: 'Git', fontAwesomeClassname: 'logos:git' }
			]
		},
		{
			title: 'Blockchain',
			description: 'Smart contracts and decentralized logic at your fingertips.',
			illustrationFile: '/skills/blockchain.webp',
			skills: [
				'📑 Built and deployed smart contracts using Solidity on Ethereum',
				'📑 Tested and debugged contracts using modern dev tools'
			],
			softwareSkills: [
				{ skillName: 'Ethereum', fontAwesomeClassname: 'logos:ethereum' },
				{ skillName: 'Solidity', fontAwesomeClassname: 'logos:solidity' }
			]
		}
	]
};

// Proficiency Section
export const SkillBars = [
	{
		Stack: 'Frontend/Design',
		progressPercentage: '95'
	},
	{
		Stack: 'Backend',
		progressPercentage: '90'
	},
	{
		Stack: 'Programming',
		progressPercentage: '90'
	},
	{
		Stack: 'Problem Solving',
		progressPercentage: '95'
	},
	{
		Stack: 'Ctritcal Thinking',
		progressPercentage: '90'
	}
];

// Education & Certificates Section
export const educationInfo = [
	{
		schoolName: 'Cisco',
		subHeader: 'Specialist IoT',
		duration: 'January 2024',
		desc: 'Certificate in IoT'
	},
	{
		schoolName: 'PMI (Project Management Institute)',
		subHeader: '(APM) Certificate in Agile Project Management',
		duration: 'January 2024',
		desc: 'Fundamentals of Agile Project Management'
	},
	{
		schoolName: 'PMI (Project Management Institute)  ',
		subHeader: '(PPM) Certificate in Predictive Project Management',
		duration: 'January 2024',
		desc: 'Fundamentals of Predictive Project Management'
	},
	{
		schoolName: 'Udacity',
		subHeader: 'NanoDegree Full Stack Web Development',
		duration: 'March 2022',
		desc: 'Full Stack Web Development'
	}
];

// Experience Section
export const experience = [
	{
		role: 'Founder & Full Stack IoT Developer',
		company: 'Dev Tio',
		companylogo: '/img/icons/common/devtio.png',
		date: 'August 2024 – Present',
		desc: [
			'Founded Dev Tio, a digital solutions company delivering projects in Web, Mobile, and IoT development.',
			'Leading a team focused on UI/UX, smart systems, and IT consulting across diverse industries.'
		]
	},
	{
		role: 'IoT Developer (Specialization)',
		company: 'Freelance',
		companylogo: '/img/icons/common/freelance.png',
		date: 'April 2023 – Present',
		desc: [
			'Delivered 11+ IoT apps using Tinkercad, Wokwi, and real hardware (ESP32, Arduino, Raspberry Pi Pico).',
			'Programmed embedded systems in C++ and MicroPython with cloud-connected architectures.'
		]
	},
	{
		role: 'Full Stack Web & Mobile Developer',
		company: 'Freelance',
		companylogo: '/img/icons/common/freelance.png',
		date: 'July 2021 – Present',
		desc: [
			'Built performant web/mobile apps with React, Vue, Next.js, Nuxt, SvelteKit, Tailwind, Flutter, and Vite.',
			'Developed secure, scalable backends using Node.js, NestJS, Django, Flask, and Laravel.'
		]
	},
	{
		role: 'Project Manager',
		company: 'Blue Umbrella Organization',
		companylogo: '/img/icons/common/blueumbrella.jpg',
		date: 'July 2019 – Present',
		desc: [
			'Led training initiatives reaching over 200+ participants across underserved communities.',
			'Oversaw program design, logistics, budgeting, and evaluation for NGO projects.'
		]
	}
];

// Projects Section
export const projects = [
	// IoT Porjects
	{
		name: 'Number Guessing game',
		desc: 'Put your number sense to the test with Number Guessing! This interactive game challenges you to guess a secret number within a set limit of tries and time. Choose your difficulty (Easy, Medium, or Hard) and see if you can accurately guess the numbers within the given constraints!',
		video: '/iot/pv1.mp4',
		photo: '/iot/pp1.jpg',
		link: 'https://wokwi.com/projects/393617093984075777',
		linkType: 'wokwi',
		linkIcon: '/iot/wokwi.png',
		linkLabel: 'View on Wokwi'
	},
	{
		name: 'Snow White Proximity',
		desc: 'Unleash a winter wonderland! An Arduino & NeoPixel ring create a mesmerizing display that reacts to your distance. The closer you get, the brighter the LEDs glow, mimicking a field of glistening snow.	Snow White Proximity. Enchanting, interactive, beginner-friendly. Learn about sensors & LEDs while building a magical winter experience.',
		video: '/iot/pvv4.mp4',
		photo: '/iot/pp4.jpg',
		link: 'https://www.tinkercad.com/things/cq6MFYkhIAL-snow-white-porximity',
		linkLabel: 'View on TinkerCad'
	},
	// Full Stack Projects
	{
		name: 'Extender for Marketing & Software Development',
		desc: 'Extender empowers businesses in Jordan and Globally with innovative digital marketing and software solutions. Local expertise, creative strategy, and measurable results for your success. Based in Amman, serving clients locally and beyond.',
		photo: '/web/wp1.png',
		link: 'https://extender.site/',
		linkLabel: 'Visit Extender Website'
	},
	{
		name: 'Natural Looks',
		desc: 'Natural Looks is a leading beauty and personal care brand, now with a modern digital presence. Explore their range of products and services online, designed to enhance natural beauty and well-being.',
		photo: '/web/wp2.png',
		link: 'https://naturallooks.co.uk/',
		linkLabel: 'Visit Natural Looks Website'
	}
];

// Feedback Section
export const feedbacks = [
	{
		name: 'Client',
		projectName: 'Number Guessing game',
		feedback:
			"Wow! The Number Guessing game is fantastic! We're impressed with how engaging and addictive it is. Your brilliance shines through in every aspect of the game."
	},
	{
		name: 'Client',
		projectName: 'Snow White Proximity',
		feedback:
			'Snow White Proximity is a magical experience! The interactive LED display is both educational and fun. Great work!'
	},
	{
		name: 'Extender Team',
		projectName: 'Extender for Marketing & Software Development',
		feedback:
			'The new Extender website has elevated our brand and made it easier for clients to discover our services. The design and functionality are top-notch!'
	},
	{
		name: 'Natural Looks Team',
		projectName: 'Natural Looks',
		feedback:
			'Our new website perfectly reflects our brand and makes shopping a breeze for our customers. We love the modern look and seamless experience!'
	}
];

// SEO Section
// See object prototype on SEO.jsx page
export const seoData = {
	title: 'Tawfeeq Zaghlool',
	description: 'A passionate Full Stack Web Developer',
	author: 'Tawfeeq Zaghlool',
	url: 'https://tawfeeqportfolio.vercel.app/',
	keywords: [
		'Tawfeeq',
		'DevTio',
		'Tawfeeq Zaghlool',
		'@Tawfeeq Zaghlool',
		'Portfolio',
		'Tawfeeq Portfolio ',
		'Tawfeeq Zaghlool Portfolio'
	]
};
