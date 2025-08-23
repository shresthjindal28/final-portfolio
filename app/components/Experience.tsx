'use client';
import { useState, useRef, useEffect } from 'react';

interface ExperienceItem {
	company: string;
	position: string;
	duration: string;
	location: string;
	description: string;
	achievements: string[];
	technologies: string[];
}

const experiences: ExperienceItem[] = [
	{
		company: 'Dolt Technologies',
		position: 'Full Stack Web Engineer',
		duration: 'Feb 2025 - Present',
		location: 'San Francisco, CA (Remote)',
		description: 'Working as a full stack developer building scalable web applications and implementing modern development practices.',
		achievements: [],
		technologies: []
	},
	{
		company: 'JoeAF Digital',
		position: 'Frontend Developer',
		duration: 'Dec 2024 - Jan 2025',
		location: 'New York, NY (Contract)',
		description: 'Frontend development role focusing on creating responsive and interactive user interfaces.',
		achievements: [],
		technologies: []
	}
];

export default function Experience() {
	const [isVisible, setIsVisible] = useState(false);
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
		<section id="experience" ref={sectionRef} className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<div className={`transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							Work Experience
						</h2>
						<div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
						<p className="text-xl text-muted-foreground">
							My professional journey and key achievements
						</p>
					</div>

					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-emerald-400/30 h-full"></div>

						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`relative mb-12 transition-all duration-700 delay-[${index * 200}ms] ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
								}`}
							>
								{/* Timeline dot */}
								<div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black z-10"></div>

								{/* Content */}
								<div className={`ml-16 md:ml-0 md:w-5/12 ${
									index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
								}`}>
									<div className="bg-card backdrop-blur-sm rounded-xl p-6 border border-border hover:border-emerald-400/30 transition-all duration-300">
										<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
											<h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
											<span className="text-emerald-400 font-medium text-sm bg-emerald-400/10 px-3 py-1 rounded-full">
												{exp.duration}
											</span>
										</div>
                    
										<h4 className="text-emerald-300 font-semibold mb-1">{exp.company}</h4>
										<p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                    
										<p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
