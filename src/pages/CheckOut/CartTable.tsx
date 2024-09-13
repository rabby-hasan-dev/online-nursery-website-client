import { Button, Card, InputNumber, Table } from "antd";
import { ICartItem } from "../../types/cart.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { removeFromCart, updateQuantity } from "../../redux/features/cart/CartSlice";
import { DeleteOutlined } from '@ant-design/icons';

const CartTable = () => {
    
    const dispatch = useAppDispatch();
    const cartData = useAppSelector((state: RootState) => state.cart.items);

    const handleQuantityChange = (productId: string, quantity: number) => {
        dispatch(updateQuantity({ productId, quantity }));
    };

    const handleRemoveItem = (productId: string) => {
        dispatch(removeFromCart(productId));
    };



    const columns = [
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text: number) => `$${text.toFixed(2)}`,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text: number, record: ICartItem) => (
                <InputNumber
                    min={1}
                    value={text}
                    onChange={(value) =>
                        handleQuantityChange(record.productId, value || 1)
                    }
                    className="w-full"
                />
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (_: number, record: ICartItem) =>
                `$${(record.price * record.quantity).toFixed(2)}`,
        },
        {
            title: '',
            key: 'action',
            render: (_: any, record: ICartItem) => (
                <Button
                    type="link"
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveItem(record.productId)}
                />
            ),
        },
    ];



    return (
        <Card className="shadow-md">
            <Table
                dataSource={cartData.map((item: ICartItem) => ({
                    ...item,
                    key: item.productId,
                }))}
                columns={columns}
                pagination={false}
                rowClassName="hover:bg-gray-100"
                scroll={{ x: true }}
            />
        </Card>
    );
};

export default CartTable;