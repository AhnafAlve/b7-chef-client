import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import DetailsLayout from "../layouts/DetailsLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRout from "./PrivateRout";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
    {
        path: 'chefs',
        element: <DetailsLayout></DetailsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRout><Details></Details></PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;