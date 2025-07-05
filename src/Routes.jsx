import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Components.jsx/MainLayout";
import Home from "./Components.jsx/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    children:[
        {
         path: "/",
    element:<Home></Home>,
    }

    ]
  },
]);

export default router; 