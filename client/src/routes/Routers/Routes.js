import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/PublicDashboardLayout/Main";
import Home from "../../Pages/PublicPages/Home/Home";
import Login from "../../Pages/PublicPages/Login/Login";
import Register from "../../Pages/PublicPages/Register/Register";
import PrivateRouters from "../PrivateRouters/PrivateRouters";
import AdminDasboard from "../../Pages/AdminDasboard/AdminDasboard";
import CartDetails from "../../Pages/PublicPages/CartDetails/CartDetails";
import ProductDetails from "../../Pages/PublicPages/ProductDetails/ProductDetails";
import ProductCategory from "../../Pages/PublicPages/ProductCategory/ProductCategory";
import UserDashboard from "../../Pages/PublicPages/UserDashboard/UserDashboard";

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
        element: <PrivateRouters><AdminDasboard></AdminDasboard></PrivateRouters>

    }
])

export default router;