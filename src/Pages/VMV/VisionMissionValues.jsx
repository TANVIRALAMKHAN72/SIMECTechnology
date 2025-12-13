import { useEffect, useRef, useState } from "react";
import { Eye, Target, HeartHandshake } from "lucide-react";

const VisionMissionValues = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade-in on scroll
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
      className="py-16 px-4 bg-gradient-to-b from-white to-slate-50"
    >
      {/* Heading */}
     <div
  className={`max-w-7xl mx-auto text-center mb-12 transition-all duration-700 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
    Vision • Mission • Values
    {/* Colorful Underline */}
    <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
  </h2>

  <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
    What drives SIMEC Technology Limited forward in delivering excellence
    across Bangladesh.
  </p>
</div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
        
        {/* Vision */}
        <div
          className={`snap-center rounded-2xl p-8 backdrop-blur-md bg-white/40 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Eye className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a leading engineering and technology solutions provider
            in Bangladesh by delivering sustainable, innovative, and reliable
            infrastructure solutions.
          </p>
        </div>

        {/* Mission */}
        <div
          className={`snap-center rounded-2xl p-8 backdrop-blur-md bg-white/40 border border-white/30 shadow-md hover:shadow-xl transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Target className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To provide end-to-end engineering services including power systems,
            solar energy, HVAC, and industrial solutions while maintaining the
            highest standards of safety and quality.
          </p>
        </div>

        {/* Values */}
        <div
          className={`snap-center rounded-2xl p-8 backdrop-blur-md bg-white/40 border border-white/30 shadow-md hover:shadow-xl transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <HeartHandshake className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Integrity & Transparency</li>
            <li>✔ Quality & Reliability</li>
            <li>✔ Innovation & Sustainability</li>
            <li>✔ Client-Centric Approach</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
