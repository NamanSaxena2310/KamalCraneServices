import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="shadow-lg"> 
      {/* Top Info Bar */}
      <div className='flex items-center justify-between bg-[#1F2937] text-[#F9FAFB] px-6 py-4'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt="KCS Logo" className='h-16 w-16 object-contain' />
          <div>
            <h1 className="text-2xl font-bold tracking-wide uppercase text-[#FACC15]">Kamal Crane Service</h1>
            <p className="text-sm text-gray-300">Request a Consultation Today</p>
          </div>
        </div>
        <div className="text-sm flex items-center gap-2">
          <span className="font-medium">📞</span>
          <span className="font-semibold">413-766-3097</span>
          <GoDotFill className="text-[#FACC15] text-sm" />
          <span className="font-semibold">namansaxena69@gmail.com</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className='bg-[#FACC15]'>
        <nav className='flex justify-center space-x-10 py-4 text-[#1F2937] font-bold text-lg tracking-wide uppercase'>
          <NavLink 
          
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-[#DC2626] underline" : "hover:text-[#DC2626] transition duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-[#DC2626] underline" : "hover:text-[#DC2626] transition duration-200"
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-[#DC2626] underline" : "hover:text-[#DC2626] transition duration-200"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              isActive ? "text-[#DC2626] underline" : "hover:text-[#DC2626] transition duration-200"
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "text-[#DC2626] underline" : "hover:text-[#DC2626] transition duration-200"
            }
          >
            Services
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
