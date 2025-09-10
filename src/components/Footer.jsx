import React from "react";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8 mt-12">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* Logo / Brand */}
        <div className="flex flex-col mb-4 md:mb-0">
          <h1 className="text-2xl font-bold uppercase">Asif Store</h1>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <NavLink to="/#home" 
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active" 
          className="hover:text-gray-300 cursor-pointer">
            Home
          </NavLink>

          <NavLink to="/products" 
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active" 
          className="hover:text-gray-300 cursor-pointer">
            Shop
          </NavLink>

          <NavLink to="/repairing" 
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active" 
          className="hover:text-gray-300 cursor-pointer">
            Repairing
          </NavLink>


          <NavLink to="/#contact" className="hover:text-gray-300">Contact</NavLink>
        </div>

        {/* Contact / User Info */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Asif ALi</span>
          <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-gray-300">
            asifali@gmail.com
          </a>
          <a href="tel:+3142366246" className="text-gray-400 hover:text-gray-300">
            +92 3142366246 
          </a>
          <a href="tel:+3142366246" className="text-gray-400 hover:text-gray-300">
            +92 3041305803 
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300"><FiFacebook size={24} /></a>
          <a href="#" className="hover:text-gray-300"><FiInstagram size={24}/></a>
          <a href="#" className="hover:text-gray-300"><FiYoutube size={24}/></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
