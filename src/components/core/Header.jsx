import { Facebook, Instagram,  Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-black z-[999] text-sm px-20 h-[61px] fixed top-0 left-0 right-0 flex justify-between items-center">
      <h1 className="text-white font-glock font-bold text-3xl">Benjamin</h1>
      <div className="flex space-x-8 items-center h-full">
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-orange-600"> <Link to="/">Home</Link></li>
          <li className="hover:text-orange-600"> <Link to="/about">About</Link></li>
          <li className="hover:text-orange-600"> <Link to="/projects">Projects</Link></li>
          <li className="hover:text-orange-600"> <Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex space-x-8 items-center text-white">
          <Facebook size={18} />
          <Instagram size={18} />
          <Linkedin size={18} />
        </div>
        <div className="flex py-4 items-center font-medium border-b-2 border-white text-white bg-orange-600 px-8">
          Lorem ipsum dolor sit.
        </div>
      </div>
    </nav>
  );
}
