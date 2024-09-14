import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { TSidebarItems } from '../../types/global';

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
               <Link to='/'> <h1 className='text-xl' >Online Nursery</h1> </Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;
