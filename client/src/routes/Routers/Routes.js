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
import SpecificOrderDetails from "../../Pages/AdminDashboard/AdminComponents/Orders/SpecificOrderDetails";
import UserOrders from "../../Pages/PublicPages/UserDashboard/UserOrders/UserOrders";
import AccountOptions from "../../Pages/PublicPages/UserDashboard/AccountOptions/AccountOptions";
import EditProfile from "../../Pages/PublicPages/UserDashboard/EditProfile/EditProfile";
import ChangePassword from "../../Pages/PublicPages/UserDashboard/ChangePassword/ChangePassword";
import Address from "../../Pages/PublicPages/UserDashboard/Address/Address";
import EditAddress from "../../Pages/PublicPages/UserDashboard/Address/EditAddress/EditAddress";
import HandleCategories from "../../Pages/AdminDashboard/AdminComponents/HandleCategories/HandleCategories";
import Products from "../../Pages/AdminDashboard/AdminComponents/HandleProduct/Products";
import Checkout from "../../Pages/PublicPages/Checkout/Checkout";
import OrderConfirmMessage from "../../Pages/PublicPages/Checkout/OrderConfirmMessage";

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
        path: "/cart/checkout",
        element: <Checkout/>,
      },
      {
        path: "/cart/checkout/order_confirm",
        element: <OrderConfirmMessage/>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/products/${params.id}`
          ),
      },
      {
        path: "/:id",
        element: <ProductCategory />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/products/category/${params.id}`
          ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  //Admin Dashboard
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
        path: "/dashboard/categories",
        element: <HandleCategories />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
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
      {
        path: "/account/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/account/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/account/address",
        element: <Address />,
      },
      {
        path: "/account/edit-address",
        element: <EditAddress />,
      },
    ],
  },
]);

export default router;
