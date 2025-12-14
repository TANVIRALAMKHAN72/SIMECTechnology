import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../Shared/Logo';

const Navber = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary pb-1"
              : "hover:text-primary transition text-lg"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary pb-1"
              : "hover:text-primary transition text-lg"
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary pb-1"
              : "hover:text-primary transition text-lg"
          }
        >
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary pb-1"
              : "hover:text-primary transition text-lg"
          }
        >
          Team
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/FAQ"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary pb-1"
              : "hover:text-primary transition text-lg"
          }
        >
          FAQ
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary pb-1"
              : "hover:text-primary transition text-lg"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-white/30 backdrop-blur-md shadow-md">
      <div className="navbar min-h-12 py-2 px-6">

        {/* LEFT — LOGO */}
        <div className="navbar-start flex items-center pl-4">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-end hidden lg:flex pr-6">
          <ul className="menu menu-horizontal gap-8">
            {navItems}
          </ul>
        </div>

        {/* MOBILE MENU */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white/90 rounded-box mt-3 w-52 p-2 shadow-lg backdrop-blur-md"
            >
              {navItems}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navber;
