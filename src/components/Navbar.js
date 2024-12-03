// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-black">
    {/* Logo Section */}
    <Link to="/">
      <div className="flex flex-col">
        <p className="font-Montserrat text-white font-black text-2xl tracking-widest">
          Breathe Healthy
        </p>
        <small className="text-white font-Roboto text-xs uppercase">
          Know your Air
        </small>
      </div>
    </Link>

    {/* Search Link */}
    <Link
      className="group flex items-center justify-center rounded-2xl border border-white px-4 py-2 bg-transparent text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500"
      to="/search"
    >
      <span className="font-medium transition-colors group-hover:text-white">
        Search other Locations
      </span>
      <HiSearchCircle className="ml-2 text-xl group-hover:text-white" />
    </Link>
  </nav>
);

export default Navbar;
