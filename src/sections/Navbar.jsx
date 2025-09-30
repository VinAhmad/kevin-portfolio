import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ closeMenu }) {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    
    // Close mobile menu if it's open
    if (closeMenu) {
      closeMenu();
    }
    
    // Smooth scroll to target section
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#about"
          onClick={(e) => handleLinkClick(e, '#about')}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#work"
          onClick={(e) => handleLinkClick(e, '#work')}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#certificates"
          onClick={(e) => handleLinkClick(e, '#certificates')}
        >
          Certificates
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kevin
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation closeMenu={null} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
