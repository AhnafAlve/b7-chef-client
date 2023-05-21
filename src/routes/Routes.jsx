import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import DetailsLayout from "../layouts/DetailsLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: 'chefs/:id',
            //     element: <Details></Details>,
            // },
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
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;