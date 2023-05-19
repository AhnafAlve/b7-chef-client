import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Details from './pages/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details',
        element: <Details></Details>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
