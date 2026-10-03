"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const carRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".intro", {
        opacity: 0,
        y: 25,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".stat", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.to(carRef.current, {
        x: () => window.innerWidth * 0.25,
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#101010] text-white">
      <section className="hero relative h-[180vh]">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 py-8 sm:px-12 lg:px-20">
          <nav className="intro flex justify-between">
            <h2 className="text-xl font-bold tracking-[0.25em]">
              ITZFIZZ<span className="text-lime-300">.</span>
            </h2>
            <span className="text-xs tracking-widest text-white/50">
              DIGITAL STUDIO
            </span>
          </nav>

          <div className="mt-16 sm:mt-20">
            <p className="intro mb-5 text-xs uppercase tracking-[0.4em] text-lime-300">
              Creative digital experiences
            </p>

            <h1 className="intro text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              WELCOME
              <br />
              <span className="text-lime-300">ITZFIZZ</span>
            </h1>

            <p className="intro mt-6 max-w-sm text-sm leading-6 text-white/55">
              We create digital experiences that move
              people and brands forward.
            </p>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 sm:mt-14 sm:gap-8">
            <div className="stat border-t border-white/20 pt-4">
              <p className="text-3xl font-semibold sm:text-4xl">
                98<span className="text-lime-300">%</span>
              </p>
              <p className="mt-2 text-xs text-white/50">
                Client satisfaction
              </p>
            </div>

            <div className="stat border-t border-white/20 pt-4">
              <p className="text-3xl font-semibold sm:text-4xl">
                85<span className="text-lime-300">%</span>
              </p>
              <p className="mt-2 text-xs text-white/50">
                Engagement growth
              </p>
            </div>

            <div className="stat border-t border-white/20 pt-4">
              <p className="text-3xl font-semibold sm:text-4xl">
                92<span className="text-lime-300">%</span>
              </p>
              <p className="mt-2 text-xs text-white/50">
                Projects delivered
              </p>
            </div>
          </div>

          <div className="absolute bottom-[13%] left-0 w-full">
            <div className="absolute bottom-0 h-px w-full bg-white/20" />

            <div
              ref={carRef}
              className="relative ml-[3%] w-[75%] max-w-[600px]"
            >
              <svg
                viewBox="0 0 600 220"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="300"
                  cy="190"
                  rx="250"
                  ry="15"
                  fill="#000"
                  opacity=".6"
                />

                <path
                  d="M45 158 L65 128 L160 105 L225 53 Q250 35 310 35 L390 40 Q430 45 465 103 L535 121 Q555 128 565 153 L560 171 L510 177 Q505 135 465 135 Q425 135 420 177 L180 177 Q175 135 135 135 Q95 135 90 177 L50 173 Z"
                  fill="#b6bdb8"
                  stroke="#f0f0ec"
                  strokeWidth="2"
                />

                <path
                  d="M238 101 L260 56 Q280 44 307 44 L307 101 Z"
                  fill="#293536"
                />

                <path
                  d="M320 44 L388 48 Q420 55 447 101 L320 101 Z"
                  fill="#293536"
                />

                <path
                  d="M52 150 L100 143"
                  stroke="#d9ff71"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <path
                  d="M530 145 L557 151"
                  stroke="#fff"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <circle cx="135" cy="170" r="38" fill="#151515" />
                <circle cx="135" cy="170" r="22" fill="#8a918e" />
                <circle cx="135" cy="170" r="9" fill="#303432" />

                <circle cx="465" cy="170" r="38" fill="#151515" />
                <circle cx="465" cy="170" r="22" fill="#8a918e" />
                <circle cx="465" cy="170" r="9" fill="#303432" />
              </svg>
            </div>
          </div>

          <div className="intro absolute bottom-5 right-6 text-xs tracking-[0.25em] text-white/50 sm:right-12">
            SCROLL TO EXPLORE ↓
          </div>
        </div>
      </section>

      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.4em] text-lime-300">
          KEEP EXPLORING
        </p>
        <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
          Let&apos;s create
          <br />
          something bold.
        </h2>
      </section>
    </main>
  );
}