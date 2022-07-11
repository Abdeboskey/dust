import { NavLink } from "react-router-dom";

const DropdownNav = ({ memo, onClick }) => {
  const navlinkStyle = "inline-block text-white italic hover:text-gray-900 my-2";

  return (
    <div className="md:hidden relative inline-block text-left" ref={memo}>
      <div
        className="origin-top-right absolute right-0 mt-5 p-3 w-36 rounded-md shadow-lg bg-dusteal ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        tabIndex="-1"
      >
        <NavLink to="/" onClick={onClick}>
          <span className={navlinkStyle}>HOME</span>
        </NavLink>
        <NavLink to="/welcome" onClick={onClick}>
          <span className={navlinkStyle}>WELCOME/FAQ</span>
        </NavLink>
        <NavLink to="/resources" onClick={onClick}>
          <span className={navlinkStyle}>RESOURCES</span>
        </NavLink>
        <a
          href="https://denverurbanskatetroop.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
        >
          <span className={navlinkStyle}>SHOP</span>
        </a>
      </div>
    </div>
  );
}

export default DropdownNav;