import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-[#0d0f11]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <a href="#hero">
          <div className="text-xl font-bold">
            <span>&lt;</span>
            <span className="text-2xl text-teal-300">Soni Singh</span>
            <span>/&gt;</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-8 items-center text-gray-200">
          <li>
            <a href="#projects" className="hover:text-teal-300 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-300 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-300 transition">
              Contact
            </a>
          </li>

          <li>
            <a
              href="#resume"
              className="border border-white/40 px-4 py-1 rounded-md hover:border-teal-300 hover:text-teal-300 transition inline-block"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0d0f11] border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-200">
            <li>
              <a href="#projects" className="hover:text-teal-300 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-teal-300 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-300 transition">
                Contact
              </a>
            </li>

            <li>
              <a
                href="#resume"
                className="border border-white/40 px-4 py-1 rounded-md hover:border-teal-300 hover:text-teal-300 transition inline-block"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
