import { openModal } from "../../redux/features/ModalState/modalSlice";
import { useDeleteProudctMutation } from "../../redux/features/product/productApi";
import { useAppDispatch } from "../../redux/hooks";

const TableRow = ({ item }) => {
    const { _id, images, title, category, price } = item;
    const [deleteProduct] = useDeleteProudctMutation();
    const disPatch = useAppDispatch()
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={images}
                                alt="product_image" />
                        </div>
                    </div>

                </div>
            </td>
            <td>{title}</td>
            <td>{category?.name} </td>
            <td>{price}</td>
            <th>
                <button onClick={() => disPatch(openModal())} className="btn btn-ghost btn-xs">Update </button>
                <button onClick={() => deleteProduct(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>

    );
};

export default TableRow;