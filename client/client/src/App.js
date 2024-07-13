import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Products from "./Products/Products";
import Product from "./Product/Product";
import Home from "./Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss"


const Layout = () => {  //so that footer ans navbar remain common for all 
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/products/:id",
      element:<Products/>,
    },
    {
      path:"/product/:id",
      element:<Product/>,
    }
    ]
  },

]);
function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
