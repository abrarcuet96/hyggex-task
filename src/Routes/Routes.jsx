import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
export default myRoutes;
