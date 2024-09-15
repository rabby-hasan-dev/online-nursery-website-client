import { Button, Card, Divider, Space } from "antd";
import SummaryRow from "./SummaryRow";
import { DeleteOutlined } from "@ant-design/icons";


interface OrderSummaryProps {
    totalAmount: number;
    onClearCart: () => void;
  }
  
  const OrderSummary= ({ totalAmount,onClearCart}:OrderSummaryProps) => {
    const tax = totalAmount * 0.05;
    const shipping = 10.0;
    const grandTotal = totalAmount + tax + shipping;
  
    return (
      <div>
        <Card title="Order Summary" className="shadow-md">
          <Divider orientation="left">Summary</Divider>
          <Space direction="vertical" className="w-full">
            <SummaryRow label="Subtotal" value={totalAmount} />
            <SummaryRow label="Tax (5%)" value={tax} />
            <SummaryRow label="Shipping" value={shipping} />
            <Divider />
            <SummaryRow label="Total" value={grandTotal} isBold isTotal />
          </Space>
          <Button
            type="default"
            shape="round"
            onClick={onClearCart}
            className="w-full mt-2"
            size="large"
          >
            <DeleteOutlined />
            Clear Cart
          </Button>
        </Card>
      </div>
    );
  };

  export default OrderSummary;