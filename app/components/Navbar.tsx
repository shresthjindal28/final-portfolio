
'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

interface NavItem {
	name: string;
	id: string;
}

// Move nav items outside the component to avoid re-creating the array on each render
const NAV_ITEMS: NavItem[] = [
	{ name: 'Home', id: 'hero' },
	{ name: 'About', id: 'about' },
	{ name: 'Skills', id: 'skills' },
	{ name: 'Experience', id: 'experience' },
	{ name: 'Projects', id: 'projects' },
	{ name: 'Contact', id: 'contact' },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const ticking = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			// Batch scroll updates with requestAnimationFrame to avoid thrashing React state
			if (!ticking.current) {
				ticking.current = true;
				window.requestAnimationFrame(() => {
					setIsScrolled(window.scrollY > 50);
					ticking.current = false;
				});
			}
		};

		// Use passive listener for better scrolling performance
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = useCallback((sectionId: string): void => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMobileMenuOpen(false);
	}, []);

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
		}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="text-2xl font-bold text-white">
						<span className="text-blue-400">Shresth</span>Jindal
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.name}
								onClick={() => scrollToSection(item.id)}
								className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
							>
								{item.name}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
							</button>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-white p-2"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								{isMobileMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden mt-4 pb-4">
						<div className="flex flex-col space-y-4">
							{NAV_ITEMS.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.id)}
									className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
								>
									{item.name}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
