import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

export default function Nav() {
  const navLinks = [
    {
      id: 1,
      label: "Home",
      href: "/home",
    },
    {
      id: 2,
      label: "Doctors",
      href: "/doctors",
    },
    {
      id: 3,
      label: "Reservations",
      href: "/reservations",
    },
  ];

  const { pathname } = useLocation();

  return (
    <header>
      <nav className="bg-white shadow py-2">
        <div className="container px-4 md:px-0 lg:w-[85%] mx-auto flex items-center justify-between">
          <div className="logo">
            <Link to={"/"}>
              <img src="/logo.jpg" alt="logo" loading="lazy" className="w-20" />
            </Link>
          </div>
          <ul className="hidden sm:flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className={` ${
                    pathname === link.href
                      ? "bg-teal-600 text-white hover:bg-teal-800 border-teal-600"
                      : "text-gray-600 hover:text-gray-800 border-gray-200"
                  } duration-500 px-4 py-2 rounded-full border`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Menu links={navLinks} />
        </div>
      </nav>
    </header>
  );
}
