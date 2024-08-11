import { Link } from "react-router-dom";
import "../ShopNavbar/ShopNavbar.css";
import { useState } from "react";

const ShopNavbar = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="main_shop_navbar_container">
      <div className="main_shop_navbar_inner_container">

        <div className="mt-6">
          <div className="flex gap-5 items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">

            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-2 ${
                tabIndex === 0
                  ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600"
                  : "font-semibold text-xl text-[#151515]"
              }`}
            >
              SALAD
            </Link>

            <Link
              to="pizzacard"
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-2 ${
                tabIndex === 1
                  ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600"
                  : "font-semibold text-xl text-[#151515]"
              }`}
            >
              PIZZA
            </Link>

            <Link
              to="soupcard"
              onClick={() => setTabIndex(2)}
              className={`flex items-center flex-shrink-0 px-5 py-2 ${
                tabIndex === 2
                  ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600"
                  : "font-semibold text-xl text-[#151515]"
              }`}
            >
              SOUPS
            </Link>

            <Link
              to="dessertcard"
              onClick={() => setTabIndex(3)}
              className={`flex items-center flex-shrink-0 px-5 py-2 ${
                tabIndex === 3
                  ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600"
                  : "font-semibold text-xl text-[#151515]"
              }`}
            >
              DESSERT
            </Link>

            <Link
              to="drinkcard"
              onClick={() => setTabIndex(4)}
              className={`flex items-center flex-shrink-0 px-5 py-2 ${
                tabIndex === 4
                  ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600"
                  : "font-semibold text-xl text-[#151515]"
              }`}
            >
              DRINKS
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopNavbar;
