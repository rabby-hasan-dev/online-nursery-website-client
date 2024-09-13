

import { Typography, Row, Col, } from 'antd';
import { RootState } from '../../redux/store';
import { clearCart, } from '../../redux/features/cart/CartSlice';
import { ICartItem } from '../../types/cart.type';
import OrderForm from './OrderForm';
import CartTable from './CartTable';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OrderSummary from './OrderSummary';

const { Title, } = Typography;

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state: RootState) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());

  };

  const totalAmount = cartData.reduce(
    (sum: number, item: ICartItem) => sum + item.price * item.quantity,
    0
  );


  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <Title level={2} className="text-center mb-6">
        Shopping Cart
      </Title>
      <Row gutter={16}>

        <Col xs={24} md={18} className="mb-6">
          <CartTable  ></CartTable>
        </Col>

        <Col xs={24} md={6}>
          <OrderSummary
            totalAmount={totalAmount}
            onClearCart={handleClearCart}
          />
        </Col>

      </Row>
      <OrderForm />
    </div>
  );
};



export default Checkout;