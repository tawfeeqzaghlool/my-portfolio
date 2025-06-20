import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08
		}
	}
};

const child = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};

export default function AnimatedText({ text, className }) {
	return (
		<motion.div
			className={className}
			variants={container}
			initial="hidden"
			animate="visible"
			style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
		>
			{text.split(' ').map((word, i) => (
				<motion.span key={i} variants={child}>
					{word}
				</motion.span>
			))}
		</motion.div>
	);
}
