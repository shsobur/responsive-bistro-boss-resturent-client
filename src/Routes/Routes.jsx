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
import PrivetRoutes from "./PrivetRoutes";
import ShopSaladCard from "../Pages/ShopPageLayout/ShopNavbar/ShopSaladCard/ShopSaladCard";
import ShopPizzaCard from "../Pages/ShopPageLayout/ShopNavbar/ShopPizzaCard/ShopPizzaCard";
import ShopSoupCard from "../Pages/ShopPageLayout/ShopNavbar/ShopSoupCard/ShopSoupCard";
import ShopDessertCard from "../Pages/ShopPageLayout/ShopNavbar/ShopDessertCard/ShopDessertCard";
import ShopDrinkCard from "../Pages/ShopPageLayout/ShopNavbar/ShopDrinkCard/ShopDrinkCard";

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
        path: "/dashboard",
        element: <PrivetRoutes><DashboardPageLayout></DashboardPageLayout></PrivetRoutes>
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
]);