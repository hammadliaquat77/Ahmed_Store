  import React from 'react'
  import { NavLink } from 'react-router-dom'
  import { FiMenu } from "react-icons/fi";
  import { HiXMark } from "react-icons/hi2";
  import { FaShoppingCart } from "react-icons/fa";
  import { Link } from 'react-scroll';
  import { motion } from "motion/react"


  function Header() {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
          setIsOpen(!isOpen);
      };

    return (
      <div>
          <div className='w-full bg-zinc-900 text-white p-4 h-16 md:fixed z-50 fixed'>
              <div className='container mx-auto flex justify-between items-center md:w-[85%]'>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <h1 className='text-2xl font-bold uppercase'>Asif Store</h1>
                  </motion.div>
              {/* Desktop */}
              <div className='hidden md:flex space-x-4'>
                  <NavLink 
                  to="/#home"  
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active" 
                  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
                  Home
                  </NavLink>

                  <NavLink 
                  to="/#category"  
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
                  Category
                  </NavLink>

                  <NavLink 
                  to="/#deals"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active" 
                  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
                  Deals
                  </NavLink>

                  <NavLink 
                  to="/products" 
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
                  Products
                  </NavLink>

                  <NavLink 
                  to="/#contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"  
                  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold cursor-pointer'>
                  Contact
                  </NavLink>

              </div>

              {/* Mobile Toggle Btn */}
              <div className='md:hidden'>
                  <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    { isOpen ? <HiXMark size={26} /> : <FiMenu size={26} />}
                  </button>
              </div>

              {/* Mobile Menu */}
              {isOpen && (
                  <div className='top-16 left-0 w-full bg-black h-full flex flex-col justify-center items-center text-white p-4 md:hidden z-50 fixed'>
                      <NavLink to="/#home" 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active" 
                      onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
                      Home
                      </NavLink>

                      <NavLink 
                      to="/#category" 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      onClick={() => setIsOpen(false)} 
                      className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Category</NavLink>

                      <NavLink 
                      to="/#deals"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active" 
                      onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
                      Deals
                      </NavLink>

                      <NavLink 
                      to="/products" 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
                      Products
                      </NavLink>

                      <NavLink 
                      to="/#contact"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active" 
                      onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>
                      Contact
                      </NavLink>

                  </div>
              )}
              </div>
          </div>
      </div>
    )
  }

  export default Header
