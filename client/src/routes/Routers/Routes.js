import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/PublicDashboardLayout/Main";
import Home from "../../Pages/PublicPages/Home/Home";
import Login from "../../Pages/PublicPages/Login/Login";
import Register from "../../Pages/PublicPages/Register/Register";
// import PrivateRouters from "../PrivateRouters/PrivateRouters";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import Orders from "../../Pages/AdminDashboard/AdminComponents/Orders/Orders";
import CartDetails from "../../Pages/PublicPages/CartDetails/CartDetails";
import ProductDetails from "../../Pages/PublicPages/ProductDetails/ProductDetails";
import ProductCategory from "../../Pages/PublicPages/ProductCategory/ProductCategory";
import UserDashboard from "../../Pages/PublicPages/UserDashboard/UserDashboard";
import AdminLayout from "../../Layout/AdminDashboardLayout/AdminLayout";
import AddProduct from "../../Pages/AdminDashboard/AdminComponents/AddProduct/AddProduct";
import SpecificOrderDetails from "../../Pages/AdminDashboard/AdminComponents/Orders/SpecificOrderDetails";
import UserOrders from "../../Pages/PublicPages/UserDashboard/UserOrders/UserOrders";
import AccountOptions from "../../Pages/PublicPages/UserDashboard/AccountOptions/AccountOptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartDetails />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
      {
        path: "/product-category/:id",
        element: <ProductCategory />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/orders/details",
        element: <SpecificOrderDetails />,
      },
      {
        path: "/dashboard/add_product",
        element: <AddProduct />,
      },
    ],
  },
  //User Dashboard
  {
    path: "/account",
    element: <UserDashboard />,
    children: [
      {
        path: "/account",
        element: <AccountOptions />,
      },
      {
        path: "/account/orders",
        element: <UserOrders />,
      },
    ],
  },
]);

export default router;
