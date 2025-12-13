import React, { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mdImage from "../../assets/13.12.2025_16.48.51_REC.png"; // Managing Director image path

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* LEFT - Managing Director Info */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Managing Director</h2>

          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
            <img
              src={mdImage}
              alt="Managing Director"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-primary mb-1">
              Engr. Mohammad Abdus Salam Khan
            </h3>
            <p className="text-gray-600 mb-1">FIEB, FEWA, ELB, BSc in EEE</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-6 h-6 text-primary" />
              <span>01919822952</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-6 h-6 text-primary" />
              <span>engrsalamkhan2@yahoo.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Noakhail Tower (4th Floor) 55/B, Purana Paltan, Dhaka-1000</span>
            </div>
          </div>
        </div>

        {/* RIGHT - Contact Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              rows="5"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactSection;
