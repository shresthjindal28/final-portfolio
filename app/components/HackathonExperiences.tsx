"use client";
import { useEffect, useRef, useState } from "react";
import { X, Trophy, Award, Medal, Sparkles } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);


  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [radius, setRadius] = useState({ x: 300, y: 300 });

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

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;

      if (isMobile) {
        // Create an elliptical path on mobile to fit the screen better
        setRadius({
          x: Math.max((w / 2) - 64, 100), // Leaves space for the card width
          y: Math.max((h / 2) - 100, 150) // Spreads out further vertically
        });
      } else {
        const minD = Math.min(w, h);
        let r = minD * 0.35;
        if (r < 140) r = 140;
        if (r > 380) r = 380;
        setRadius({ x: r, y: r });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current || itemsRef.current.length === 0) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });

      const items = itemsRef.current;
      items.forEach((item, index) => {
        if (!item) return;
        const start = (index * 0.8) / items.length;
        tl.fromTo(item,
          { opacity: 0, scale: 0, filter: "blur(10px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.15, ease: "back.out(2)" },
          start
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [radius]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="absolute top-24 z-10 pointer-events-none flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <Sparkles className="w-4 h-4" />
          Events
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase text-center">
          HACKATHON <br className="md:hidden" />
          <span className="text-zinc-600 italic">TIMELINE.</span>
        </h2>
      </div>

      {/* Items Container */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
        {hackathons.map((hackathon, index) => {
          const angle = (index * (Math.PI * 2)) / hackathons.length - Math.PI / 2;
          const x = Math.cos(angle) * radius.x;
          const y = Math.sin(angle) * radius.y;

          return (
            <div
              key={hackathon.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="absolute left-1/2 top-1/2 pointer-events-auto"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div
                onClick={() => setSelectedImage(hackathon.imagePath)}
                className="group w-28 sm:w-32 md:w-56 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-2 md:p-3 hover:border-emerald-400/50 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] transition-all cursor-pointer"
              >
                <div className="relative aspect-video rounded-md md:rounded-lg overflow-hidden mb-2">
                  <Image src={hackathon.imagePath} alt={hackathon.title} fill className="object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 p-1 bg-black/60 backdrop-blur-md rounded">
                    {hackathon.position.includes("1st") ? <Trophy className="w-3 h-3 text-yellow-500" /> :
                      hackathon.position.includes("2nd") ? <Medal className="w-3 h-3 text-slate-300" /> :
                        <Award className="w-3 h-3 text-emerald-400" />}
                  </div>
                </div>
                <h3 className="text-white font-bold text-[9px] sm:text-[10px] md:text-xs tracking-tight truncate mb-0.5 md:mb-1">
                  {hackathon.title}
                </h3>
                <div className="flex items-center justify-between gap-1">
                  <p className="text-emerald-400/80 font-mono text-[7px] sm:text-[8px] md:text-[9px] uppercase truncate">{hackathon.position}</p>
                  <p className="text-gray-500 font-mono text-[6px] sm:text-[7px] md:text-[8px] uppercase truncate">{hackathon.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl animate-in fade-in duration-500 pointer-events-auto"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-emerald-400 transition-colors z-50">
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <div className="relative w-[90%] md:w-[80%] h-[70vh] md:h-[85vh] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10" onClick={e => e.stopPropagation()}>
            <Image src={selectedImage} alt="Detail" fill className="object-contain" priority />
          </div>
        </div>
      )}
    </section>
  );
}
