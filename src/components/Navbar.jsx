import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

function Header() {

   const [isOpen, setIsOpen] = React.useState(false);
   const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <div className='w-full bg-zinc-900 text-white p-4 h-16 md:fixed z-50 fixed'>
            <div className='container mx-auto flex justify-between items-center md:w-[85%]'>
                <h1 className='text-2xl font-bold'>Hammad</h1>
            {/* Desktop */}
            <div className='hidden md:flex space-x-4'>
                <NavLink to="/"  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Home</NavLink>
                <NavLink to="/about"  className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>About</NavLink>
                <NavLink to="/contact" className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Contact</NavLink>
                <NavLink to="/products" className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Products</NavLink>
                <NavLink to="/cart" className='text-md hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'><FaShoppingCart size={24} /></NavLink>
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
                    <NavLink to="/" onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>About</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Contact</NavLink>
                    <NavLink to="/products" onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'>Products</NavLink>
                    <NavLink to="/cart" onClick={() => setIsOpen(false)} className='block py-2 text-2xl hover:text-gray-500 hover:transition-all duration-300 hover:font-bold'><FaShoppingCart size={28} /></NavLink>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Header
