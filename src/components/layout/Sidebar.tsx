import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { TSidebarItems } from '../../types/global';
import brandLogo from '../../assets/brandLogo.png';
const { Sider } = Layout;



const Sidebar = () => {

    const sidebarItems: TSidebarItems[] = [
        {
            key: "Managements",
            label: <Link to="/management">Management</Link>
        },

        {
            key: "All Categories",
            label: <Link to="/management/categories">All Categories</Link>
        },
        {
            key: "All Product",
            label: <Link to="/management/allProduct">All Product</Link>
        },
        {
            key: "Order",
            label: <Link to="/management/orders">Order </Link>
        },



    ]



    return (
        <Sider
            theme='light'
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{

                color: "white",
                height: '4rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} >
                {/* <Link to='/'> <h1 className='text-xl' >Online Nursery</h1> </Link> */}
                <Link to="/">
                    <img src={brandLogo} alt="brandLogo" className="w-32 " />
                </Link>
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;
