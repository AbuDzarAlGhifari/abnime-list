import { logo_png } from '@/assets/img';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SearchForm from '../common/SearchForm';

const Navbar = () => {
  const navigate = useNavigate();
  const menus = ['anime', 'people'];
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);

      if (toggleNavbar) {
        setToggleNavbar(false);
      }
    };

    const optimizedScrollHandler = () => {
      if (!toggleNavbar) {
        handleScroll();
      }
    };

    window.addEventListener('scroll', optimizedScrollHandler);

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, [toggleNavbar]);

  return (
    <nav
      className={`sticky top-0 py-1 z-50 transition-all duration-500 ${
        scrolled
          ? isScrolling
            ? 'bg-black bg-opacity-50'
            : 'bg-black bg-opacity'
          : 'bg-black'
      }`}
    >
      <NavbarContent
        menus={menus}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleNavbar={toggleNavbar}
        setToggleNavbar={setToggleNavbar}
        navigate={navigate}
      />
      <MobileDropdown
        menus={menus}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleNavbar={toggleNavbar}
        navigate={navigate}
      />
    </nav>
  );
};

const NavbarContent = ({
  menus,
  searchQuery,
  setSearchQuery,
  toggleNavbar,
  setToggleNavbar,
  navigate,
}) => {
  return (
    <div className="flex items-center justify-between w-full px-2.5 py-2 text-white font-poppins sm:px-8 sm:py-3">
      <div className="flex items-center w-full sm:w-fit sm:gap-10">
        <div className="flex items-center justify-between w-full">
          <img
            src={logo_png}
            alt="logo-abnime"
            className="h-6 cursor-pointer sm:h-10"
            onClick={() => navigate('/')}
          />
          <div
            className="sm:hidden"
            onClick={() => setToggleNavbar(!toggleNavbar)}
          >
            {toggleNavbar ? <FaTimes /> : <FaBarsStaggered />}
          </div>
        </div>
        <div className="hidden gap-4 sm:flex">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={`/${menu}`}
              className="transition duration-200 hover:text-red-600"
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        navigate={navigate}
        isDesktop
      />
    </div>
  );
};

const MobileDropdown = ({
  menus,
  searchQuery,
  setSearchQuery,
  toggleNavbar,
  navigate,
}) => {
  const dropdownVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    <AnimatePresence>
      {toggleNavbar && (
        <motion.div
          className="top-0 left-0 z-50 flex flex-col w-3/4 h-full text-white shadow-lg lg:hidden"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="flex flex-col gap-2 p-4 text-sm sm:text-base">
            {menus.map((menu, index) => (
              <li key={index} className="w-full">
                <Link
                  to={`/${menu}`}
                  className="block px-3 py-2 transition duration-200 rounded-lg hover:bg-red-600 hover:text-white"
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            navigate={navigate}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
