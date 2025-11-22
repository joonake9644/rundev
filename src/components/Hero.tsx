"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white">
              CONCRETE
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-zinc-400">
              RUNNERS
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
            도시의 콘크리트 위를 달리는 산업적 러닝 크루
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-4xl sm:text-5xl font-bold text-white">
                250+
              </span>
              <span className="text-sm tracking-wider text-zinc-400">
                MEMBERS
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-4xl sm:text-5xl font-bold text-white">
                1000+
              </span>
              <span className="text-sm tracking-wider text-zinc-400">
                KM RUN
              </span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-4xl sm:text-5xl font-bold text-white">
                50+
              </span>
              <span className="text-sm tracking-wider text-zinc-400">
                EVENTS
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black hover:bg-zinc-200 tracking-wide px-8"
            >
              JOIN THE CREW
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-zinc-600 text-white hover:bg-zinc-800 tracking-wide px-8"
            >
              EXPLORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
