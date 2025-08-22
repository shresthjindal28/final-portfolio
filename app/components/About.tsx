
'use client';
import { useState, useEffect, useRef } from 'react';

export default function About() {
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
		<section id="about" ref={sectionRef} className="py-20 px-4 bg-black">
			<div className="max-w-6xl mx-auto">
				<div
					className={`transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
						<div role="presentation" className="w-20 h-1 bg-blue-400 mx-auto"></div>
					</div>

					<div className="max-w-4xl mx-auto">
						{/* About Content */}
						<div className="text-center">
							<h3 className="text-3xl font-bold text-white mb-8">Passionate Developer & Problem Solver</h3>

							<div className="space-y-6 text-gray-300 leading-relaxed text-lg">
								<p>
									I am a developer from Bangalore, India. I love building cool stuff and enjoy
									learning CS. I have a great sense of <span className="text-blue-400">web designing</span> which you will notice as you go through my work. I have worked on <span className="text-blue-400">freelance projects  and interned</span> at amazing places.
									BTW I am open to work and freelance, just{' '}
									<a
										href="#contact"
										className="text-blue-400 hover:text-blue-300 underline cursor-pointer transition-colors duration-300"
									>
										contact me
									</a>.
								</p>
							</div>

							{/* Quick Stats */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
									<div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
									<div className="text-gray-300">Years Experience</div>
								</div>
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
									<div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
									<div className="text-gray-300">Projects Completed</div>
								</div>
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
									<div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
									<div className="text-gray-300">Technologies</div>
								</div>
							</div>

							{/* Download Resume Button */}
							<div>
								<a
									href="/shresth_jinadl_resume.pdf"
									download="Shresth_Jindal_Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Download Shresth Jindal Resume"
									className="inline-flex items-center px-8 py-4 bg-transparent border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-lg font-medium"
								>
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									Download Resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
