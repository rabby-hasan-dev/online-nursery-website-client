
import { Link } from "react-router-dom";
import brandLogo from '../../../assets/brandLogo.png';
import Container from "../../../components/ui/Container";
import { useAppSelector } from "../../../redux/hooks";
import { items } from "../../../redux/features/cart/CartSlice";
import { Avatar, Badge, Input, Drawer, Button } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from 'react';

const { Search } = Input;

const Navbar = () => {
    const cartNumber = useAppSelector(items);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li> <Link to='/products'>Products Hub</Link></li>
            <li> <Link to='/about'>About Us</Link></li>
            <li><Link to="/management">Management</Link></li>
        </>
    );

    return (
        <Container>
            {/* Navbar Top Section */}
            <div className="flex justify-between items-center px-4 py-2 lg:px-[60px]">
                {/* Menu Icon for Mobile */}
                <div className="lg:hidden">
                    <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />

                    {/* Drawer for mobile menu */}

                    <Drawer
                        title={<img src={brandLogo} alt="barndLogo" />}
                        placement={'left'}
                        closable={false}
                        onClose={closeDrawer}
                        open={drawerVisible}
                        key={'left'}
                    >
                        <ul className="menu flex flex-col space-y-4">
                            {navOptions}
                        </ul>
                    </Drawer>

                </div>


                {/* Search Bar (Hidden on mobile, visible on large screens) */}
                <div className="hidden lg:flex justify-center items-center border hover:bg-slate-100 rounded">
                    <Search
                        placeholder="Search for products"
                        size="middle"
                        allowClear
                    />
                </div>

                {/* Brand Logo */}
                <div className="flex flex-1 justify-center items-center">
                    <Link to="/">
                        <img src={brandLogo} alt="brandLogo" className="w-32 lg:w-32" />
                    </Link>
                </div>



                {/* Cart Icon */}
                <div className="flex items-center space-x-4">
                    <Link to='/checkout'>
                        <Badge count={cartNumber.length}>
                            <Avatar shape="square" icon={<ShoppingCartOutlined />} size="default" />
                        </Badge>
                    </Link>
                </div>
            </div>

            {/* Navbar Bottom Section */}
            <hr />
            <div className="hidden lg:flex justify-center">
                <ul className="menu menu-horizontal px-1 space-x-[32px] uppercase font-medium">
                    {navOptions}
                </ul>
            </div>
        </Container>
    );
};

export default Navbar;

