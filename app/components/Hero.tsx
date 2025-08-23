
'use client';
import { useState, useEffect, useCallback } from 'react';

export default function Hero() {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		// Trigger entrance animation on mount only once
		setIsVisible(true);
	}, []);

	const scrollTo = useCallback((id: string) => {
		const element = document.getElementById(id);
		if (element) element.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return (
		<section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
			

			<div className={`text-center z-10 max-w-4xl mx-auto transition-all duration-1000 ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}>
				<div className="mb-6">
					<p className="text-emerald-400 text-lg mb-2 font-medium">Hello, I&apos;m</p>
					<h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
						Shresth Jindal
					</h1>
					<h2 className="text-2xl md:text-4xl text-muted-foreground font-light mb-8">
						Full Stack Developer
					</h2>
				</div>

				<p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
					I create exceptional digital experiences through clean code and thoughtful design. 
					Passionate about building scalable web applications with modern technologies.
				</p>

				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
					<a
						href="#projects"
						onClick={(e) => {
							e.preventDefault();
							scrollTo('projects');
						}}
						className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
						role="button"
						aria-label="View my projects"
					>
						View My Work
					</a>
					<a
						href="#contact"
						onClick={(e) => {
							e.preventDefault();
							scrollTo('contact');
						}}
						className="px-8 py-4 border border-emerald-500 text-emerald-400 font-medium rounded-lg bg-transparent hover:bg-emerald-500 hover:text-white transition-all duration-300"
						role="button"
						aria-label="Get in touch"
					>
						Get In Touch
					</a>
				</div>

				{/* Social Links */}
				<div className="flex justify-center space-x-6">
					<a
						href="https://github.com/shresthjindal28"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors duration-200"
					>
						<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.55-3.88-1.55-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.17-3.09-.12-.29-.51-1.48.11-3.08 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.79.12 3.08.73.8 1.17 1.83 1.17 3.09 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55A12.01 12.01 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
						</svg>
					</a>

					<a
						href="https://www.linkedin.com/in/shresth-jindal-b074ba28b/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-emerald-400 transition-colors duration-200"
					>
						<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.5-2.23 3.05v5.61h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.6z" />
						</svg>
					</a>

					<a
						href="https://x.com/shresth_ji76019"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-emerald-400 transition-colors duration-200"
					>
						<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.09 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
