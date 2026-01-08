"use client";
import { useEffect, useRef, useState } from "react";
import { X, Calendar, MapPin, Trophy, Award, Medal, Zap, Sparkles, Navigation } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface HackathonAchievement {
  id: number;
  title: string;
  event: string;
  organizer: string;
  position: string;
  date: string;
  sortDate: Date;
  location: string;
  imagePath: string;
}

export default function HackathonExperiences() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgPathRef = useRef<SVGPathElement | null>(null);
  const pathGlowRef = useRef<SVGPathElement | null>(null);
  const energyHeadRef = useRef<SVGGElement | null>(null);
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const hackathons: HackathonAchievement[] = [
    {
      id: 1,
      title: "Coding & Debugging",
      event: "IT-Fiesta",
      organizer: "Acharya Institute of Graduate Studies",
      position: "Participant",
      date: "Nov 12, 2024",
      sortDate: new Date("2024-11-12"),
      location: "Bengaluru",
      imagePath: "/WhatsApp Image 2026-01-08 at 14.24.08.jpeg",
    },
    {
      id: 2,
      title: "Binary Battle 2.0",
      event: "Your Design, Your Legacy",
      organizer: "Acharya Institute of Technology",
      position: "4th Place",
      date: "Feb 18, 2025",
      sortDate: new Date("2025-02-18"),
      location: "Bengaluru",
      imagePath: "/WhatsApp Image 2026-01-08 at 14.24.09.jpeg",
    },
    {
      id: 3,
      title: "Web Designing",
      event: "MATRIX 2K25",
      organizer: "KLE Society's Degree College",
      position: "1st Place",
      date: "Mar 21, 2025",
      sortDate: new Date("2025-03-21"),
      location: "Bengaluru",
      imagePath: "/WhatsApp Image 2026-01-08 at 14.24.09 (1).jpeg",
    },
    {
      id: 4,
      title: "Web Development",
      event: "MATRIX 2K25",
      organizer: "KLE Society's Degree College",
      position: "2nd Place",
      date: "Sep 25, 2025",
      sortDate: new Date("2025-09-25"),
      location: "Bengaluru",
      imagePath: "/WhatsApp Image 2026-01-08 at 14.24.09 (2).jpeg",
    },
    {
      id: 5,
      title: "Hack-Ula Hackathon",
      event: "Submission Round",
      organizer: "RVCE & NITK",
      position: "Participant",
      date: "Oct 2025",
      sortDate: new Date("2025-10-01"),
      location: "Online",
      imagePath: "/86499555-61b5-4908-a15d-f94c76eac338.jpg",
    },
  ].sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());

  const SPACING = 600; 
  const START_Y = 200;
  const TOTAL_HEIGHT = (hackathons.length - 1) * SPACING + START_Y + 400;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !svgPathRef.current || !timelineContainerRef.current) return;

    const path = svgPathRef.current;
    const pathGlow = pathGlowRef.current;
    const energyHead = energyHeadRef.current;
    
    // Create a GSAP context for easy cleanup
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop only: Timeline SVG animation
        "(min-width: 768px)": function() {
          const trigger = {
            trigger: timelineContainerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          };

          [path, pathGlow].forEach(p => {
            if (!p) return;
            const length = p.getTotalLength();
            gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
            gsap.to(p, { strokeDashoffset: 0, ease: "none", scrollTrigger: trigger });
          });

          if (energyHead) {
            gsap.to(energyHead, {
              motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
              },
              ease: "none",
              scrollTrigger: trigger
            });
          }
        },
        
        // All screens: Item entrance animations
        "all": function() {
          hackathons.forEach((_, index) => {
            const dot = dotRefs.current[index];
            const card = cardRefs.current[index];
            
            if (dot) {
              gsap.fromTo(dot, 
                { scale: 0, opacity: 0 },
                { 
                  scale: 1, opacity: 1, 
                  duration: 0.8,
                  ease: "back.out(2)",
                  scrollTrigger: {
                    trigger: dot,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }

            if (card) {
              const isEven = index % 2 === 0;
              gsap.fromTo(card,
                { 
                  x: isEven ? 60 : -60,
                  opacity: 0, 
                  rotateY: isEven ? -10 : 10,
                  filter: "blur(4px)"
                },
                { 
                  x: 0,
                  opacity: 1, 
                  rotateY: 0,
                  filter: "blur(0px)",
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isVisible, hackathons]);

  const generatePathData = () => {
    const width = 800;
    // We explicitly define coordinates to ensure 100% precision
    let d = `M ${width/2} 0`;
    d += ` L ${width/2} ${START_Y}`;

    for (let i = 0; i < hackathons.length - 1; i++) {
        const currY = START_Y + (i * SPACING);
        const nextY = START_Y + ((i + 1) * SPACING);
        const isEven = i % 2 === 0;
        
        // Control points for a massive, smooth S-swing
        // This ensures the path hits width/2 at exactly START_Y + i*SPACING
        const swingX = isEven ? width * 0.15 : width * 0.85;
        const midY = (currY + nextY) / 2;
        
        d += ` C ${swingX} ${currY + SPACING*0.3}, ${swingX} ${nextY - SPACING*0.3}, ${width/2} ${nextY}`;
    }
    
    // Tail
    d += ` L ${width/2} ${TOTAL_HEIGHT}`;
    return d;
  };

  return (
    <section id="hackathons" ref={sectionRef} className="py-24 pb-64 px-4 bg-background relative overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-400/5 blur-[120px] rounded-full animate-pulse decoration-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <Sparkles className="w-4 h-4" />
            Hall of Fame
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
            HACKATHON<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100">TIMELINE</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={timelineContainerRef} 
          className="relative" 
          style={{ height: `${TOTAL_HEIGHT}px` }}
        >
          {/* SVG TIMELINE - 100% SYNCED */}
          <div className="hidden md:block absolute inset-0 pointer-events-none overflow-visible">
            <svg
              className="w-full h-full"
              viewBox={`0 0 800 ${TOTAL_HEIGHT}`}
              preserveAspectRatio="none"
            >
              <path
                d={generatePathData()}
                className="stroke-white/5"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <path
                ref={pathGlowRef}
                d={generatePathData()}
                className="stroke-emerald-400/20 blur-xl"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
              />
              <path
                ref={svgPathRef}
                d={generatePathData()}
                className="stroke-emerald-400"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Energy Follower */}
              <g ref={energyHeadRef}>
                <circle r="12" fill="#34d399" className="animate-pulse" />
                <circle r="20" fill="#34d399" fillOpacity="0.2" />
                <circle r="30" fill="#34d399" fillOpacity="0.05" />
                {/* Visual trail effect */}
                <path d="M -10 -5 L 10 0 L -10 5 Z" fill="#34d399" rotate="180" opacity="0.5" />
              </g>
            </svg>
          </div>

          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400/50 via-emerald-400 to-emerald-400/50" />

          {/* HACKATHON ENTRIES */}
          {hackathons.map((hackathon, index) => {
            const isEven = index % 2 === 0;
            const yPos = START_Y + (index * SPACING);

            return (
              <div
                key={hackathon.id}
                className="relative md:absolute w-full mb-40 md:mb-0"
                style={{ top: typeof window !== 'undefined' && window.innerWidth < 768 ? 'auto' : `${yPos}px`, height: '0px' }}
              >
                {/* STATIONARY ANCHOR DOT - NOW 100% ACCURATE */}
                <div
                  ref={(el) => { dotRefs.current[index] = el; }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group/dot"
                >
                  <div className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-emerald-400/30 flex items-center justify-center transition-all duration-500 group-hover/dot:scale-125 group-hover/dot:border-emerald-400">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399]" />
                    <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-ping" />
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`
                    pl-14 md:pl-0
                    md:w-[42%] 
                    md:absolute
                    md:-translate-y-1/2
                    ${isEven ? "md:left-[55%]" : "md:right-[55%]"}
                  `}
                >
                  {/* Date Flag */}
                  <div className={`flex items-center gap-4 mb-6 ${!isEven ? "md:justify-end" : ""}`}>
                    <span className="text-xs font-black font-mono text-emerald-400 tracking-[0.4em] uppercase py-1 px-3 bg-emerald-400/5 border border-emerald-400/20 rounded-lg">
                      {hackathon.date}
                    </span>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-6 md:p-8 overflow-hidden transition-all duration-500 group-hover:border-emerald-400/30 group-hover:shadow-[0_0_80px_-20px_rgba(52,211,153,0.2)]">
                      {/* Technical Grid Overlay */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                      <div className="flex justify-between items-start relative z-10 mb-8">
                        <div>
                            <h3 className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight leading-none mb-2">
                                {hackathon.title}
                            </h3>
                            <p className="text-emerald-400/60 font-mono text-[10px] uppercase tracking-widest">{hackathon.event}</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-emerald-400/10 group-hover:border-emerald-400/20 transition-all">
                            {hackathon.position.includes("1st") ? <Trophy className="w-6 h-6 text-yellow-500" /> : 
                             hackathon.position.includes("2nd") ? <Medal className="w-6 h-6 text-slate-300" /> : 
                             <Award className="w-6 h-6 text-emerald-400" />}
                        </div>
                      </div>

                      <div 
                        className="relative aspect-video rounded-3xl overflow-hidden mb-8 cursor-pointer group/img"
                        onClick={() => setSelectedImage(hackathon.imagePath)}
                      >
                        <Image src={hackathon.imagePath} alt={hackathon.title} fill className="object-cover transition-transform duration-1000 group-hover/img:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                            <div className="w-14 h-14 rounded-full bg-emerald-400/90 flex items-center justify-center text-black">
                                <Navigation className="w-6 h-6 rotate-45" />
                            </div>
                        </div>
                      </div>

                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-xs py-3 border-y border-white/5">
                            <span className="text-gray-500 font-bold uppercase tracking-tighter">Organizer</span>
                            <span className="text-gray-300 font-medium">{hackathon.organizer}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <MapPin className="w-4 h-4 text-emerald-400" />
                                {hackathon.location}
                            </div>
                            <div className="text-sm font-black text-emerald-400">
                                {hackathon.position}
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl animate-in fade-in duration-500" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 text-white/50 hover:text-emerald-400 transition-colors"><X className="w-10 h-10" /></button>
          <div className="relative w-[94%] h-[85vh] rounded-3xl overflow-hidden border border-white/10" onClick={e => e.stopPropagation()}>
            <Image src={selectedImage} alt="Detail" fill className="object-contain" priority />
          </div>
        </div>
      )}
    </section>
  );
}
