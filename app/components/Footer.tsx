"use client";

export default function Footer() {
	const year = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const socialLinks = [
		{
			name: "GitHub",
			href: "https://github.com/shresthjindal28",
			icon: (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.55-3.88-1.55-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.17-3.09-.12-.29-.51-1.48.11-3.08 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.79.12 3.08.73.8 1.17 1.83 1.17 3.09 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55A12.01 12.01 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
				</svg>
			),
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/shresth-jindal-b074ba28b/",
			icon: (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.5-2.23 3.05v5.61h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.6z" />
				</svg>
			),
		},
		{
			name: "X (Twitter)",
			href: "https://x.com/shresth_ji76019",
			icon: (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.09 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
				</svg>
			),
		},
	];

	return (
		<footer className="relative bg-background border-t border-border">
			{/* Decorative gradient overlay */}
			<div className="absolute inset-0 bg-background pointer-events-none" />
			
			<div className="relative max-w-6xl mx-auto px-4 py-12">
				{/* Main content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand section */}
					<div className="md:col-span-1">
						<h2 className="text-xl font-bold text-foreground mb-3">Shresth Jindal</h2>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Full-stack developer passionate about creating 
							exceptional digital experiences and innovative solutions.
						</p>
					</div>

					{/* Quick links */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
							Quick Links
						</h3>
						<div className="space-y-2">
							<a
								href="#about"
								className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
							>
								About
							</a>
							<a
								href="#experience"
								className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
							>
								Experience
							</a>
							<a
								href="#projects"
								className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
							>
								Projects
							</a>
							<a
								href="#certificates"
								className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
							>
								Certificates
							</a>
							<a
								href="#contact"
								className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
							>
								Contact
							</a>
              <a
                href="#contact"
                className="block text-emerald-400 hover:text-emerald-300 transition-colors duration-200 text-sm"
              >
                Hire a Freelance Web Developer
              </a>
						</div>
					</div>

					{/* Contact & Social */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
							Get In Touch
						</h3>
						<div className="space-y-3">
							<a
								href="mailto:shresthjindal28@gmail.com"
								className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm group"
							>
								<svg className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								shresthjindal28@gmail.com
							</a>
							
							{/* Social Links */}
							<div className="flex items-center space-x-4 pt-2">
								{socialLinks.map((social) => (
									<a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noreferrer"
										aria-label={social.name}
										className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-muted/50"
									>
										{social.icon}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-border pt-6">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						{/* Copyright */}
						<div className="text-muted-foreground text-sm">
							© {year} Shresth Jindal. All rights reserved.
						</div>

						{/* Back to top button */}
						<button
							type="button"
							onClick={scrollToTop}
							className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-200 text-sm px-4 py-2 rounded-full hover:bg-muted/50"
							aria-label="Back to top"
						>
							<svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
							</svg>
							<span>Back to Top</span>
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
