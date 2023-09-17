import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/PublicDashboardLayout/Main";
import Home from "../../Pages/PublicDasboard/Home/Home";
import Login from "../../Pages/PublicDasboard/Login/Login";
import Register from "../../Pages/PublicDasboard/Register/Register";
import PrivateRouters from "../PrivateRouters/PrivateRouters";
import AdminDasboard from "../../Pages/AdminDasboard/AdminDasboard";
import CartDetails from "../../Pages/PublicDasboard/CartDetails/CartDetails";
import ProductDetails from "../../Pages/PublicDasboard/ProductDetails/ProductDetails";
import ProductCategory from "../../Pages/PublicDasboard/ProductCategory/ProductCategory";

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
            {
                path: '/login',
                element: <Login />
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
                path: '/product-Details/:id',
                element: <ProductDetails />
            },
            {
                path: '/product-category',
                element: <ProductCategory />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouters><AdminDasboard></AdminDasboard></PrivateRouters>

    }
])

export default router;