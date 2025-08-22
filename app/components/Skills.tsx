'use client';
import { useState, useEffect, useRef } from 'react';

interface SkillCategory {
	category: string;
	skills: string[];
}

interface TechBadge {
	name: string;
	category: string;
	categoryName: string;
}

const skillCategories: SkillCategory[] = [
	{
		category: 'Frontend',
		skills: ['React/Next.js', 'JavaScript/TypeScript', 'Tailwind CSS', 'HTML/CSS']
	},
	{
		category: 'Backend',
		skills: ['Node.js', 'Python', 'Express.js', 'RESTful APIs']
	},
	{
		category: 'Database & Tools',
		skills: ['MongoDB', 'PostgreSQL', 'Git/GitHub', 'Docker']
	}
];

const techBadges: TechBadge[] = [
	// Frontend
	{ name: 'React', category: '⚛️', categoryName: 'Frontend' },
	{ name: 'JavaScript', category: '📝', categoryName: 'Languages' },
	{ name: 'HTML5', category: '🌐', categoryName: 'Frontend' },
	{ name: 'CSS3', category: '🎨', categoryName: 'Frontend' },
	{ name: 'TypeScript', category: '📝', categoryName: 'Languages' },
	{ name: 'Next.js', category: '⚛️', categoryName: 'Frontend' },
	{ name: 'Redux', category: '⚛️', categoryName: 'Frontend' },
	{ name: 'SASS', category: '🎨', categoryName: 'Frontend' },
	{ name: 'Tailwind CSS', category: '🎨', categoryName: 'Frontend' },
	{ name: 'GSAP', category: '✨', categoryName: 'Frontend' },
	{ name: 'Framer Motion', category: '✨', categoryName: 'Frontend' },
	{ name: 'Axios', category: '🔗', categoryName: 'Frontend' },

	// Backend
	{ name: 'Node.js', category: '🟢', categoryName: 'Backend' },
	{ name: 'Express', category: '⚡', categoryName: 'Backend' },
	{ name: 'Firebase', category: '🔥', categoryName: 'Backend' },
	{ name: 'Clerk', category: '🔐', categoryName: 'Backend' },
	{ name: 'WebSocket', category: '🔌', categoryName: 'Backend' },

	// Database
	{ name: 'MongoDB', category: '🍃', categoryName: 'Database' },
	{ name: 'SQL', category: '🗄️', categoryName: 'Database' },
	{ name: 'Redis', category: '⚡', categoryName: 'Database' },
	{ name: 'Prisma', category: '🗄️', categoryName: 'Database' },

	// DevOps & Tools
	{ name: 'Git', category: '📚', categoryName: 'DevOps' },
	{ name: 'Docker', category: '🐳', categoryName: 'DevOps' },
	{ name: 'Husky', category: '🐕', categoryName: 'DevOps' },
	{ name: 'ESLint', category: '🔧', categoryName: 'Tools' },
	{ name: 'Thunder Client', category: '⚡', categoryName: 'Tools' },
  
	// Design
	{ name: 'Figma', category: '🎨', categoryName: 'Design' },
	{ name: 'Blender', category: '🎭', categoryName: 'Design' }
];

export default function Skills() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section id="skills" ref={sectionRef} className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<div className={`transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Skills & Technologies
						</h2>
						<div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Technologies and tools I work with
						</p>
					</div>

					{/* Technology Badges */}
					<div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
						{techBadges.map((tech) => (
							<div
								key={tech.name}
								className={`inline-flex items-center px-4 py-2 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all duration-200 border border-opacity-20 border-white rounded-full bg-gray-800/50`}
								title={`${tech.name} - ${tech.categoryName}`}
							>
								<span className="text-sm mr-2">{tech.category}</span>
								{tech.name}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
