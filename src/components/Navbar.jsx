import React from 'react';
import Logo from '../assets/logo.png';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import NavLinks from './NavLinks';

const NAVLINKS = [
  {
    mainLink: 'Home',
    hasSubLinks: false,
  },
  {
    mainLink: 'About',
    hasSubLinks: true,
    subLinks: ['Service Area', 'Fleet', 'Diversity'],
  },
  {
    mainLink: 'Crane Rentals',
    hasSubLinks: true,
    subLinks: ['Crane Rentals'],
  },
  {
    mainLink: 'Gallery',
    hasSubLinks: false,
  },
  {
    mainLink: 'Contact',
    hasSubLinks: false,
  },
];

const Navbar = () => {
  return (
    <>
      {/* Top Header */}
      <header className="flex items-center justify-between px-16 py-4 border-b border-slate-600 bg-amber-300 text-slate-900  shadow-md">
  {/* Left - Logo and Title */}
  <div className="flex items-center gap-x-4">
    <img src={Logo} className="h-[6rem] w-[6rem]" alt="Kamal Crane Services Logo" />
    <div className="text-3xl font-bold tracking-wide">Kamal Crane Services</div>
  </div>

  {/* Right - Contact Info */}
  <div className="text-right space-y-1">
    <div className="text-xl font-semibold">Request a consultation</div>
    <div className="text-xl font-medium flex items-center justify-end gap-2">
      <IoCallOutline />
      437-766-3097
    </div>
    <div className="text-xl font-medium flex items-center justify-end gap-2">
      <MdOutlineEmail />
      namansaxena69@gmail.com
    </div>
  </div>
</header>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center gap-10 py-3 text-white">
        {NAVLINKS.map((linkObject, index) => (
          <NavLinks key={index} link={linkObject} />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
