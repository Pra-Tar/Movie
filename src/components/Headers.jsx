import { useState } from "react";
import { Menu, X, Heart, Search } from "lucide-react"; // library used for common icons.

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-opacity-30 backdrop-blur-lg border border-white/30 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MOVIE</h1>
        <div className="relative flex items-center">
          <input
            className="lg:w-80 md:w-50 sm:w-30 border rounded-full  pr-10 pl-4 h-8"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <Search size={23} className="text-white absolute right-3 cursor-pointer" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex lg:space-x-12 md:space-x-8">
          <a href="#" className="hover:text-gray-200 hidden md:block lg:inline">
            Movies
          </a>
          <a href="#" className="hover:text-gray-200 hidden md:block lg:inline">
            Series
          </a>
          <a href="#" className="hover:text-gray-200 hidden md:block lg:inline">
            Kids
          </a>
          <a
            href="#"
            className="group hover:text-black hover:bg-white shadow-2xl flex items-center border rounded-full pr-2 pl-2"
          >
            Watchlist
            <div className="pl-2">
              <Heart size={18} color="white" className="fill-white group-hover:stroke-black" />
            </div>
          </a>
        </nav>


        {/* Sign In & Register (Desktop) */}
        <nav className="hidden md:flex space-x-3">
          <a
            href="#"
            className="hover:text-black hover:bg-white shadow-2xl border rounded-full pr-2 pl-2"
          >
            SignIn
          </a>
          <a
            href="#"
            className="text-black bg-white hover:text-white hover:bg-black shadow-2xl border rounded-full pr-2 pl-2"
          >
            Register
          </a>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none hover:cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile & Medium Devices Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-purple-400 flex flex-col space-y-2 p-4">
          <a href="#" className="block py-2 hover:text-gray-200">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-200">
            Movies
          </a>
          <a href="#" className="block py-2 hover:text-gray-200">
            Series
          </a>
          <a href="#" className="block py-2 hover:text-gray-200">
            Kids
          </a>
          <a
            href="#"
            className="group flex items-center rounded-full pr-2"
          >
            Watchlist
            <div className="pl-2">
              <Heart size={18} color="white" className="fill-white group-hover:stroke-purple-400" />
            </div>
          </a>
          <div className="md:hidden flex justify-between space-x-4 p-4">
            <a
              href="#"
              className="hover:text-purple-400 hover:bg-white shadow-2xl border rounded-full pr-2 pl-2 w-full text-center"
            >
              SignIn
            </a>
            <a
              href="#"
              className="text-purple-400 bg-white hover:text-white hover:bg-purple-400 shadow-2xl border rounded-full pr-2 pl-2 w-full text-center"
            >
              Register
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
