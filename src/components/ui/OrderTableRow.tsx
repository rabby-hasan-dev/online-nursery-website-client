import { Button } from "antd";
import { IOrders } from "../../types/order.type";


const OrderTableRow = ({ item }: { item: IOrders }) => {
    return (

        <>
            <tr>
                <td>{item?.customerName} </td>
                <td>{item?.customerAddress}</td>
                <td>{item?.productId?.title}</td>
                <td>{item?.quantity}</td>
                <td>{item?.totalPrice} </td>
                <th>
                    <Button className="btn btn-ghost btn-xs">Status</Button>
                </th>
            </tr>
        </>


    );
};

export default OrderTableRow;