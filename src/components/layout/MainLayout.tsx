import Home from "../../pages/Home/Home/Home";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";



const MainLayout = () => {


    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;