import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Dashboard from "../Pages/Dashboard/Dashboard";

const myCustomRouter = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  },
                  {
                        path: '/orders',
                        element: <PrivateRoute><Orders></Orders></PrivateRoute>
                  },
                  {
                        path: '/profile',
                        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
                  },
                  {
                        path: '/dashboard',
                        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
                  }
            ]
      }
])

export default myCustomRouter;