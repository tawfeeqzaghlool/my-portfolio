import emoji from "react-easy-emoji";

export const greetings = {
	name: "Tawfeeq Zaghlool",
	title: "Hi all, I'm Tawfeeq",
	description:
		"Hello, my name is Tawfeeq, you can also call me Tio ;) I am a Full Stack Web Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using several technologies and programming languages. I seek to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer. Project manager with 5+ years of managing, planning, executing, and delivering projects. Expert in the project life cycle.",
	resumeLink:
		"https://drive.google.com/file/d/1j4XW7-U85ll52tKVH05CXY3smmXVazI8/view?usp=sharing",
};

export const openSource = {
	githubUserName: "tawfeeqzaghlool",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/tawfeeqzaghlool",
	linkedin: "https://www.linkedin.com/in/tawfeeqzaghlool",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
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
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
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
							
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
			
				
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

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "Udacity",
		subHeader: "NanoDegree Full Stack Web Development",
		duration: "June 2021 - March 2022",
		desc: "Full Stack Web Development",
	},
];

export const experience = [
	{
		role: "Full Stack Web Developer",
		company: "Udacity",
		companylogo: "/img/icons/common/udacity.png",
		date: "June 2021 – March 2022",
		desc: "Designed +6 front end applications using HTML5, CSS3, JavaScript, jQuery, Bootstrap, XML, SAAS, LESS, DOM. Managed the authentication and authorization to Rest services by exchanging Access tokens using OAUTH2.0. Build a solid database with MYSQL, POSTGRES, PL/SQL MongoDB.",
	},
	{
		role: "Project Manager",
		company: "Blue Umbrella Organization",
		companylogo: "/img/icons/common/blueumbrella.jpg",
		date: "Jan 2019 – current",
		desc: "Trained +200 trainees in remote areas on the fundimental of project management. Implement +15 standard management programs.Review project work products and deliverables to ensure quality assurance within budget cost and scope. Provide strategic and tactical planning to meet the objectives of the organization.",
	},
	
];

export const projects = [
	{
		name: "Recruitung_Agency",
		desc: "The Recruiting Agency models a company that is responsible for posting, managing opportunities, and finding candidates for those opportunities. This is a web application for the Udacity Nano Degree program, that contains Models, Endpoints, Roles, and Tests.",
		github: "https://github.com/tawfeeqzaghlool/Recruitung_Agency",
	},
	{
		name: "FSND-Deploy-Flask-App-to-Kubernetes-Using-EKS",
		desc: "The app relies on a secret set as the environment variable JWT_SECRET to produce a JWT. The built-in Flask server is adequate for local development, but not production, so you will be using the production-ready Gunicorn server when deploying the app.",
		github: "https://github.com/tawfeeqzaghlool/FSND-Deploy-Flask-App-to-Kubernetes-Using-EKS",
	},
	{
		name: "todo-app-flask-mongodb",
		desc: "This is a simple Flask app to create a todo list with MongoDB",
		github: "https://github.com/tawfeeqzaghlool/todo-app-flask-mongodb",
	},
	{
		name: "django-jewelry-shop (Ecommerce)",
		desc: "This is a simple e-commerce website built with Django (Python) and PayPal is added as payment processor.",
		github: "https://github.com/tawfeeqzaghlool/django-jewelry-shop",
	},
];
export const feedbacks = [
	{
		name: "Udacity",
		feedback:
			"Amazing effort, you've created a great project, well organized, and nice documented. Your project doesn't meet specifications, It exceeds it! Be proud of yourself, you are a great developer.",
	},
	{
		name: "Udacity",
		feedback:
			"Well done - you successfully delivered all requirements proposed by the project's rubric. This project challenges you on different fronts, all of them relevant to a Fullstack developer end-to-end workflow.",
	},
];
// See object prototype on SEO.jsx page
export const seoData = {
	title: "Tawfeeq Zaghlool",
	description:
		"A passionate Full Stack Web Developer",
	author: "Tawfeeq Zaghlool",
	// image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
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