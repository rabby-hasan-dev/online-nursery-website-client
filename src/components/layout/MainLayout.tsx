import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";



const MainLayout = () => {


    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;