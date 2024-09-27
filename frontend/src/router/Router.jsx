import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import Cart from '../components/Cart'
import UnProtected from '../components/UnProtected'
import Protected from '../components/Protected'
import Order from '../components/Order'
import MyOrder from '../components/MyOrder'
import Dashboard from '../components/Dashboard'
import AdminUser from '../components/AdminUser'
import AdminProduct from '../components/AdminProduct'
import AdminOrder from '../components/AdminOrder'
import Profile from '../components/Profile'
import OpenRoutes from '../components/OpenRoutes'
import GoogleAuth from '../components/GoogleAuth'

const Router = createBrowserRouter([
    {
        element: <OpenRoutes />,
        children: [{
            path: "/",
            element: <Home />
        },
        {
            path: "/cart",
            element: <Cart />
        },]
    },
    {
        element: <UnProtected />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/Signup",
                element: <Signup />
            },
            {
                path: "/googleauth",
                element: <GoogleAuth/>
            },
        ]
    },
    {
        element: <Protected allowedRole={["User"]} />,
        children: [
            {
                path: "/order",
                element: <Order />
            },
            {
                path: "/myorder",
                element: <MyOrder />
            }
        ]
    },
    {
        element: <Protected allowedRole={["Admin"]} />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/adminuser",
                element: <AdminUser />
            },
            {
                path: "/adminproduct",
                element: <AdminProduct />
            },
            {
                path: "/adminorder",
                element: <AdminOrder />
            },
        ]
    },
    {
        element: <Protected allowedRole={["User", "Admin"]} />,
        children: [
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

export default Router

// /login , /signup --- anyone but not logged-in user
// /cart , / --- anyone
// /profile --- both admin and user
// /dashboard , /adminuser , /adminproduct , /adminorder --- Admin
// /order , /myorders --- User



// import React from 'react'
// import { createBrowserRouter, Navigate } from 'react-router-dom'
// import Singup from '../components/Signup'
// import Login from '../components/Login'
// import Home from '../components/Home'
// import Cart from '../components/Cart'
// import UnProtected from '../components/UnProtected'
// import Protected from '../components/Protected'
// import MyOrder from '../components/MyOrder'
// import Order from '../components/Order'
// import Dashboard from '../components/Dashboard'
// import AdminUser from '../components/AdminUser'
// import AdminProduct from '../components/AdminProduct'
// import AdminOrder from '../components/AdminOrder'
// import Profile from '../components/Profile'
// import OpenRoutes from '../components/OpenRoutes'
// import GoogleAuth from '../components/GoogleAuth'

// const Router = createBrowserRouter([
//     {
//         element: <OpenRoutes />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />
//             },
//             {
//                 path: "/cart",
//                 element: <Cart />
//             }
//         ]
//     },
//     {
//         element: <UnProtected />,
//         children: [
//             {
//                 path: "/login",
//                 element: <Login />
//             },
//             {
//                 path: "/signup",
//                 element: <Singup />
//             },
//             {
//                 path: "/googleauth",
//                 element: <GoogleAuth/>
//             },
//         ]
//     },
//     {
//         element: <Protected allowedRole={["User"]} />,
//         children: [
//             {
//                 path: "/order",
//                 element: <Order />
//             },
//             {
//                 path: "/myorder",
//                 element: <MyOrder />
//             }
//         ]
//     },
//     {
//         element: <Protected allowedRole={["Admin"]} />,
//         children: [
//             {
//                 path: "/dashboard",
//                 element: <Dashboard />
//             },
//             {
//                 path: "/adminuser",
//                 element: <AdminUser />
//             },
//             {
//                 path: "/adminproduct",
//                 element: <AdminProduct />
//             },
//             {
//                 path: "/adminorder",
//                 element: <AdminOrder />
//             },
//         ]
//     },
//     {
//         element: <Protected allowedRole={["User", "Admin"]} />,
//         children: [
//             {
//                 path: "/profile",
//                 element: <Profile />
//             }
//         ]
//     }
// ])

// export default Router