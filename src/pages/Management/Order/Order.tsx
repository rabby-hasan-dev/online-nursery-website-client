import { Spin } from "antd";
import OrderTableRow from "../../../components/ui/OrderTableRow";
import { useGetAllOrderQuery } from "../../../redux/features/cart/orderApi";
import { IOrders } from "../../../types/order.type";
import { toast } from "sonner";

const Order = () => {
    const { data: orders, isLoading, isFetching, error } = useGetAllOrderQuery(undefined);
    if (isLoading || isFetching) {
        return <Spin></Spin>
    }
    if (error) {
        return toast.error('API Something problem!')
    }
    return (
        <div>

            <h1 className=" text-2xl font-bold uppercase text-center ">Order List</h1>
            <div className="flex justify-start mb-5">
                <p className="font-bold text-lg" > Total Order: {orders?.data?.length} </p>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Coustomer Name</th>
                                <th>Coustomer Address </th>
                                <th>Product Name </th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th className="col-span-3s">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.data.map((item: IOrders) => <OrderTableRow key={item._id} item={item} ></OrderTableRow>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Order;