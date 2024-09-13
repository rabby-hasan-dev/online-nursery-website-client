import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ManagmentLayout from "../components/layout/ManagmentLayout";
import Home from "../pages/Home/Home/Home";
import Management from "../pages/Management/Management";
import AddProduct from "../pages/Management/Products/CreateProduct/CreateProduct";
import AllProduct from "../pages/Management/Products/Products/AllProducts";
import ProductHub from "../pages/ProductHub/ProductHub";
import ProductDetails from "../pages/shared/ProductDetails/ProductDetails";
import Categories from "../pages/Management/Category/Categories/Categories";
import Checkout from "../pages/CheckOut/Checkout";




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
                element: <ProductHub></ProductHub>
            },
            {
                path: '/products/:productId',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
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
                path: 'categories',
                element: <Categories></Categories>
            },
            {
                path: 'allProduct',
                element: <AllProduct></AllProduct>
            },
            {
                path: 'order',
                element: <AddProduct></AddProduct>
            },
        ]
    },


])


export default router;