
import { Button } from "antd";
import { useAppDispatch, useAppSelector, } from "../../../../redux/hooks";
import { openModal } from "../../../../redux/features/ModalState/modalSlice";
import TableRow from "../../../../components/ui/TableRow";
import { useGetAllCategoriesQuery, } from "../../../../redux/features/categories/categorieApi";
import { ICategory } from "../../../../types/category.type";
import UpdatedCategory from "../UpdatedCategory/UpdatedCategory";
import CreateCategory from "../CreateCategory/CreateCategory";


const Categories = () => {
    const disPatch = useAppDispatch();
    const id = useAppSelector((state) => state.modal.id);
    const { data: categories } = useGetAllCategoriesQuery(undefined);

    return (
        <div>
            {
                !id ? <CreateCategory></CreateCategory> : <UpdatedCategory></UpdatedCategory>
            }
            <h1 className=" text-2xl font-bold uppercase text-center ">Category List</h1>
            <div className="flex justify-end">
                <Button className="uppercase" onClick={() => disPatch(openModal(undefined))} >Create New Category </Button>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image </th>
                                <th>Name </th>
                                <th>Description</th>
                                <th>Product Number</th>
                                <th className="col-span-3s">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories?.data.map((item: ICategory) =>
                                    <TableRow key={item._id} item={item} ></TableRow>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>


    );
};

export default Categories;