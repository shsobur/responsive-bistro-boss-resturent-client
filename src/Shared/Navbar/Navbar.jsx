import "../Navbar/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { GoX } from "react-icons/go";
import { useContext, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { AuthContext } from "../../componentes/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../Hook/useCart/useCart";
import useAdmin from "../../Hook/useAdmin/useAdmin";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  console.log("admin:", isAdmin);

  const useImg = user?.photoURL;

  const handelHamburgerIcon = () => {
    setMenuIcon(!menuIcon);
  };

  const handelSingOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You went to Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, LogOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "LogOut",
            text: "LogOut successfully",
            icon: "success",
          });
        });
      }
    });
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

            {isAdmin ? (
              <li onClick={handelHamburgerIcon}>
                <NavLink
                  to="/dashboard/adminhome"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                      : "text-[#ffffff] font-extrabold"
                  }
                >
                  <>ADMIN DASHBOARD</>
                </NavLink>
              </li>
            ) : (
              user &&
              !isAdmin && (
                <li onClick={handelHamburgerIcon}>
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#EEFF25] font-extrabold border-[#ffffff] border-b-2"
                        : "text-[#ffffff] font-extrabold"
                    }
                  >
                    <>USER DASHBOARD</>
                  </NavLink>
                </li>
              )
            )}

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

            <div
              onClick={handelHamburgerIcon}
              className="menubar_sing_container"
            >
              {user ? (
                <div onClick={handelSingOut}>LOG OUT</div>
              ) : (
                <div>
                  <Link to="/singin">SING IN</Link>
                </div>
              )}
            </div>
          </ul>
        </div>

        <div className="main_functional_info_container">
          <div className="cart_container">
            <Link to="/dashboard/mycart">
              <button className="btn bg-[#00000078] px-2">
                <div className="text-2xl text-[#2daa2d]">
                  <TiShoppingCart />
                </div>

                <div className="badge bg-[#26af26] text-[#000000] font-bold">
                  {cart.length}
                </div>
              </button>
            </Link>
          </div>

          <div className="login_container">
            {user ? (
              <div onClick={handelSingOut}>LOG OUT</div>
            ) : (
              <div>
                <Link to="/singin">SING IN</Link>
              </div>
            )}
          </div>

          <div className="user_image">
            {user ? (
              <img className="sing_in_user_img" src={useImg} alt="user image" />
            ) : (
              <IoMdContact />
            )}
          </div>

          <div
            onClick={handelHamburgerIcon}
            className="main_menu_icon_container"
          >
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
