import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            SIMEC Technology Ltd.
          </h3>
          <p className="text-sm leading-relaxed">
            SIMEC Technology Limited is a trusted engineering and technology-driven
            company providing power, HVAC, solar, and industrial solutions
            across Bangladesh.
          </p>
        </div>


{/* Quick Links */}
<div>
  <h4 className="text-lg font-semibold text-white mb-4">
    Quick Links
  </h4>

  <ul className="space-y-2 text-sm">
    <li>
      <NavLink
        to="/"
        className="hover:text-primary transition"
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/services"
        className="hover:text-primary transition"
      >
        Services
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/projects"
        className="hover:text-primary transition"
      >
        Projects
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/FAQ"
        className="hover:text-primary transition"
      >
        FAQ
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className="hover:text-primary transition"
      >
        Contact
      </NavLink>
    </li>
  </ul>
</div>


        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Power & Substation</li>
            <li>HVAC Installation</li>
            <li>Solar Energy Solutions</li>
            <li>Electrical & Utility Works</li>
            <li>Industrial Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1551606552</li>
            <li>✉️ info@simecbdltd.com</li>
            <li>🕒 Sat – Thu: 9:00 AM – 5:00 PM</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} SIMEC Technology Limited. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/tanvir-alam-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              SIMEC Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
