'use client';
import { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';


interface TechBadge {
	name: string;
	category: string;
	categoryName: string;
}



const techBadges: TechBadge[] = [
	// Frontend
	{ name: 'React', category: '⚛️', categoryName: 'Frontend' },
	{ name: 'TypeScript', category: '📝', categoryName: 'Languages' },
	{ name: 'Next.js', category: '⚛️', categoryName: 'Frontend' },
	{ name: 'Tailwind CSS', category: '🎨', categoryName: 'Frontend' },
	{ name: 'GSAP', category: '✨', categoryName: 'Frontend' },

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
					<div className="text-center mb-24">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
							<Zap className="w-4 h-4" />
							Tech Stack
						</div>
						<h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
							SKILLS &<br/>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100">EXPERTISE</span>
						</h2>
						<div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
					</div>

					{/* Technology Badges */}
					<div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
						{techBadges.map((tech) => (
							<div
								key={tech.name}
								className={`inline-flex items-center px-4 py-2 text-foreground font-medium text-sm shadow-lg hover:scale-105 transition-all duration-200 border border-border rounded-full bg-card`}
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
