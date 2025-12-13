import React, { useEffect, useRef, useState } from "react";
import qualityImg from "../../assets/quality.jpg";
import supportImg from "../../assets/support.jpg";
import experienceImg from "../../assets/experience.png";

const features = [
  {
    img: qualityImg,
    title: "Top Quality Services",
    description: "We provide top-notch services with high standards and excellence."
  },
  {
    img: supportImg,
    title: "24/7 Customer Support",
    description: "Our team is always available to assist you at any time of the day."
  },
  {
    img: experienceImg,
    title: "Years of Experience",
    description: "With years of experience, we deliver unmatched expertise and reliability."
  }
];

const WhyChooseMe = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll fade-in for whole section
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
      className={`py-20 bg-white transition-all duration-1000 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          Why Choose Me
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Discover the reasons why our clients prefer us for their projects and services.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-slate-50 p-6 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;
