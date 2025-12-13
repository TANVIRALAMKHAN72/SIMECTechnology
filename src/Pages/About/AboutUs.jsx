import React, { useEffect, useState, useRef } from 'react';
import aboutImg from '../../assets/aboutus.png';

const AboutUs = () => {
  const [years, setYears] = useState(10);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Smooth counter animation (10 → 12)
  useEffect(() => {
    if (years < 12) {
      const timer = setTimeout(() => setYears(prev => prev + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [years]);

  // Scroll fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE WITH GRADIENT & COUNTER */}
        <div
          className={`relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } group`}
        >
          <img
            src={aboutImg}
            alt="Company Overview"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />

          {/* Light Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent"></div>

          {/* Experience Counter */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-primary">{years}+</h3>
            <p className="text-sm text-gray-700">Years Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`space-y-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-2xl font-semibold text-gray-700">About Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            SIMEC Technology Limited
          </h2>

          <p className="text-gray-600 leading-relaxed text-justify">
            SIMEC Technology Limited is a trusted engineering and technology-driven company
            delivering complete solutions in power systems, HVAC installation, solar energy,
            electrical substations, and industrial services across Bangladesh. We combine
            innovation, expertise, and reliability to support industries in achieving
            sustainable growth.
          </p>

          {/* Key Points */}
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Highly experienced engineering team
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Industrial & commercial project expertise
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Safety-focused & quality-driven approach
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              On-time delivery with long-term reliability
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
