"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", target: "/" },
  { name: "About", target: "about" },
  { name: "Testimonial", target: "testimonial" },
  { name: "Services", target: "services" },
];

const Navbar = () => {
  return (
    <div className="fixed z-[50] top-6 w-full mx-auto flex justify-center items-center ">
      <ul className="flex flex-wrap gap-4 px-5 sm:px-6 md:px-8 lg:px-12 py-3 lg:py-4 rounded-full text-purple-400 shadow-lg backdrop-blur-md border border-purple-600 ">
        {links.map((link) => (
          <li
            className="cursor-pointer hover:text-violet-400 font-semibold "
            key={link.name}
          >
            <ScrollLink
              to={link.target}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-sm sm:text-base md:text-lg lg:text-xl"
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
