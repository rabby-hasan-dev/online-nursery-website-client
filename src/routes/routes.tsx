import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ManagmentLayout from "../components/layout/ManagmentLayout";
import Home from "../pages/Home/Home/Home";
import Product from "../pages/Home/Product/Product";
import Management from "../pages/Management/Management";
import AddProduct from "../pages/Management/Products/AddProduct/AddProduct";
import AllProduct from "../pages/Management/Products/Products/AllProducts";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Product></Product>
            }
        ]
    },
    {
        path: '/management',
        element: <ManagmentLayout></ManagmentLayout>,
        children: [
            {
                path: 'management',
                element: <Management></Management>,
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'allProduct',
                element: <AllProduct></AllProduct>
            },
        ]
    },


])


export default router;