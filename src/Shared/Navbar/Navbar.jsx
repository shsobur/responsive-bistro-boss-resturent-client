import "../Navbar/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { GoX } from "react-icons/go";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handelHamburgerIcon = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <div className="main_navbar_container">
      <nav className="main_nav_content_contaienr">

        <div className="web_title_name">
          <Link to="/">
            <h2>BISTRO BOSS</h2>
            <span>RESTURANT</span>
          </Link>
        </div>

        <div
          id="navbar_navigate_container"
          className={
            menuIcon
              ? "#navbar_navigate_container isActive"
              : "#navbar_navigate_container"
          }
        >
          <ul className="navbar_navigate_inner_container">

            <li onClick={handelHamburgerIcon}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                    : "text-[#ffffff] font-extrabold"
                }
              >
                <>HOME</>
              </NavLink>
            </li>

            <li onClick={handelHamburgerIcon}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                    : "text-[#ffffff] font-extrabold"
                }
              >
                <>CONTACT US</>
              </NavLink>
            </li>

            <li onClick={handelHamburgerIcon}>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                    : "text-[#ffffff] font-extrabold"
                }
              >
                <>DASHBOARD</>
              </NavLink>
            </li>

            <li onClick={handelHamburgerIcon}>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                    : "text-[#ffffff] font-extrabold"
                }
              >
                <>OUR MENU</>
              </NavLink>
            </li>

            <li onClick={handelHamburgerIcon}>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                    : "text-[#ffffff] font-extrabold"
                }
              >
                <>OUR SHOP</>
              </NavLink>
            </li>

            <div className="menubar_sing_container">
              <h2>SING OUT</h2>
            </div>
          </ul>
        </div>

        <div className="main_functional_info_container">

          <div className="cart_container">
            <button className="btn bg-[#00000078] px-2">

              <div className="text-2xl text-[#2daa2d]">
                <TiShoppingCart />
              </div>

              <div className="badge bg-[#26af26] text-[#000000] font-bold">
                +99
              </div>

            </button>
          </div>

          <div className="login_container">
            <Link to="/singup">SING IN</Link>
          </div>

          <div className="user_image">
            <IoMdContact />
          </div>

          <div onClick={handelHamburgerIcon} className="main_menu_icon_container">
            {menuIcon ? (
              <div className="hamburger_icon">
                <MdOutlineMenu />
              </div>
            ) : (
              <div className="cross_icon">
                <GoX />
              </div>
            )}
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
