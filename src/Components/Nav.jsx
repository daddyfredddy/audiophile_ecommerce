import logo from "../assets/images/logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
// import Mask1 from "../assets/images/Mask1.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      {/* START NAV BAR */}

      <div className="relative py-0 bg-kalas1">
        <div className="mx-40">
          <div className="flex justify-between h-7 items-center pt-8 z-10 relative ">
            <a href="#" className="w-36 h-6">
              <img src={logo} alt="logo"></img>
            </a>
            <ul className="flex text-kalas5 gap-12 tracking-small font-fonty text-sm font-bold ">
              <li className="hover:text-kalas">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="hover:text-kalas">
                <NavLink to="/Headphones">HEADPHONES</NavLink>
              </li>
              <li className="hover:text-kalas">
                <NavLink to="/Speakers">SPEAKERS</NavLink>
              </li>
              <li className="hover:text-kalas">
                <NavLink to="/Earphones">EARPHONES</NavLink>
              </li>
            </ul>

            <NavLink to="/Cart">
              <HiOutlineShoppingCart className="text-kalas5 w-6 h-5" />
            </NavLink>
          </div>
          <hr className="mt-9 border border-kalas8 h-px" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
