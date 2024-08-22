import { Button } from "antd";
import Modals from "../../../../components/Modal/Modals";
import TableRow from "../../../../components/ui/TableRow";
import { openModal } from "../../../../redux/features/ModalState/modalSlice";
import { useGetProuctQuery, useGetSingleProuctQuery } from "../../../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

const AllProduct = () => {
    const disPatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.modal.isOpen);
    const id = useAppSelector((state) => state.modal.id);
    const { data:products } = useGetProuctQuery(undefined);
    const { data: singleProduct } = useGetSingleProuctQuery(id ,{skip:!id});
   
    

    return (
        <div>
            <Modals isOpen={isOpen} id={id} payload={singleProduct}  ></Modals>
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
                                products?.data.map((item) => <TableRow key={item._id} item={item} ></TableRow>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>


    );
};

export default AllProduct;