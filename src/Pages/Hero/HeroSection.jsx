import React, { useState, useEffect, useRef } from "react";

import solarVideo from "../../assets/Solar panel installation.mp4";
import hvacVideo from "../../assets/HVAC installation.mp4";
import substationVideo from "../../assets/Electric substation (2).mp4";
import industryVideo from "../../assets/Industrial energy.mp4";

const HeroSection = () => {
  const slides = [
    {
      video: solarVideo,
      description:
        "Expert solar installations and CCTV security solutions for sustainable energy and monitoring.",
    },
    {
      video: hvacVideo,
      description:
        "Professional HVAC services covering supply, installation, and maintenance for offices and industrial buildings.",
    },
    {
      video: substationVideo,
      description:
        "Complete substation solutions including supply, installation, testing, and maintenance for reliable industrial power.",
    },
    {
      video: industryVideo,
      description:
        "Comprehensive utility and electrical solutions optimizing energy efficiency and seamless power management.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // দুইটা ভিডিও ref
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [useFirstVideo, setUseFirstVideo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        const next = (currentSlide + 1) % slides.length;
        setCurrentSlide(next);

        if (useFirstVideo) {
          videoRef2.current.src = slides[next].video;
          videoRef2.current.play();
        } else {
          videoRef1.current.src = slides[next].video;
          videoRef1.current.play();
        }

        setUseFirstVideo(!useFirstVideo);
        setFade(true);
      }, 700);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, useFirstVideo]);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Video Layer 1 */}
      <video
        ref={videoRef1}
        src={slides[0].video}
        autoPlay
        muted
        loop
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          useFirstVideo ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Video Layer 2 */}
      <video
        ref={videoRef2}
        autoPlay
        muted
        loop
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          useFirstVideo ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Overlay Text */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-blue-500 text-3xl md:text-5xl font-bold mb-4">
          Power • Engineering • Construction Solutions
        </h1>

        <h2 className="text-base-100 text-xl md:text-2xl mb-6">
          Driving Industrial Innovation Across Bangladesh
        </h2>

        <p className="text-base-100 text-base md:text-lg max-w-2xl">
          {slides[currentSlide].description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
