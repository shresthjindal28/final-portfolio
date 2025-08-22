"use client";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
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

	const contactInfo = [
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					></path>
				</svg>
			),
			title: "Email",
			info: "shresthjindal28@gmail.com",
			link: "mailto:shresthjindal28@gmail.com",
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					></path>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					></path>
				</svg>
			),
			title: "Location",
			info: "Bangalore, India",
			link: null,
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					></path>
				</svg>
			),
			title: "Phone",
			info: "+91 7461835970",
			link: "tel:+917461835970",
		},
	];

	// Social links are rendered directly below

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="py-20 px-4 bg-gray-900/30"
		>
			<div className="max-w-6xl mx-auto">
				<div
					className={`transition-all duration-1000 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Contact Information
						</h2>
						<div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Let&apos;s connect! You can reach me through any of the following channels.
						</p>
					</div>

					<div className="grid lg:grid-cols-1 gap-12 max-w-3xl mx-auto">
						{/* Contact Info */}
						<div
							className={`transition-all duration-700 ${
								isVisible
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-10"
							}`}
						>
							

							<div className="flex items-center justify-center gap-8 mb-8">
								{contactInfo.map((item) => (
									<div key={item.title} className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-blue-500/10 border border-blue-400/20 rounded-lg flex items-center justify-center text-blue-400">
											{item.icon}
										</div>
										<div>
											<h4 className="text-white font-semibold">{item.title}</h4>
											{item.link ? (
												<a
													href={item.link}
													className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
												>
													{item.info}
												</a>
											) : (
												<p className="text-gray-300">{item.info}</p>
											)}
										</div>
									</div>
								))}
							</div>

							{/* Social Links */}
							<div className="flex justify-center space-x-6">
								<a
									href="https://github.com/shresthjindal28"
									aria-label="GitHub"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors duration-200"
								>
									<svg
										className="w-6 h-6"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden
									>
										<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.55-3.88-1.55-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.17-3.09-.12-.29-.51-1.48.11-3.08 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.79.12 3.08.73.8 1.17 1.83 1.17 3.09 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55A12.01 12.01 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
									</svg>
								</a>

								<a
									href="https://www.linkedin.com/in/shresth-jindal-b074ba28b/"
									aria-label="LinkedIn"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
								>
									<svg
										className="w-6 h-6"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden
									>
										<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.5-2.23 3.05v5.61h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.6z" />
									</svg>
								</a>

								<a
									href="https://x.com/shresth_ji76019"
									aria-label="Twitter"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
								>
									<svg
										className="w-6 h-6"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden
									>
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.09 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
									</svg>
								</a>
							</div>

							{/* Additional CTA */}
							<div className="mt-8 p-6 bg-blue-500/5 border border-blue-400/20 rounded-xl">
								<h4 className="text-white font-semibold mb-2">
									Ready to start a project?
								</h4>
								<p className="text-gray-300 text-sm mb-4">
									I&apos;m always open to discussing new opportunities and
									interesting projects.
								</p>
								<a
									href="mailto:shresth.jindal@example.com"
									className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
								>
									Send me an email →
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
