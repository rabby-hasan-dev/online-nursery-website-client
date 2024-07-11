
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import brandLogo from '../../../assets/brandLogo.png';
import Container from "../../../components/ui/Container";


const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li> <Link to='#'>Trees</Link></li>
        <li> <Link to='#'>About Us</Link></li>
        <li><Link to="#">Contact Us</Link></li>
        <li><Link to="#">Blogs</Link></li>



    </>
    return (
        <Container>
            <div className="flex justify-between items-center mx-[60px]">
                {/* <Sidebar navOptions={navOptions}></Sidebar> */}

                <div className="flex justify-center items-center border hover:bg-slate-100 rounded">

                    <FaSearch className="mx-1" />
                    <input className="p-1 block hover:bg-slate-100 border-none  outline-none" placeholder="Search" type="text" />
                </div>
                <div>
                    <img src={brandLogo} alt="barndLogo" />
                </div>
                <div>
                    <div className="flex items-center ">
                        <FaCartShopping className="size-5 mr-1" /> Cart 0
                    </div>
                </div>

            </div>
            <hr />
            <div className="navbar  justify-center">
                <div className="navbar-center  hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 space-x-[32px] uppercase font-medium">
                        {navOptions}


                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default Navbar;