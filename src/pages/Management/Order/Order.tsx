import OrderTableRow from "../../../components/ui/OrderTableRow";
import { useGetAllOrderQuery } from "../../../redux/features/cart/orderApi";
import { IOrders } from "../../../types/order.type";

const Order = () => {
    const {data:orders}=useGetAllOrderQuery(undefined);
    console.log(orders);
    return (
        <div>
      
        <h1 className=" text-2xl font-bold uppercase text-center ">Order List</h1>
        <div className="flex justify-end">
           
        </div>
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Coustomer Name</th>
                            <th>Coustomer Address </th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th className="col-span-3s">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           orders?.data.map((item:IOrders) => <OrderTableRow key={item._id} item={item} ></OrderTableRow>)
                        }


                    </tbody>


                </table>
            </div>
        </div>

    </div>
    );
};

export default Order;