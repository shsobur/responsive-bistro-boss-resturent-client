import { FaBook, FaCalendarAlt, FaHome, FaUsers } from "react-icons/fa";
import { GiHamburgerMenu, GiWallet } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { MdMarkEmailRead, MdReviews } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";
import { SiShopee } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "../DashBoardNavbar/DashBoardNavbar.css";
import useCart from "../../../Hook/useCart/useCart";
import { TfiMenuAlt } from "react-icons/tfi";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../../../Hook/useAdmin/useAdmin";

const DashBoardNavbar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="main_dashboard_navbar_container">
      <div className="main_web_name_container">
        <h2>BISTRO BOSS</h2>
        <h3>RESTAURANT</h3>
      </div>

      <div className="main_dashboard_navigation_container">
        {isAdmin ? (
          <>
            <ul className="nav_part_one">

              <NavLink
                to="adminhome"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <FaHome />
                  </p>
                  <h4>Admin Home</h4>
                </li>
              </NavLink>

              <NavLink
                to="additem"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <ImSpoonKnife />
                  </p>
                  <h4>ADD ITEMS</h4>
                </li>
              </NavLink>

              <NavLink
                to="manageitem"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <TfiMenuAlt />
                  </p>
                  <h4>MANAGE ITEMS</h4>
                </li>
              </NavLink>

              <NavLink
                to="managebooking"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <FaBook />
                  </p>
                  <h4>MANAGE BOOKINGS</h4>
                </li>
              </NavLink>

              <NavLink
                to="alluser"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <FaUsers />
                  </p>
                  <h4>ALL USERS</h4>
                </li>
              </NavLink>

            </ul>
          </>
        ) : (
          <>
            <ul className="nav_part_one">

              <NavLink
                to="userhome"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <FaHome />
                  </p>
                  <h4>User Home</h4>
                </li>
              </NavLink>

              <NavLink
                to="reservation"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <FaCalendarAlt />
                  </p>
                  <h4>RESERVATION</h4>
                </li>
              </NavLink>

              <NavLink
                to="paymenthistory"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <GiWallet />
                  </p>
                  <h4>PAYMENT HISTORY</h4>
                </li>
              </NavLink>

              <NavLink
                to="mycart"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <TiShoppingCart />
                  </p>
                  <h4>
                    MY CART{" "}
                    <span className="text-[#26af26] font-sans text-lg font-bold">
                      ({cart.length})
                    </span>
                  </h4>
                </li>
              </NavLink>

              <NavLink
                to="addreview"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <MdReviews />
                  </p>
                  <h4>ADD REVIEW</h4>
                </li>
              </NavLink>

              <NavLink
                to="mybooking"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ffffff] font-extrabold"
                    : "text-[#151515] font-extrabold"
                }
              >
                <li className="single_nav_container">
                  <p>
                    <BiSolidBookContent />
                  </p>
                  <h4>MY BOOKING</h4>
                </li>
              </NavLink>

            </ul>
          </>
        )}

{/* Common navbar */}
        <ul className="nav_part_two">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#151515] font-extrabold"
                : "hover:text-[#ffffff] font-extrabold"
            }
          >
            <li className="single_nav_container">
              <p>
                <FaHome />
              </p>
              <h4>HOME</h4>
            </li>
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "text-[#151515] font-extrabold"
                : "hover:text-[#ffffff] font-extrabold"
            }
          >
            <li className="single_nav_container">
              <p>
                <GiHamburgerMenu />
              </p>
              <h4>MENU</h4>
            </li>
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-[#151515] font-extrabold"
                : "hover:text-[#ffffff] font-extrabold"
            }
          >
            <li className="single_nav_container">
              <p>
                <SiShopee />
              </p>
              <h4>SHOP</h4>
            </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#151515] font-extrabold"
                : "hover:text-[#ffffff] font-extrabold"
            }
          >
            <li className="single_nav_container">
              <p>
                <MdMarkEmailRead />
              </p>
              <h4>CONTACT</h4>
            </li>
          </NavLink>

        </ul>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
