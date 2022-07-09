import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/nu-logo.png";
import DropdownNav from "../DropdownNav";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const ref = useRef();

  const navlinkStyle =
    "inline-block text-white italic hover:text-gray-900 mr-4";
  
   useEffect(() => {
     const checkIfClickedOutside = (e) => {
       // If the menu is open and the clicked target is not within the menu,
       // then close the menu
       if (isNavOpen && ref.current && !ref.current.contains(e.target)) {
         setIsNavOpen(false);
       }
     };

     document.addEventListener("mousedown", checkIfClickedOutside);

     return () => {
       // Cleanup the event listener
       document.removeEventListener("mousedown", checkIfClickedOutside);
     };
   }, [isNavOpen]);


  return (
    <header className="bg-dusteal border-b-8 border-gray-900 sticky top-0 p-6 z-10">
      <div className="flex items-center justify-between flex-wrap">
        <div className="block">
          <Link to="/">
            <img
              src={logo}
              alt="Denver Urban Skate Troop Logo"
              className="absolute h-16 top-2 left-2 md:h-[90px] md:top-4 md:left-4"
            />
          </Link>
        </div>
        <nav className="hidden md:block">
          <Link to="/">
            <span className={navlinkStyle}>HOME</span>
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
        <div
          className="absolute right-8 flex md:hidden cursor-pointer z-30"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-gray-900 animate-pulse"></span>
            <span className="block w-8 h-1 bg-gray-900 animate-pulse"></span>
            <span className="block w-8 h-1 bg-gray-900 animate-pulse"></span>
          </div>
        </div>
        {isNavOpen && <DropdownNav memo={ref} />}
      </div>
    </header>
  );
};

export default Header;
