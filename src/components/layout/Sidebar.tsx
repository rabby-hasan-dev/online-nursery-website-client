import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;



const Sidebar = () => {

    const sidebarItems: any = [
        {
            key: "Managements",
            label: <Link to="/management/management">Management</Link>
        },

        {
            key: "All Product",
            label: <Link to="/management/allProduct">All Product</Link>
        },
        {
            key: "Add Product",
            label: <Link to="/management/addProduct">Add Product</Link>
        },
        {
            key: "Update Product",
            label: <Link to="/management/updateProduct">UpdateProduct</Link>
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
                <h1 className='text-xl' >Online Nursery</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;
