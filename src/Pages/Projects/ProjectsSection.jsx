import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.webp";
import project4 from "../../assets/project-4.jpg";
import project5 from "../../assets/project-5.jpg";

const projects = [
  {
    img: project1,
    name: "Smart Pre-Paid Meter",
    client: "BPEMC",
    year: "2022 – 2023",
    location: "Narayanganj",
    category: "Power & Utility",
  },
  {
    img: project2,
    name: "Solar Project",
    client: "LGED",
    year: "2024",
    location: "Patuakhali",
    category: "Solar Energy",
  },
  {
    img: project3,
    name: "CNC Machine Controller Supply",
    client: "Bangladesh Railway",
    year: "2024",
    location: "Saydapur",
    category: "Industrial",
  },
  {
    img: project4,
    name: "CCTV & Computer Supply",
    client: "Cumilla University",
    year: "2025",
    location: "Cumilla",
    category: "IT Solutions",
  },
  {
    img: project5,
    name: "Sub Station Installation",
    client: "Bangladesh Islami University",
    year: "2025",
    location: "Dhaka",
    category: "Electrical",
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A showcase of our successfully completed projects
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-14">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                data-aos={reverse ? "fade-left" : "fade-right"}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image */}
                <motion.div
                  className="md:w-1/3 h-64 relative overflow-hidden"
                  whileHover={{ x: reverse ? -10 : 10 }}
                  transition={{ type: "spring", stiffness: 80 }}
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
                    {project.category}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="md:w-2/3 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-primary transition">
                    {project.name}
                  </h3>

                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-700">Client:</span>{" "}
                      {project.client}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">Year:</span>{" "}
                      {project.year}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">Location:</span>{" "}
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
