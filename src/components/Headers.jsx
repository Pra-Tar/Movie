import { useState, useEffect } from "react";
import { Menu, X, Heart, Search } from "lucide-react"; // library used for common icons.
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const hideSearchBar = location.pathname === "/signin" || location.pathname === "/register" || location.pathname === "/";
  const hideNavbar = location.pathname === "/signin" || location.pathname === "/register" || location.pathname === "/";

  return (
    <header className="bg-opacity-30 backdrop-blur-lg border border-white/30 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MOVIE
        </Link>
        {!hideSearchBar && (
          <div className="relative flex items-center">
            <input
              className="lg:w-80 md:w-50 sm:w-28 border rounded-full pr-10 pl-4 h-8"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <Search
              size={23}
              className="text-white absolute right-3 cursor-pointer"
            />
          </div>
        )}

        {/* Desktop Navigation */}
        { !hideNavbar && (
        <nav className="hidden md:flex lg:space-x-12 md:space-x-8">
          <Link
            to="/movies"
            className="hover:text-gray-200 hidden md:block lg:inline"
          >
            Movies
          </Link>
          <Link
            to="/series"
            className="hover:text-gray-200 hidden md:block lg:inline"
          >
            Series
          </Link>
          <Link
            to="/kids"
            className="hover:text-gray-200 hidden md:block lg:inline"
          >
            Kids
          </Link>
          <Link
            to="/watchlist"
            className="group hover:text-black hover:bg-white shadow-2xl flex items-center border rounded-full pr-2 pl-2"
          >
            Watchlist
            <div className="pl-2">
              <Heart
                size={18}
                color="white"
                className="fill-white group-hover:stroke-black"
              />
            </div>
          </Link>
        </nav>
        )}

        {/* Sign In & Register (Desktop) */}
        <nav className="hidden md:flex space-x-3">
          <Link
            to="/signin"
            className="hover:text-black hover:bg-white shadow-2xl border rounded-full pr-2 pl-2"
          >
            SignIn
          </Link>
          <Link
            to="/register"
            className="text-black bg-white hover:text-white hover:bg-black shadow-2xl border rounded-full pr-2 pl-2"
          >
            Register
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none hover:cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile & Medium Devices Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black flex flex-col space-y-2 pt-6 fixed inset-0 z-40 h-screen top-0 overflow:hidden">
          <div className="pl-8 flex-row space-between text-xl">
            <Link to="/" className="block py-2 hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/movies" className="block py-2 hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
              Movies
            </Link>
            <Link to="/series" className="block py-2 hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
              Series
            </Link>
            <Link to="/kids" className="block py-2 hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
              Kids
            </Link>
            <Link
              to="/watchlist"
              className="group flex items-center rounded-full pr-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Watchlist
              <div className="pl-2">
                <Heart
                  size={18}
                  color="white"
                  className="fill-white group-hover:stroke-black"
                />
              </div>
            </Link>
          </div>

          <div className="md:hidden flex justify-between space-x-4 p-4 text-md">
            <Link
              to="/signin"
              className="hover:text-black hover:bg-white shadow-2xl border rounded-full pr-2 pl-2 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              SignIn
            </Link>
            <Link
              to="/register"
              className="text-black bg-white hover:text-white hover:bg-black shadow-2xl border rounded-full pr-2 pl-2 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
