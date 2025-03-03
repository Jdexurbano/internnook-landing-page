import { FiAlignJustify } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  const link = [
    { id: 1, name: "Home", address: "#homepage" },
    { id: 2, name: "About", address: "#aboutPage" },
    { id: 3, name: "Features", address: "#featurePage" },
    { id: 4, name: "Contact", address: "#contactPage" },
    { id: 5, name: "Pricing", address: "#pricingPage" },
    { id: 6, name: "Login", address: "#loginPage" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-primary shadow-md z-50">
      <nav className="px-5 lg:px-20 py-4 flex items-center justify-between">
        <img src="../images/LOGO_png.png" alt="Logo" className="w-55 h-8" />
        <ul className="hidden lg:flex items-center px-6 gap-10 font-medium text-secondary">
          {link.map((data) => (
            <Link to={data.address} key={data.id} smooth>
              <li className="hover:text-accent transition-colors px-3.5 py-2 duration-200">
                {data.name}
              </li>
            </Link>
          ))}
        </ul>
        <FiAlignJustify
          size={40}
          className="text-secondary cursor-pointer lg:hidden"
        />
      </nav>
    </header>
  );
}

export default NavBar;
