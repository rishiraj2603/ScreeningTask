// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Screening Task</div>

        <div className={`md:flex md:items-center`}>
          <ul className="md:flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
