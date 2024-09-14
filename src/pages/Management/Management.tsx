

import { Card, Row, Col, Statistic, Table, Button } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Management = () => {
  // Sample data for recent orders and products
  const recentOrders = [
    { key: '1', orderId: '12345', customer: 'John Doe', amount: '$150.00', status: 'Delivered' },
    { key: '2', orderId: '12346', customer: 'Jane Smith', amount: '$85.00', status: 'Processing' },
  ];

  const recentProducts = [
    { key: '1', product: 'Plant A', price: '$20.00', stock: 'In Stock' },
    { key: '2', product: 'Plant B', price: '$30.00', stock: 'Low Stock' },
  ];

  const orderColumns = [
    { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  const productColumns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
  ];

  return (
    <div className=" p-4 bg-gray-100 ">
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      {/* Statistics Section */}
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card className="shadow-lg">
            <Statistic
              title="Total Sales"
              value={1200}
              prefix={<DollarOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="shadow-lg">
            <Statistic
              title="Orders"
              value={150}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="shadow-lg">
            <Statistic
              title="Customers"
              value={300}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#f56a00' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="shadow-lg">
            <Statistic
              title="Products"
              value={50}
              prefix={<ShopOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Orders Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium mb-4">Recent Orders</h2>
        <Table dataSource={recentOrders} columns={orderColumns} pagination={false} />
      </div>

      {/* Recent Products Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium mb-4">Recently Added Products</h2>
        <Table dataSource={recentProducts} columns={productColumns} pagination={false} />
      </div>

      {/* Add Product Button */}
      <div className="mt-8 flex justify-end">
       <Link to='/management/allProduct' >
       <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
          Add New Product
        </Button>
       </Link>
      </div>
    </div>
  );
};

export default Management;
