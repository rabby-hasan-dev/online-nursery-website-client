import Home from "../../pages/Home/Home/Home";
import Navbar from "../../pages/shared/Navbar/Navbar";



const MainLayout = () => {


    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <Home></Home>
        </div>
    );
};

export default MainLayout;