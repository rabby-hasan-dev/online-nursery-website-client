
import { Layout, theme } from 'antd';
import { Button } from 'antd/es/radio';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;


const ManagmentLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <div>
            <Layout style={{ height: '100vh' }}>
                <Sidebar ></Sidebar>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} >
                        <Link to="/" >  <Button className='ml-4' >Go Home</Button> </Link>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                                height: "100%"
                            }}
                        >
                            <Outlet></Outlet>
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </div>
    );
};

export default ManagmentLayout;