import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/PublicDashboardLayout/Main";
import Home from "../../Pages/PublicPages/Home/Home";
import Login from "../../Pages/PublicPages/Login/Login";
import Register from "../../Pages/PublicPages/Register/Register";
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
import Checkout from "../../Pages/PublicPages/Checkout/Checkout";
import OrderConfirmMessage from "../../Pages/PublicPages/Checkout/OrderConfirmMessage";
import PrivateRouters from './../PrivateRouters/PrivateRouters';
import UserInfo from "../../Pages/AdminDashboard/AdminComponents/UserInfo/UserInfo";
import ProductManagerDetails from "../../Pages/AdminDashboard/AdminComponents/Products/productsComponents/ProductManagerDetails";
import ProductManager from "../../Pages/AdminDashboard/AdminComponents/Products/productsComponents/ProductManager";
import Products from "../../Pages/AdminDashboard/AdminComponents/Products/Products";
import Categories from "../../Pages/AdminDashboard/AdminComponents/Categories/Categories";
import AdminOptions from "../../Pages/AdminDashboard/AdminComponents/AdminOptions/AdminOptions";
import AboutPage from "../../Pages/PublicPages/AboutPage/AboutPage";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: "/checkout/order-confirm",
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
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AdminOptions />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/users",
        element: <UserInfo />,
      },
      {
        path: "/dashboard/orders/details",
        element: <SpecificOrderDetails />,
      },
      {
        path: "/dashboard/categories",
        element: <Categories />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/products/operation",
        element: <ProductManager/>,
      },
      {
        path: "/dashboard/products/operation/:id",
        element: <ProductManagerDetails/>,
      },
    ],
  },
  //User Dashboard
  {
    path: "/account",
    element:<UserDashboard />,
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
