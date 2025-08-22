'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl: string;
	featured: boolean;
	category: string;
}

const projects: Project[] = [
	{
    title: "Chating Web",
    description:
      "A real-time chat application with modern UI/UX, featuring instant messaging, user authentication, and seamless communication.",
    image: "/chat.png",
    technologies: ["React", "Firebase", "Real-time", "Chat"],
    liveUrl: "https://chat-app-0809.netlify.app/",
    githubUrl: "https://github.com/shresthjindal28/Chat-app.git",
    featured: true,
    category: "Web Application"
  },
  {
    title: "Gradient Library",
    description:
      "A comprehensive collection of beautiful gradients with easy-to-use interface for developers and designers to copy and implement.",
	image: "/gradora.png",
    technologies: ["Nextjs", "Tailwind CSS", "Clerk Auth", "UI Library"],
    liveUrl: "https://gradora.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/gradient-library.git",
    featured: false,
    category: "UI Library"
  },
  {
    title: "Note App",
    description:
      "A note-taking application with rich text editing, organization features, and seamless syncing across devices.",
	image: "/noteforge.png",
    technologies: ["Nextjs", "Tailwind CSS", "Clerk Auth", "UI Library"],
    liveUrl: "https://note-app-jet-one.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/Note-app",
    featured: false,
    category: "Web Application"
  }
	
];

export default function Projects() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
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

	// Simulate loading for demo purposes (replace with real fetch/loading logic)
	useEffect(() => {
		const t = setTimeout(() => setLoading(false), 700);
		return () => clearTimeout(t);
	}, []);



	return (
		<section id="projects" ref={sectionRef} className="py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className={`transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Featured Projects
						</h2>
						<div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
						<p className="text-xl text-gray-400 mb-8">
							Some of my recent work and side projects
						</p>

						
					</div>

					<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
						{loading ? (
							// skeleton placeholders
							Array.from({ length: 3 }).map((_, i) => (
								<div
									key={`skeleton-${i}`}
									className={`transform transition-all duration-700 delay-[${i * 100}ms] ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
									}`}
								>
									<div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
										<div className="h-48 bg-gray-700/40 animate-pulse"></div>
										<div className="p-6">
											<div className="h-4 w-32 bg-gray-700/40 rounded animate-pulse mb-4"></div>
											<div className="space-y-2">
												<div className="h-3 bg-gray-700/40 rounded w-full animate-pulse"></div>
												<div className="h-3 bg-gray-700/40 rounded w-5/6 animate-pulse"></div>
											</div>
											<div className="flex gap-3 mt-6">
												<div className="flex-1 h-9 bg-gray-700/40 rounded animate-pulse"></div>
												<div className="flex-1 h-9 bg-gray-700/40 rounded animate-pulse"></div>
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							projects.map((project, index) => (
								<div
									key={project.title}
									className={`group transform transition-all duration-700 delay-[${index * 100}ms] ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
									}`}
								>
									<div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:-translate-y-2">
										{/* Project image */}
										<div className="h-48 relative overflow-hidden">
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
											<div className="absolute bottom-4 left-4 right-4">
												<div className="flex items-center justify-between">
													<span className="text-white font-bold text-lg">{project.title}</span>
													{project.featured && (
														<span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
															Featured
														</span>
													)}
												</div>
											</div>

											{/* Hover overlay */}
											<div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>

										<div className="p-6">
											<div className="flex items-center justify-between mb-3">
												<span className="text-blue-400 text-sm font-medium bg-blue-400/10 px-3 py-1 rounded-full">
													{project.category}
												</span>
											</div>

											<p className="text-gray-300 mb-4 leading-relaxed text-sm">
												{project.description}
											</p>

											<div className="flex flex-wrap gap-2 mb-6">
												{project.technologies.slice(0, 3).map((tech) => (
													<span
														key={tech}
														className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
													>
														{tech}
													</span>
												))}
												{project.technologies.length > 3 && (
													<span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs border border-gray-700">
														+{project.technologies.length - 3} more
													</span>
												)}
											</div>

											<div className="flex gap-3">
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 text-sm"
												>
													Live Demo
												</a>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 text-sm"
												>
													GitHub
												</a>
											</div>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
