import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ManagmentLayout from "../components/layout/ManagmentLayout";
import Home from "../pages/Home/Home/Home";
import Management from "../pages/Management/Management";
import AllProduct from "../pages/Management/Products/Products/AllProducts";
import ProductHub from "../pages/ProductHub/ProductHub";
import ProductDetails from "../pages/shared/ProductDetails/ProductDetails";
import Categories from "../pages/Management/Category/Categories/Categories";
import Checkout from "../pages/CheckOut/Checkout";
import Order from "../pages/Management/Order/Order";
import AboutPage from "../pages/AboutPage/AboutPage";




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
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            }
        ]
    },
    {
        path: '/management',
        element: <ManagmentLayout></ManagmentLayout>,
        children: [
            {
                index:true,
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
                path: 'orders',
                element: <Order></Order>
            },
        ]
    },


])


export default router;