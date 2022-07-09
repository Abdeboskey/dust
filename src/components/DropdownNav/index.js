import { Link } from "react-router-dom";

const DropdownNav = ({ memo }) => {
  const navlinkStyle = "inline-block text-white italic hover:text-gray-900 my-2";


  return (
    <div className="md:hidden relative inline-block text-left" ref={memo}>
      {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
      <div
        className="origin-top-right absolute right-0 mt-5 p-3 w-36 rounded-md shadow-lg bg-dusteal ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        tabIndex="-1"
      >
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
      </div>
    </div>
  );
}

export default DropdownNav;