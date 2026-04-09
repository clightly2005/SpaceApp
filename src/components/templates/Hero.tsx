
"use client"
import { useEffect, useRef, useState } from "react";

const MIN_SCALE = 1;//normal size at the top
const MAX_SCALE = 90;//how zoomed in at the bottom of the section

type props = {
  imageUrl: string;
}

export default function Hero({imageUrl}: props) {
  const zoomSectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(MIN_SCALE);
  const [textOpacity, setTextOpacity] = useState(1);
  const [hintOpacity, setHintOpacity] = useState(1);
  const [craterOpacity, setCraterOpacity] = useState(0);

  useEffect(() => {
    function onScroll() {
      const section = zoomSectionRef.current;
      if (!section) return;

      const element = section.getBoundingClientRect();
      //Total distance the user can scroll through home page
      const scrollableDistance = element.height - window.innerHeight;

      const scrolledSoFar = -element.top;//0 at top, positive going down
      //0 (haven't started) → 1 (fully scrolled through)
      const progress = Math.min(Math.max(scrolledSoFar / scrollableDistance, 0), 1);
      //slow start and then accelerate into crater
      const eased = progress * progress; 

      setScale(MIN_SCALE + (MAX_SCALE - MIN_SCALE) * eased);
      setTextOpacity(Math.max(0, 1 - progress / 1));
      setHintOpacity(progress > 1 ? 0 : 1);//Hide scroll hint once user starts scrolling
      //fade into black in last 20% of scroll
      setCraterOpacity(Math.max(0, progress - 0.7) / 0.3);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section ref={zoomSectionRef} className="relative" style={{ height: "150vh"}}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          <img src={imageUrl} alt="NASA POD API" className="w-full h-full object-cover"
            style={{ transform: `scale(${scale})`, transformOrigin: "center center", transition: "transform 0.05s ease-out", willChange: "transform",}}/>
          {/*text overlay*/}
          <div className="absolute z-10 text-center pointer-events-none"
            style={{ opacity: textOpacity, transition: "opacity 0.1s ease-out",}}>
            <h1 className="text-5xl md:text-7xl uppercase tracking-widest text-white drop-shadow-2xl font-serif"> Welcome to Luna</h1>
            <p className="mt-4 text-sm md:text-base uppercase tracking-[0.25em] text-white/60">  Scroll to explore</p>
          </div>
          {/*scroll hint*/}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
            style={{ opacity: hintOpacity, transition: "opacity 0.3s ease", }}>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40"> Scroll  </span>
            <div className="w-px h-10 bg-white/25 animate-pulse" />
          </div>
          {/*black crater overlay*/}
            <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none z-20"
            style={{ opacity: craterOpacity, transition: "opacity 0.05s ease-out" }} />
           </div>
      </section>

    </>
  );
}