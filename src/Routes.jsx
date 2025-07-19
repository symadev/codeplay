import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Components.jsx/MainLayout";
import Home from "./Components.jsx/Home";
import GamePage from "./Components.jsx/GamePages/GamePage";
import PrivateRoute from "./Components.jsx/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }

    ],
    
    
  },

   {
    path: "game",
    element:<PrivateRoute><GamePage></GamePage></PrivateRoute> ,
  }
]);

export default router; 