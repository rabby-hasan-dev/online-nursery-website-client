import { Button } from "antd";
import { openModal } from "../../redux/features/ModalState/modalSlice";
import { useDeleteProudctMutation } from "../../redux/features/product/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { useDeleteCategoyMutation } from "../../redux/features/categories/categorieApi";


const TableRow = ({ item }: { item: any }) => {
    const [deleteProduct] = useDeleteProudctMutation();
    const [deleteCategory] = useDeleteCategoyMutation();
    const disPatch = useAppDispatch()

    return (

        <>
            {
                item?.title && <>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={item?.image}
                                            alt="product_image" />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>{item?.title}</td>
                        <td>{item?.category?.name} </td>
                        <td>{item?.price}</td>
                        <th>
                            <Button onClick={() => disPatch(openModal(item?._id))} className="btn btn-ghost btn-xs">Update </Button>
                            <Button onClick={() => deleteProduct(item?._id)} className="btn btn-ghost btn-xs">Delete</Button>
                        </th>
                    </tr>
                </>

            }

            {item?.name && <>
                <tr>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={item?.image}
                                        alt="product_image" />
                                </div>
                            </div>

                        </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.description} </td>
                    <td>{item?.productStock}</td>
                    <th>
                        <Button onClick={() => disPatch(openModal(item?._id))} className="btn btn-ghost btn-xs">Update </Button>
                        <Button onClick={() => deleteCategory(item?._id)} className="btn btn-ghost btn-xs">Delete</Button>
                    </th>
                </tr>
            </>

            }


        </>

    );
};

export default TableRow;