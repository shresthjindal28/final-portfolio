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
							Experience
						</h2>
						<div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
						<p className="text-xl text-muted-foreground">
							Professional background and expertise
						</p>
					</div>

					<div className="space-y-6">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`transition-all duration-700 delay-[${index * 200}ms] ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
								}`}
							>
								<div className="group bg-card/50 backdrop-blur-sm rounded-lg p-8  hover:bg-card/80 hover:border-emerald-400/20 transition-all duration-300">
									<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
										<div className="flex-1">
											<h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-emerald-400 transition-colors duration-300">
												{exp.position}
											</h3>
											<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
												<span className="font-medium text-foreground">{exp.company}</span>
												<span className="hidden md:block text-border">•</span>
												<span className="text-sm">{exp.location}</span>
											</div>
										</div>
										<div className="mt-3 md:mt-0">
											<span className="inline-block px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-md border border-emerald-400/20">
												{exp.duration}
											</span>
										</div>
									</div>
									
									<p className="text-muted-foreground leading-relaxed">
										{exp.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
