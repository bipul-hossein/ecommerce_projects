import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/PublicDashboardLayout/Main";
import Home from "../../Pages/PublicDasboard/Home/Home";
import Login from "../../Pages/PublicDasboard/Login/Login";
import Register from "../../Pages/PublicDasboard/Register/Register";
import PrivateRouters from "../PrivateRouters/PrivateRouters";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import CartDetails from "../../Pages/PublicDasboard/CartDetails/CartDetails";
import ProductDetails from "../../Pages/PublicDasboard/ProductDetails/ProductDetails";
import ProductCategory from "../../Pages/PublicDasboard/ProductCategory/ProductCategory";
import UserDashboard from "../../Pages/PublicDasboard/UserDashboard/UserDashboard";
import AdminLayout from "../../Layout/AdminDasboardLayout/AdminLayout";
import Orders from "../../Pages/AdminDashboard/AdminComponents/Orders/Orders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            // {
            //     path: '/login',
            //     element: <Login />
            // },
            {
                path: '/login',
                element: <UserDashboard />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <CartDetails />
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            },
            {
                path: '/product-category/:id',
                element: <ProductCategory />,
                loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouters><AdminLayout /></PrivateRouters>,
        children: [
            {
                path: '/dashboard',
                element: <AdminDashboard />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            },
        ]

    },
])

export default router;