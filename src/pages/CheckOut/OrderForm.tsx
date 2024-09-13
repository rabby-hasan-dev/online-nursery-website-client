/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RootState } from '../../redux/store';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Button, Input, Form, message, Typography, Space} from 'antd';
import { clearCart } from '../../redux/features/cart/CartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useCreateOrderMutation } from '../../redux/features/cart/orderApi';
const { Title } = Typography;


const OrderForm: React.FC = () => {
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state: RootState) => state.cart.items);
  
  const handleSubmit = async (values: any) => {

    // Check if cartData is not empty
    if (cartData.length === 0) {
      message.error('Your cart is empty. Please add items to your cart before placing an order.');
      return;
    }


    try {
      // Ensure all required fields are present
      if (!values.customerName || !values.customerPhone || !values.customerAddress) {
        message.error('Please complete all required fields.');
        return;
      }

      // Send each product separately
      for (const item of cartData) {
        const orderData = {
          customerName: values.customerName,
          customerPhone: values.customerPhone,
          customerAddress: values.customerAddress,
          productId: item.productId,
          quantity: item.quantity,
        };
        
        // Send data for each item =====>
        await createOrder(orderData)
      }

      message.success('Order created successfully');
      dispatch(clearCart())
       
    } catch (error) {
      console.error('Error:', error);  // Log error
      message.error('Error creating order');
    }
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Form.Item
        name="customerName"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item
        name="customerPhone"
        label="Phone"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>
      <Form.Item
        name="customerAddress"
        label="Address"
        rules={[{ required: true, message: 'Please enter your address' }]}
      >
        <Input.TextArea placeholder="Enter your address" />
      </Form.Item>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Title level={4} className="text-center">
          <DollarCircleOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: "4px" }} />
          Cash on Delivery
        </Title>
      </Space>
      <Button type="primary" htmlType="submit">Place Order</Button>
    </Form>
  );
};

export default OrderForm;