import { Link } from "react-router-dom";
import logo from '../../assets/nu-logo.png';

const Header = () => {
  const navlinkStyle = "inline-block text-white italic hover:text-gray-900 mr-4";

  return (
    <header className="bg-dusteal border-b-8 border-gray-900 sticky top-0 p-6">
      <div className="flex items-center justify-between flex-wrap">
        <div className="block">
          <Link to="/">
            <img
              src={logo}
              height="120"
              width="120"
              alt="Denver Urban Skate Troop Logo"
              className="absolute top-4"
            />
          </Link>
        </div>
        <nav className="hidden md:block">
          <Link to="/">
            <span className={navlinkStyle}>CALENDAR</span>
          </Link>
          <Link to="/welcome">
            <span className={navlinkStyle}>WELCOME/FAQ</span>
          </Link>
          <Link to="/resources">
            <span className={navlinkStyle}>RESOURCES</span>
          </Link>
          <a
            href="https://denverurbanskatetroop.bigcartel.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className={navlinkStyle}>SHOP</span>
          </a>
        </nav>
        <div className="absolute right-8 flex md:hidden lg:hidden">
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-gray-900 animate-pulse"></span>
            <span className="block w-8 h-1 bg-gray-900 animate-pulse"></span>
            <span className="block w-8 h-1 bg-gray-900 animate-pulse"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
