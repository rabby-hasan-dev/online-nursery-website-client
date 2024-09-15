import { Button, message, Popconfirm, PopconfirmProps } from "antd";
import { openModal } from "../../redux/features/ModalState/modalSlice";
import { useDeleteProudctMutation } from "../../redux/features/product/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { useDeleteCategoyMutation } from "../../redux/features/categories/categorieApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { IProduct } from "../../types/prduct.type";
import { ICategory } from "../../types/category.type";
import { useState } from "react";

type TableRowProps = {
    item: IProduct | ICategory;
}

const TableRow = ({ item }: TableRowProps) => {
    const [deleteProduct] = useDeleteProudctMutation();
    const [deleteCategory] = useDeleteCategoyMutation();
    const disPatch = useAppDispatch()
    const [seeMore, setSeeMore] = useState(false);


    const ProductConfirm: PopconfirmProps['onConfirm'] = async () => {
        if (isProduct(item)) {
            const res = await deleteProduct(item?._id).unwrap();
            if (res?.success) {
                message.success('Product Delete Successfully');
            }
        }

    }

    const CategoryConfirm: PopconfirmProps['onConfirm'] = async () => {
        if (isCategory(item)) {
            const res = await deleteCategory(item?._id).unwrap();
            if (res?.success) {
                message.success('Category Delete Successfully');
            }
        }

    };

    // Type guards to differentiate between product and category
    const isProduct = (item: IProduct | ICategory): item is IProduct => 'title' in item;
    const isCategory = (item: IProduct | ICategory): item is ICategory => 'name' in item;

    return (

        <>

            {
                isProduct(item) && <>
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
                        <td>{item?.quantity} </td>
                        <td>{item?.price}</td>
                        <th className="flex justify-center items-center">

                            <Button onClick={() => disPatch(openModal(item?._id))} className="btn btn-ghost btn-xs"> <EditOutlined />Update </Button>
                            <Popconfirm
                                title="Delete the product"
                                description="Are you sure to delete this product?"
                                onConfirm={ProductConfirm}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button className="btn btn-ghost btn-xs"><DeleteOutlined />Delete  </Button>
                            </Popconfirm>
                        </th>
                    </tr>
                </>

            }

            {isCategory(item) && <>
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
                    <td>
                        {seeMore ? item?.description : item?.description.slice(0, 30)}
                        {item?.description.length > 30 && (
                            <span
                                className="font-lg text-blue-500 cursor-pointer"
                                onClick={() => setSeeMore(!seeMore)}
                            >
                                {seeMore ? " See Less" : " ... See More"}
                            </span>
                        )}
                    </td>
                    <td>{item?.productStock}</td>
                    <th className="flex justify-center items-center">
                        <Button onClick={() => disPatch(openModal(item?._id))} className="btn btn-ghost btn-xs"><EditOutlined />Update </Button>
                        <Popconfirm
                            title="Delete the category"
                            description="Are you sure to delete this category?"
                            onConfirm={CategoryConfirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button className="btn btn-ghost btn-xs"><DeleteOutlined />Delete</Button>
                        </Popconfirm>
                    </th>
                </tr>
            </>

            }


        </>

    );
};

export default TableRow;