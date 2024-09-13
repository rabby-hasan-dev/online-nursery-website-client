import { Button } from "antd";
import TableRow from "../../../../components/ui/TableRow";
import { openModal } from "../../../../redux/features/ModalState/modalSlice";
import { useGetProuctQuery } from "../../../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { IProduct } from "../../../../types/prduct.type";
import CreateProduct from "../CreateProduct/CreateProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";



const AllProduct = () => {
    const disPatch = useAppDispatch();
    const { data: products } = useGetProuctQuery(undefined);
    const id = useAppSelector((state) => state.modal.id);

    return (
        <div>
            {
                !id ? <CreateProduct></CreateProduct> : <UpdateProduct></UpdateProduct>
            }
            <h1 className=" text-2xl font-bold uppercase text-center ">Produdcts List</h1>
            <div className="flex justify-end">
                <Button className="uppercase" onClick={() => disPatch(openModal(undefined))} >Create new product </Button>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image </th>
                                <th>Title </th>
                                <th>Category</th>
                                <th>Price</th>
                                <th className="col-span-3s">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.data.map((item: IProduct) => <TableRow key={item._id} item={item} ></TableRow>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>


    );
};

export default AllProduct;