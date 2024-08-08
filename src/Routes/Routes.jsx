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
        element: <DashboardPageLayout></DashboardPageLayout>
      },
      {
        path: "/menu",
        element: <MenuPageLayout></MenuPageLayout>
      },
      {
        path: "/shop",
        element: <ShopPageLayout></ShopPageLayout>
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