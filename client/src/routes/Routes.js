import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/PublicDashboardLayout/Main";
import Home from "../Pages/PublicDasboard/Home/Home";
import Login from "../Pages/PublicDasboard/Login/Login";
import Register from "../Pages/PublicDasboard/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        ]
    }
])

export default router;