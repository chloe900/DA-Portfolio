'use client';

import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#F4F5FF] text-white p-12 border-b-2 border-[#020617]">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <i className="fa-brands fa-codepen h-8 w-8 mt-2 text-3xl text-[#1e3a8a]"></i>
          <h1 className="text-xl font-serif text-[#1e3a8a]">Chloe's Portfolio</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1e3a8a] focus:outline-none">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} h-8 w-8`}></i>
          </button>
        </div>
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} md:flex md:w-auto`}>
          <ul className="text-xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 justify-center items-center font-serif text-white bg-[#1e3a8a] opacity-white-50 rounded-full px-20 py-3 md:px-0 mt-4 md:mt-0">
            <li>
              <a href="#projects" className="hover:bg-[#F4F5FF] rounded-full p-4 hover:text-[#1e3a8a] hover:border hover:border-[#1e3a8a]">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:bg-[#F4F5FF] rounded-full p-4 hover:text-[#1e3a8a] hover:border hover:border-[#1e3a8a]">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-[#F4F5FF] rounded-full p-4 hover:text-[#1e3a8a] hover:border hover:border-[#1e3a8a]">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}