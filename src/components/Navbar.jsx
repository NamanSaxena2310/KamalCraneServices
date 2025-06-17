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
      <div className="flex items-center justify-between px-16 py-4 border-b border-slate-600 bg-slate-950 text-white">
        {/* Left - Logo and Title */}
        <div className="flex items-center gap-x-4">
          <img src={Logo} className="h-[6rem] w-[6rem]" alt="Kamal Crane Services Logo" />
          <div className="text-2xl font-semibold">Kamal Crane Services</div>
        </div>

        {/* Right - Contact Info */}
        <div className="text-right">
          <div className="text-lg font-medium">Request a consultation</div>
          <div className="text-lg font-medium">
            <IoCallOutline className="inline-block mr-2" />
            437-766-3097
          </div>
          <div className="text-lg font-medium">
            <MdOutlineEmail className="inline-block mr-2" />
            namansaxena69@gmail.com
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center gap-10 py-3 text-white">
        {NAVLINKS.map((linkObject, index) => (
          <NavLinks key={index} link={linkObject} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
