
'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

const scrollTo = (id: string) => {
	const element = document.getElementById(id);
	if (element) element.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
	return (
		<section id="hero" className="min-h-screen flex items-center justify-center px-4">
			<div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
				<div className="space-y-2 mb-8">
					<p className="text-emerald-500 text-sm font-medium">Hello, I&apos;m</p>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
						Shresth Jindal
					</h1>
					<h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light">
						Full Stack Developer
					</h2>
				</div>

				<p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
					Building scalable web applications with modern technologies and clean code.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<button
						onClick={() => scrollTo('projects')}
						className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
						aria-label="View my projects"
					>
						View Work
					</button>
					<button
						onClick={() => scrollTo('contact')}
						className="px-6 py-3 border border-emerald-500 text-emerald-500 font-medium rounded-md hover:bg-emerald-500 hover:text-white transition-colors"
						aria-label="Get in touch"
					>
						Contact
					</button>
				</div>

				<div className="flex justify-center gap-6">
					<a
						href="https://github.com/shresthjindal28"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						<Github size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/shresth-jindal-b074ba28b/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-emerald-500 transition-colors"
					>
						<Linkedin size={20} />
					</a>
					<a
						href="https://x.com/shresth_ji76019"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-emerald-500 transition-colors"
					>
						<Twitter size={20} />
					</a>
				</div>
			</div>
		</section>
	);
}
