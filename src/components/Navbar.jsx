  // import React from 'react'
  // import { NavLink } from 'react-router-dom'
  // import { FiMenu } from "react-icons/fi";
  // import { HiXMark } from "react-icons/hi2";
  // import { FaShoppingCart } from "react-icons/fa";
  // import { Link } from 'react-scroll';
  // import { motion } from "motion/react"


  // function Header() {

  //   const [isOpen, setIsOpen] = React.useState(false);
  //   const toggleMenu = () => {
  //         setIsOpen(!isOpen);
  //     };

  //   return (
  //     <div>
  //         <div className='w-full bg-zinc-900 text-white p-4 h-16 md:fixed z-50 fixed'>
  //             <div className='container mx-auto flex justify-between items-center md:w-[85%]'>
  //                 <motion.div
  //                   animate={{ scale: [1, 1.1, 1] }}
  //                   transition={{ repeat: Infinity, duration: 1 }}
  //                 >
  //                   <h1 className='text-2xl font-bold uppercase'>Asif Store</h1>
  //                 </motion.div>
  //             {/* Desktop */}
  //             <div className='hidden md:flex space-x-4'>
  //                 <NavLink 
  //                 to="/#home"  
  //                 smooth={true}
  //                 duration={500}
  //                 offset={-70}
  //                 activeClass="active" 
  //                 className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
  //                 Home
  //                 </NavLink>

  //                 <NavLink 
  //                 to="/#category"  
  //                 smooth={true}
  //                 duration={500}
  //                 offset={-70}
  //                 activeClass="active"
  //                 className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
  //                 Category
  //                 </NavLink>

  //                 <NavLink 
  //                 to="/#deals"
  //                 smooth={true}
  //                 duration={500}
  //                 offset={-70}
  //                 activeClass="active" 
  //                 className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
  //                 Deals
  //                 </NavLink>

  //                 <NavLink 
  //                 to="/products" 
  //                 smooth={true}
  //                 duration={500}
  //                 offset={-70}
  //                 activeClass="active"
  //                 className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
  //                 Products
  //                 </NavLink>

  //                 <NavLink 
  //                 to="/#contact"
  //                 smooth={true}
  //                 duration={500}
  //                 offset={-70}
  //                 activeClass="active"  
  //                 className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
  //                 Contact
  //                 </NavLink>

  //             </div>

  //             {/* Mobile Toggle Btn */}
  //             <div className='md:hidden'>
  //                 <button onClick={toggleMenu} className='text-white focus:outline-none'>
  //                   { isOpen ? <HiXMark size={26} /> : <FiMenu size={26} />}
  //                 </button>
  //             </div>

  //             {/* Mobile Menu */}
  //             {isOpen && (
  //                 <div className='top-16 left-0 w-full bg-black h-full flex flex-col justify-center items-center text-white p-4 md:hidden z-50 fixed'>
  //                     <NavLink to="/#home" 
  //                     smooth={true}
  //                     duration={500}
  //                     offset={-70}
  //                     activeClass="active" 
  //                     onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
  //                     Home
  //                     </NavLink>

  //                     <NavLink 
  //                     to="/#category" 
  //                     smooth={true}
  //                     duration={500}
  //                     offset={-70}
  //                     activeClass="active"
  //                     onClick={() => setIsOpen(false)} 
  //                     className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Category</NavLink>

  //                     <NavLink 
  //                     to="/#deals"
  //                     smooth={true}
  //                     duration={500}
  //                     offset={-70}
  //                     activeClass="active" 
  //                     onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
  //                     Deals
  //                     </NavLink>

  //                     <NavLink 
  //                     to="/products" 
  //                     // smooth={true}
  //                     // duration={500}
  //                     // offset={-70}
  //                     activeClass="active"
  //                     onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
  //                     Products
  //                     </NavLink>

  //                     <NavLink 
  //                     to="/#contact"
  //                     smooth={true}
  //                     duration={500}
  //                     offset={-70}
  //                     activeClass="active" 
  //                     onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
  //                     Contact
  //                     </NavLink>

  //                 </div>
  //             )}
  //             </div>
  //         </div>
  //     </div>
  //   )
  // }

  // export default Header











import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { motion } from "motion/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  // check user home page pe hai ya products page pe
  const isHomePage = location.pathname === "/";

  const navItems = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "Category", to: "category", type: "scroll" },
    { name: "Deals", to: "deals", type: "scroll" },
    { name: "Products", to: "/products", type: "route" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  const renderLink = (item, mobile = false) => {
    if (item.type === "route") {
      return (
        <NavLink
          to={item.to}
          className={`${
            mobile ? "block py-2 text-2xl" : "text-md"
          } hover:text-gray-400 transition`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </NavLink>
      );
    } else if (isHomePage) {
      // same page scroll only on homepage
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          offset={-70}
          className={`${
            mobile ? "block py-2 text-2xl" : "text-md"
          } hover:text-gray-400 transition cursor-pointer`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </ScrollLink>
      );
    } else {
      // agar products page se aaye to "/" redirect + hash
      return (
        <NavLink
          to={`/#${item.to}`}
          className={`${
            mobile ? "block py-2 text-2xl" : "text-md"
          } hover:text-gray-400 transition`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </NavLink>
      );
    }
  };

  return (
    <div className="w-full bg-zinc-900 text-white h-16 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:w-[85%] h-16">
        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <h1 className="text-2xl font-bold uppercase">Asif Store</h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>{renderLink(item)}</React.Fragment>
          ))}
        </div>

        {/* Mobile Toggle Btn */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiXMark size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-black h-screen flex flex-col justify-center items-center space-y-6 md:hidden z-40">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>{renderLink(item, true)}</React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
