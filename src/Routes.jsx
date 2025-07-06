import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Components.jsx/MainLayout";
import Home from "./Components.jsx/Home";
import GamePage from "./Components.jsx/GamePages/GamePage";



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
    element:<GamePage></GamePage> ,
  }
]);

export default router; 