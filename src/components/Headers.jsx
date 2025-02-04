import { useState } from 'react';
import { Menu, X } from 'lucide-react';  // library used for common icons. 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold">MOVIE</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Services</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </nav>

        <button
          className="md:hidden focus:outline-none hover:cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-purple-400 flex flex-col space-y-2 p-4">
          <a href="#" className="block py-2 hover:text-gray-200 ">Home</a>
          <a href="#" className="block py-2 hover:text-gray-200">About</a>
          <a href="#" className="block py-2 hover:text-gray-200">Services</a>
          <a href="#" className="block py-2 hover:text-gray-200">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
