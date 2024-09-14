import { Button, message, Popconfirm, PopconfirmProps } from "antd";
import { openModal } from "../../redux/features/ModalState/modalSlice";
import { useDeleteProudctMutation } from "../../redux/features/product/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { useDeleteCategoyMutation } from "../../redux/features/categories/categorieApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


const TableRow = ({ item }: { item: any }) => {
    const [deleteProduct] = useDeleteProudctMutation();
    const [deleteCategory] = useDeleteCategoyMutation();
    const disPatch = useAppDispatch()


    const ProductConfirm: PopconfirmProps['onConfirm'] = async (e) => {
        const res = await deleteProduct(e).unwrap();
        if (res?.success) {
            message.success('Product Delete Successfully');
        }
    }

    const CategoryConfirm: PopconfirmProps['onConfirm'] = async (e) => {
        const res = await deleteCategory(e).unwrap();
        if (res?.success) {
            message.success('Category Delete Successfully');
        }
    };



    return (

        <>

            {
                item?.title && <>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask h-12 w-12">
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

                            <Button onClick={() => disPatch(openModal(item?._id))} className="btn btn-ghost btn-xs"> <EditOutlined />Update </Button>
                            <Popconfirm
                                title="Delete the product"
                                description="Are you sure to delete this product?"
                                onConfirm={() => ProductConfirm(item._id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className="btn btn-ghost btn-xs"><DeleteOutlined />Delete  </Button>
                            </Popconfirm>
                        </th>
                    </tr>
                </>

            }

            {item?.name && <>
                <tr>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask  h-12 w-12">
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
                        <Button onClick={() => disPatch(openModal(item?._id))} className="btn btn-ghost btn-xs"><EditOutlined />Update  </Button>
                        <Popconfirm
                            title="Delete the category"
                            description="Are you sure to delete this category?"
                            onConfirm={() => CategoryConfirm(item._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button className="btn btn-ghost btn-xs"><DeleteOutlined />Delete  </Button>
                        </Popconfirm>
                    </th>
                </tr>
            </>

            }


        </>

    );
};

export default TableRow;