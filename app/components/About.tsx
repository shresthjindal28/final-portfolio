
'use client';
import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

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

	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href + '#about');
	};

	return (
		<section id="about" ref={sectionRef} className="py-20 px-4 bg-black">
			<div className="max-w-6xl mx-auto">
				<div
					className={`transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<div className="text-center mb-8">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
						<div role="presentation" className="w-20 h-1 bg-emerald-400 mx-auto"></div>
					</div>

					

					<div className="max-w-4xl mx-auto">
						{/* Intro */}
						<div className="text-center">
							<h3 className="text-3xl font-bold text-foreground mb-8">Passionate Developer & Problem Solver</h3>

							<div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
								<p>
									I am a freelance web developer from Bangalore, India. I build fast, SEO‑friendly websites and scalable apps using <span className="text-emerald-400">React & Next.js</span>.
									I have worked on <span className="text-emerald-400">freelance projects and internships</span> delivering performance, accessibility, and clean developer experience.
									I am open to freelance and contract roles — just <a href="#contact" className="text-emerald-400 hover:text-emerald-300 underline">contact me</a>.
								</p>
							</div>

							{/* Quick Stats */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
								<div className="bg-card rounded-xl p-6 border border-border">
									<div className="text-3xl font-bold text-emerald-400 mb-2">3+</div>
									<div className="text-muted-foreground">Years Experience</div>
								</div>
								<div className="bg-card rounded-xl p-6 border border-border">
									<div className="text-3xl font-bold text-emerald-400 mb-2">20+</div>
									<div className="text-muted-foreground">Projects Completed</div>
								</div>
								<div className="bg-card rounded-xl p-6 border border-border">
									<div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
									<div className="text-muted-foreground">Core Technologies</div>
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
									className="inline-flex items-center px-8 py-4 bg-transparent border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 text-lg font-medium"
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

				{/* Structured data: FAQPage */}
				<Script id="faq-structured-data" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [
							{
								"@type": "Question",
								"name": "How much does a freelance web developer cost in Bangalore?",
								"acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on scope. Typical projects range from ₹40k–₹2L+. I provide fixed quotes after a discovery call." }
							},
							{
								"@type": "Question",
								"name": "How long does it take to build a website?",
								"acceptedAnswer": { "@type": "Answer", "text": "Most websites ship in 2–6 weeks. Timelines vary by features, content, and integrations." }
							},
							{
								"@type": "Question",
								"name": "Do you provide SEO and Core Web Vitals optimization?",
								"acceptedAnswer": { "@type": "Answer", "text": "Yes — I implement metadata, structured data, internal links, and performance patterns to improve rankings and UX." }
							},
							{
								"@type": "Question",
								"name": "Can you work with existing designs or code?",
								"acceptedAnswer": { "@type": "Answer", "text": "Absolutely. I can integrate with your current stack or rebuild components for speed and accessibility." }
							}
						]
					})}
				</Script>

				{/* Structured data: HowTo */}
				<Script id="howto-structured-data" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "HowTo",
						"name": "How to hire a freelance web developer",
						"description": "Steps to hire a freelance web developer for a fast, SEO‑friendly website.",
						"totalTime": "P2W",
						"estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "40000-200000" },
						"step": [
							{ "@type": "HowToStep", "name": "Contact", "text": "Share goals and requirements.", "url": "#contact" },
							{ "@type": "HowToStep", "name": "Discovery Call", "text": "Scope, timeline, and budget.", "url": "#process" },
							{ "@type": "HowToStep", "name": "Proposal", "text": "Fixed scope with milestones.", "url": "#process" },
							{ "@type": "HowToStep", "name": "Build", "text": "Design/dev with performance checks.", "url": "#process" },
							{ "@type": "HowToStep", "name": "Launch & Optimize", "text": "Deploy, measure, iterate.", "url": "#process" }
						]
					})}
				</Script>
			</div>
		</section>
	);
}
