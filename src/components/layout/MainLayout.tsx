import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";
import PageRefreshWarning from "../../hooks/PageRefreshWarning";



const MainLayout = () => {


    return (
        <div>
            <Navbar></Navbar>
            <PageRefreshWarning></PageRefreshWarning>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;