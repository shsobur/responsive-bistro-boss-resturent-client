import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePageLayout from "../Pages/HomePageLayout/HomePageLayout";
import ContactPageLayout from "../Pages/ContactPageLayout/ContactPageLayout";
import DashboardPageLayout from "../Pages/DashboardPageLayout/DashboardPageLayout";
import MenuPageLayout from "../Pages/MenuPageLayout/MenuPageLayout";
import ShopPageLayout from "../Pages/ShopPageLayout/ShopPageLayout";
import SingUp from "../Pages/Authentication/SingUp/SingUp";
import SingIn from "../Pages/Authentication/SingIn/SingIn";
import ShopSaladCard from "../Pages/ShopPageLayout/ShopNavbar/ShopSaladCard/ShopSaladCard";
import ShopPizzaCard from "../Pages/ShopPageLayout/ShopNavbar/ShopPizzaCard/ShopPizzaCard";
import ShopSoupCard from "../Pages/ShopPageLayout/ShopNavbar/ShopSoupCard/ShopSoupCard";
import ShopDessertCard from "../Pages/ShopPageLayout/ShopNavbar/ShopDessertCard/ShopDessertCard";
import ShopDrinkCard from "../Pages/ShopPageLayout/ShopNavbar/ShopDrinkCard/ShopDrinkCard";
import UserHome from "../Pages/DashboardPageLayout/DashboardPages/UserHome/UserHome";
import MyCart from "../Pages/DashboardPageLayout/DashboardPages/MyCart/MyCart";
import Reservation from "../Pages/DashboardPageLayout/DashboardPages/Reservation/Reservation";
import Payment from "../Pages/DashboardPageLayout/DashboardPages/Payment/Payment";
import AddReview from "../Pages/DashboardPageLayout/DashboardPages/AddReview/AddReview";
import Booking from "../Pages/DashboardPageLayout/DashboardPages/Booking/Booking";
import AdminHome from "../Pages/DashboardPageLayout/DashboardPages/AdminPages/AdminHome/AdminHome";
import AddItem from "../Pages/DashboardPageLayout/DashboardPages/AdminPages/AddItem/AddItem";
import ManageItem from "../Pages/DashboardPageLayout/DashboardPages/AdminPages/ManageItem/ManageItem";
import ManageBooking from "../Pages/DashboardPageLayout/DashboardPages/AdminPages/ManageBooking/ManageBooking";
import AllUser from "../Pages/DashboardPageLayout/DashboardPages/AdminPages/AllUser/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>
      },
      {
        path: "/contact",
        element: <ContactPageLayout></ContactPageLayout>
      },
      {
        path: "/menu",
        element: <MenuPageLayout></MenuPageLayout>
      },
      {
        path: "/shop",
        element: <ShopPageLayout></ShopPageLayout>,
        children: [
          {
            index: true,
            element: <ShopSaladCard></ShopSaladCard>
          },
          {
            path: "pizzacard",
            element: <ShopPizzaCard></ShopPizzaCard>
          },
          {
            path: "soupcard",
            element: <ShopSoupCard></ShopSoupCard>
          },
          {
            path: "dessertcard",
            element: <ShopDessertCard></ShopDessertCard>
          },
          {
            path: "drinkcard",
            element: <ShopDrinkCard></ShopDrinkCard>
          }
        ]
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>
      },
      {
        path: "/singin",
        element: <SingIn></SingIn>
      }
    ]
  },

  // New Routes__
  {
    path: "dashboard",
    element: <DashboardPageLayout></DashboardPageLayout>,
    children: [

      // Route for user__
      {
        path: "userhome",
        element: <UserHome></UserHome>
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "addreview",
        element: <AddReview></AddReview>
      },
      {
        path: "mybooking",
        element: <Booking></Booking>
      },

      // Route for admin__

      {
        path: "adminhome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "additem",
        element: <AddItem></AddItem>
      },
      {
        path: "manageitem",
        element: <ManageItem></ManageItem>
      },
      {
        path: "managebooking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "alluser",
        element: <AllUser></AllUser>
      }
    ]
  }
]);