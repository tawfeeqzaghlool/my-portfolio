// Greeting Section
export const greetings = {
	name: "Tawfeeq Zaghlool",
	title: "Hi all, I'm Tawfeeq",
	description:
	"Hey! 👋 I'm Tawfeeq, also known as Tio 😉. I'm a dynamic Full-Stack Web Developer with a recent focus on IoT development. Passionate about innovation and crafting user-centric solutions, I bring 2+ years of Full-Stack experience and 6+ years in project management. Eager to apply my skills in a challenging role that fosters continuous learning. Let's create something amazing together! 🚀",
	resumeLink:
		"https://drive.google.com/file/d/1QeP-wQJowJlrl7hMHZitvRJhuVluJrh5/view?usp=sharing",
};

export const openSource = {
	githubUserName: "tawfeeqzaghlool",
};

export const socialLinks = {
	github: "https://github.com/tawfeeqzaghlool",
	linkedin: "https://www.linkedin.com/in/tawfeeqzaghlool",
};

// Skill Section
export const skillsSection = {
	title: "Skillset Spotlight",
	subTitle:
	<>
    A Full Stack Developer weaving digital worlds from server to sensor, <br />
    melding code and circuits to bring IoT visions to life.
  </>,
	data: [
		{
			title: "IoT Development",
			description: "From sensors to insights: We craft the Internet of Things (IoT)",
			lottieAnimationFile: "/lottie/skills/iot.json", // Path of Lottie Animation JSON File
			skills: [
				("💡 Building sensor-based applications (e.g., temperature, humidity monitoring)"),
				("💡 Integrating hardware components with software (microcontrollers, sensors)"),
				("💡 Prototyping and testing IoT devices"),
				("💡 Utilizing data analysis tools for sensor data"),
			],
			softwareSkills: [
				{
					skillName: "Arduino",
					fontAwesomeClassname: "vscode-icons:file-type-arduino", // Font Awesome icon for Arduino Uno
				},
				{
					skillName: "Raspberry Pi",
					fontAwesomeClassname: "logos:raspberry-pi", // Font Awesome icon for Raspberry Pi
				},
				{
					skillName: "ESP32",
					fontAwesomeClassname: "simple-icons:espressif", // Font Awesome icon for ESP32
				},
				{
					skillName: "CPP",
					fontAwesomeClassname: "logos:c-plusplus", // Font Awesome icon for C++
				},
				{
					skillName: "MicroPython",
					fontAwesomeClassname: "simple-icons:micropython", // Font Awesome icon for MicroPython
				},
				{
					skillName: "Cython",
					fontAwesomeClassname: "vscode-icons:file-type-cython", 
				},
			],
		},
		{
			title: "Full Stack Development",
			description: "I code. You click. It works. (Everywhere)",
			lottieAnimationFile: "/lottie/skills/coding.json", // Path of Lottie Animation JSON File
			skills: [
				("💻 Building responsive user interfaces (UI) with HTML, CSS, JavaScript"),
				("💻 Creating interactive features using React, NextJs, Vue"),
				("💻 Developing RESTful APIs using Node.js, Python (Django/Flask)"),
				("💻 Building and deploying web applications on cloud platforms like AWS/Azure"),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Vuejs",
					fontAwesomeClassname: "vscode-icons:file-type-vue",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "logos:flask",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Pnpm",
					fontAwesomeClassname: "logos:pnpm",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			description: "We Guide Your Web Journey", 
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				("☁️ Experience with AWS, Azure, and Google Cloud Platform (GCP)"),
				("☁️ Deploying and managing web applications on virtual machines"),
				("☁️ Configuring databases in the cloud"),
				("☁️ Setting up CI/CD pipelines for automated deployments and testing using GitHub Actions and other tools"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Vercel",
					fontAwesomeClassname: "logos:vercel-icon",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},	
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "logos:git",
				},
						
			],
		},
		{
			title: "Blockchain",
			description:"Building the future, block by block",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				("📑 Building smart contracts using Solidity"),
				("📑 Deploying smart contracts on Ethereum blockchain"),
				("📑 Testing and debugging smart contracts"),
			
				
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
			],
		},
	],
};

// Proficiency Section
export const SkillBars = [
	{
		Stack: "Frontend/Design",
		progressPercentage: "85",
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
	{
		Stack: "Problem Solving",
		progressPercentage: "95",
	},
	{
		Stack: "Ctritcal Thinking",
		progressPercentage: "90",
	},
];

// Education & Certificates Section
export const educationInfo = [
	{
		schoolName: "Cisco",
		subHeader: "Specialist IoT",
		duration: "January 2024",
		desc: "Certificate in IoT",
	},
	{
		schoolName: "PMI (Project Management Institute)",
		subHeader: "(APM) Certificate in Agile Project Management",
		duration: "January 2024",
		desc: "Fundamentals of Agile Project Management",
	},
	{
		schoolName: "PMI (Project Management Institute)  ",
		subHeader: "(PPM) Certificate in Predictive Project Management",
		duration: "January 2024",
		desc: "Fundamentals of Predictive Project Management",
	},
	{
		schoolName: "Udacity",
		subHeader: "NanoDegree Full Stack Web Development",
		duration: "March 2022",
		desc: "Full Stack Web Development",
	},
];

// Experience Section
export const experience = [
	{
		role: "IoT Developer (Specialization)",
		company: "Freelance",
		companylogo: "/img/icons/common/freelance.png",
		date: "April 2023 – to present",
		desc: [
			"Built 11 smart IoT projects using web simulators (Tinkercad, Wokwi) and microcontrollers (Arduino Uno, Nano, Raspberry Pi Pico, ESP32).",
			"Proficient in C++ and MicroPython for hardware-software integration.",
		  ],
	},
	{
		role: "Full Stack Web Developer",
		company: "Udacity",
		companylogo: "/img/icons/common/udacity.png",
		date: "June 2021 – March 2023",
		desc: [
			"Developed web applications (Python, PHP, Java) with HTML5/CSS3, JS frameworks & databases (MySQL, PostgreSQL, MongoDB).",
			"Secured APIs using OAuth2.0 and managed data access.",
		  ],
	},
	{
		role: "Project Manager",
		company: "Blue Umbrella Organization",
		companylogo: "/img/icons/common/blueumbrella.jpg",
		date: "Jan 2019 – to present",
		desc: [
			"Delivered project management training (200+ trainees) in remote areas.",
			"Implemented standard programs (15+), ensured project quality (budget, scope).",
			"Provided strategic/tactical planning for organizational goals.",
		  ],
	},
	
];

// Projects Section
export const projects = [
	// IoT Porjects
	{
		name: "Number Guessing game",
		desc: "Put your number sense to the test with Number Guessing! This interactive game challenges you to guess a secret number within a set limit of tries and time. Choose your difficulty (Easy, Medium, or Hard) and see if you can accurately guess the numbers within the given constraints!",
		video: "/iot/pv1.mp4",
		photo: "/iot/pp1.jpg",
		link: "https://wokwi.com/projects/393617093984075777",
		linkType: "wokwi",
		linkIcon: "/iot/wokwi.png",
		linkLabel: "View on Wokwi",
	},
	{
		name: "Raspberry Pi Pico Light Show (Pi-xel Party)",
		desc: "Dive into the Raspberry Pi Pico Light Show, Pi-xel Party! The Amazing Project With 10 standard LEDs, 4 RGB LEDs, and 6 patterns for the standard LEDs plus 4 simulations for the RGB LEDs, it's an immersive journey into a world of mesmerizing light. Join the party and let the magic unfold!",
		video: "/iot/pv2.mp4",
		photo: "/iot/pp2.jpg",
		link: "https://wokwi.com/projects/389553429400961025",
		linkLabel: "View on Wokwi",
	},
	{
		name: "EnviroGuard",
		desc: "EnviroGuard, your Arduino-powered guardian, keeps your environment in check.  Monitor temperature, detect motion with alerts (future!), and adjust LCD brightness for perfect viewing. This is just the start - expand with email alerts, smart lighting, data logging, and even remote monitoring, your gateway to a smarter home!",
		video: "/iot/pv3.mp4",
		photo: "/iot/pp3.jpg",
		link: "https://www.tinkercad.com/things/0D2MxyhamsU-enviroguard",
		linkLabel: "View on TinkerCad",
	},
	{
		name: "Snow White Proximity",
		desc: "Unleash a winter wonderland! An Arduino & NeoPixel ring create a mesmerizing display that reacts to your distance. The closer you get, the brighter the LEDs glow, mimicking a field of glistening snow.	Snow White Proximity. Enchanting, interactive, beginner-friendly. Learn about sensors & LEDs while building a magical winter experience.",
		video: "/iot/pvv4.mp4",
		photo: "/iot/pp4.jpg",
		link: "https://www.tinkercad.com/things/cq6MFYkhIAL-snow-white-porximity",
		linkLabel: "View on TinkerCad",
	},
	// Full Stack Projects
	{
		name: "Recruiting Agency",
		desc: "This is an innovative web application developed as a project for the Udacity Nano Degree program. It efficiently models job opportunities, manages candidates, and implements roles and tests. With seamless integration, users can navigate through job listings, manage seekers, and perform tests. Explore the project on GitHub for more details.",
		photo:"/fs/fp1.png",
		link: "https://github.com/tawfeeqzaghlool/Recruitung_Agency",
		linkLabel: "View on GitHub",
	},
	{
		name: "todo-app-flask-mongodb",
		desc: "This is a Flask application designed for efficient todo list management, utilizing MongoDB as its scalable NoSQL database. With Python at its core, it offers a seamless experience for creating, managing, and tracking tasks. Download Python and MongoDB, follow setup instructions, and start organizing your tasks effortlessly. Explore on GitHub.",
		photo:"/fs/fp2.png",
		link: "https://github.com/tawfeeqzaghlool/todo-app-flask-mongodb",
		linkLabel: "View on GitHub",
	},
];

// Feedback Section
export const feedbacks = [
	{
		name: "Client",
		feedback: "\"Wow! The Number Guessing game is fantastic! We're impressed with how engaging and addictive it is. Your brilliance shines through in every aspect of the game.\"",
	},
	{
		name: "Client",
		feedback: "\"EnviroGuard is exactly what we needed for monitoring our environment. It's intuitive to use, and the added features like motion detection make it even more valuable. Your work is top-notch!\"",
	},
	{
		name: "Client",
		feedback: "\"The Recruiting Agency web app is a game-changer for our business. It streamlines our recruitment process seamlessly. Your expertise and dedication are evident in every detail of the app. Thank you!\"",
	},
	{
		name: "Client",
		feedback: "\"Immersed in the Pi-xel Party, I was captivated by the Raspberry Pi Pico Light Show! It's a mesmerizing journey into a world of vibrant colors and dazzling patterns. Truly magical!\"",
	},
	{
		name: "Udacity",
		feedback: "\"Amazing effort, you've created a great project, well organized, and nice documented. Your project doesn't meet specifications, It exceeds it! Be proud of yourself, you are a great developer.\"",
	},
	{
		name: "Udacity",
		feedback: "\"Well done - you successfully delivered all requirements proposed by the project's rubric. This project challenges you on different fronts, all of them relevant to a Fullstack developer end-to-end workflow.\"",
	},
];

// SEO Section
// See object prototype on SEO.jsx page
export const seoData = {
	title: "Tawfeeq Zaghlool",
	description:
		"A passionate Full Stack Web Developer",
	author: "Tawfeeq Zaghlool",
	url: "https://tawfeeqportfolio.vercel.app/",
	keywords: [
		"Tawfeeq",
		"Tawfeeq Zaghlool",
		"@Tawfeeq Zaghlool",
		"Portfolio",
		"Tawfeeq Portfolio ",
		"Tawfeeq Zaghlool Portfolio",
	],
}