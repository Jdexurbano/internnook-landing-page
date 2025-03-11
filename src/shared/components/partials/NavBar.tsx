import { useState, useEffect } from "react";
import { FiAlignJustify, FiX,  FiUser, FiChevronDown} from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const link = [
    { id: 1, name: "Home", address: "#homePage" },
    { id: 2, name: "About", address: "#aboutPage" },
    { id: 3, name: "Features", address: "#featurePage" },
    { id: 4, name: "Contact", address: "#contactPage" },
    { id: 5, name: "Subscription", address: "#subscriptionPage" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-primary shadow-md z-50">
      <nav className="px-5 lg:px-20 h-20 flex items-center justify-between w-full bg-primary">
        <img src="../images/LOGO_png.png" alt="Logo" className="w-55 h-8" />
        <ul className="hidden lg:flex items-center px-6 gap-10 font-medium text-secondary">
          {link.map((data) => (
            <Link to={data.address} key={data.id} smooth>
              <li className="hover:text-accent transition-colors px-3 py-2 duration-200">
                {data.name}
              </li>
            </Link>
          ))}
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
            >
              <FiUser size={24} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-45 bg-white shadow-lg rounded-lg py-2">
                <Link to="#registrationPage" smooth onClick={() => setIsDropdownOpen(false)}>
                  <p className="px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
                    Pre-Registered
                  </p>
                </Link>
                <Link to="#loginPage" smooth onClick={() => setIsDropdownOpen(false)}>
                  <p className="px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
                    Sign Up
                  </p>
                </Link>
                <Link to="#loginPage" smooth onClick={() => setIsDropdownOpen(false)}>
                  <p className="px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
                    Sign In
                  </p>
                </Link>
              </div>
            )}
          </div>
        </ul>
        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="lg:hidden text-secondary z-50">
          {isOpen ? <FiX size={40} /> : <FiAlignJustify size={40} />}
        </button>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-primary shadow-lg transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start py-8 space-y-3 font-medium text-secondary px-6">
          <img src="../images/LOGO_png.png" alt="Logo" className="w-40 mb-8" />
          {link.map((data) => (
            <Link to={data.address} key={data.id} smooth onClick={toggleMenu}>
              <p className="hover:bg-accent px-1 py-2 rounded-md cursor-pointer transition w-full">{data.name}</p>
            </Link>
          ))}
          {/* Profile Dropdown for Mobile */}
          <div className="mt-4 w-full">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="text-white font-medium flex items-center justify-between w-full px-1 rounded-md cursor-pointer hover:bg-gray-700"
            >
              Account
              <FiChevronDown className="text-white" />
            </button>
            {isMobileDropdownOpen && (
              <div className="mt-2 rounded-md">
                <Link to="#registrationPage" smooth onClick={toggleMenu}>
                  <p className="px-4 py-3 text-white hover:bg-gray-700 cursor-pointer">
                    Pre-Registered
                  </p>
                </Link>
                <Link to="#loginPage" smooth onClick={toggleMenu}>
                  <p className="px-4 py-3 text-white hover:bg-gray-700 cursor-pointer">
                    Sign Up
                  </p>
                </Link>
                <Link to="#loginPage" smooth onClick={toggleMenu}>
                  <p className="px-4 py-3 text-white hover:bg-gray-700 cursor-pointer">
                    Sign In
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
