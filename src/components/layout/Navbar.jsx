import { logo_png } from '@/assets/img';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../common/SearchForm';

const Navbar = () => {
  const navigate = useNavigate();
  const menus = ['anime', 'people'];
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-8">
        <div className="flex items-center gap-4">
          <img
            src={logo_png}
            alt="logo-abnime"
            className="h-8 cursor-pointer sm:h-12"
            onClick={() => navigate('/')}
          />
          <div className="hidden gap-6 text-white sm:flex">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={`/${menu}`}
                className="text-lg transition duration-200 hover:text-red-500"
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden sm:block">
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            navigate={navigate}
            isDesktop
          />
        </div>
        <div
          className="text-white cursor-pointer sm:hidden"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <MobileDropdown
        menus={menus}
        toggleNavbar={toggleNavbar}
        setToggleNavbar={setToggleNavbar}
        navigate={navigate}
      />
    </nav>
  );
};

const MobileDropdown = ({ menus, toggleNavbar, setToggleNavbar, navigate }) => {
  const dropdownVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: '0%', opacity: 1, transition: { duration: 0.3 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {toggleNavbar && (
        <motion.div
          className="fixed top-0 left-0 z-40 flex flex-col w-3/4 h-full text-white bg-black bg-opacity-90 sm:hidden"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="flex flex-col gap-4 p-6">
            {menus.map((menu, index) => (
              <li key={index} className="text-lg">
                <Link
                  to={`/${menu}`}
                  className="block px-3 py-2 rounded-md hover:bg-red-500"
                  onClick={() => setToggleNavbar(false)}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
