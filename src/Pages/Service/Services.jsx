import React, { useRef, useEffect, useState } from "react";
import { Zap, Thermometer, Server, Sun, Camera } from "lucide-react";

import powerImg from "../../assets/power-substation.png";
import hvacImg from "../../assets/HVAC.jpg";
import utilityImg from "../../assets/utility.jpg";
import solarImg from "../../assets/solar.jpg";
import cctvImg from "../../assets/CCTV.jpg";

const servicesData = [
  {
    title: "Electric Power Substation",
    description:
      "Complete substation solutions including supply, installation, testing, and maintenance for reliable industrial power. Our team ensures high-quality electrical setups with safety compliance and optimal performance.",
    img: powerImg,
    icon: <Zap className="w-10 h-10 text-white" />,
  },
  {
    title: "Air Condition Systems",
    description:
      "Industrial & commercial HVAC supply, installation, and maintenance for optimal indoor environments. We provide end-to-end solutions from planning, installation, and regular servicing to ensure energy efficiency and comfort.",
    img: hvacImg,
    icon: <Thermometer className="w-10 h-10 text-white" />,
  },
  {
    title: "All Utility & Electrical Power Solutions",
    description:
      "End-to-end solutions for energy optimization, electrical wiring, utility management, and power efficiency improvements. We handle design, installation, and maintenance to ensure seamless operation and reliability.",
    img: utilityImg,
    icon: <Server className="w-10 h-10 text-white" />,
  },
  {
    title: "Solar System",
    description:
      "Expert solar installations for sustainable energy solutions with EPC services. We offer design, installation, and maintenance of on-grid and hybrid solar systems, maximizing energy savings and reducing carbon footprint.",
    img: solarImg,
    icon: <Sun className="w-10 h-10 text-white" />,
  },
  {
    title: "CCTV & Security Solutions",
    description:
      "Professional CCTV installations for monitoring and security across industrial & commercial sites. Our solutions include high-resolution cameras, network setup, and remote monitoring for complete security coverage.",
    img: cctvImg,
    icon: <Camera className="w-10 h-10 text-white" />,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  // Scroll fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndex((prev) => Math.max(prev, index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          SIMEC Technology Limited provides top-notch engineering solutions for industries across Bangladesh.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={sectionRef}
        className="flex flex-col space-y-12 md:space-y-16 max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory"
      >
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              data-index={index}
              className={`service-card flex flex-col lg:flex-row gap-8 items-center snap-center transition-all duration-700 transform ${
                visibleIndex >= index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
             <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg group perspective-1000">
  {/* IMAGE */}
  <img
    src={service.img}
    alt={service.title}
    className="w-full h-64 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
  />
  {/* Gradient overlay ONLY, no blur on image */}
  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/10 to-transparent rounded-xl transition-all duration-500 group-hover:from-black/40 group-hover:via-black/20"></div>
  {/* Icon */}
  <div className="absolute top-4 left-4 p-3 bg-primary/80 rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110">
    {service.icon}
  </div>
</div>


              {/* TEXT */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-semibold text-primary">{service.title}</h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
