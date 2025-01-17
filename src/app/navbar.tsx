import React from 'react';

export default function Navbar(){
    return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          MyPortfolio
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#projects" className="text-white hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
    )
}