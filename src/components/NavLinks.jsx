import React, { useState } from 'react';

const NavLinks = ({ link }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="cursor-pointer px-4 py-2 hover:text-yellow-400 transition-colors duration-200">
        {link.mainLink}
      </div>

      {link.hasSubLinks && (
        <div
          className={`absolute top-full left-0 mt-2 min-w-[180px] bg-white text-black rounded-md shadow-lg ring-1 ring-black/10 z-10 p-2 transition-all duration-300 ease-in-out 
          ${active ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
        >
          {link.subLinks?.map((subLink, i) => (
            <div
              key={i}
              className="px-4 py-2 hover:bg-yellow-100 hover:text-slate-900 rounded-md transition-all cursor-pointer"
            >
              {subLink}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;
