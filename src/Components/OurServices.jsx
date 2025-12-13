import React, { useRef, useEffect } from "react";
import { FcServices } from "react-icons/fc";


import powerImg from "../assets/power-substation.png";
import hvacImg from "../assets/HVAC.jpg";
import utilityImg from "../assets/utility.jpg";
import solarImg from "../assets/solar.jpg";
import cctvImg from "../assets/CCTV.jpg";

const servicesImages = [powerImg, hvacImg, utilityImg, solarImg, cctvImg];

const OurServices = () => {
  const containerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    let requestId;

    const scrollStep = () => {
      if (!container) return;

      scrollAmount += 1; // scroll speed
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }

      requestId = requestAnimationFrame(scrollStep);
    };

    requestId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      {/* Heading + Read More */}
     <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 relative">
    {/* Icon */}
    <span className="mr-2 w-10 md:w-8 "><FcServices /></span>
    Our Services
    {/* Colorful underline */}
    <span className="absolute left-0 -bottom-2 w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
  </h2>

  <a
    href="/services"
    className="
      mt-4 lg:mt-0
      inline-block
      bg-gradient-to-r from-primary to-secondary
      text-white
      px-6 py-3
      rounded-xl
      font-medium
      shadow-lg
      hover:shadow-2xl
      transform hover:scale-105
      transition-all duration-300 ease-in-out
    "
  >
    Read More
  </a>
</div>

      {/* Image Scroller */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {servicesImages.concat(servicesImages).map((img, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-96 lg:w-[32rem] h-64 lg:h-[18rem] rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src={img}
              alt={`Service ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default OurServices;
